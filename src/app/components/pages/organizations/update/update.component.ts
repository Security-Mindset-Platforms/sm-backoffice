import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { OrganizationService } from '../../../services/organization.service';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';
import { AuthInfo, AuthService } from '../../../services/auth.service';
import { RoleService } from '../../applications/services/roles.services';
@Component({
  selector: 'app-organization-update',
  standalone: true,
  imports: [SharedModule,RouterModule, CommonModule, NgSelectModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class OrganizationUpdateComponent implements OnInit, OnDestroy {
  organization: any = {
    infos: {"name": "", "realm": ""},
    licences: [],
    users: []
  }
  roles = []
  token: string;
  applications= [];
  showToken=false;
  realms: any[]=[''];
  message: string;
  success=false;
  error = false;
  isLoading = false;
  invitationForm: FormGroup;
  private subscription: Subscription = new Subscription();
  userForm: FormGroup;
  authInfo: AuthInfo | undefined;
  organizationId: any;
  showMessage=false;
  realm = "security-mindset"
  constructor(private roleService: RoleService, private authService: AuthService,  private router: Router,  private route: ActivatedRoute, public organisationservice: OrganizationService, private fb: FormBuilder,) {
    this.createForm();
  }
  ngOnInit() {
    this.route.paramMap.subscribe(async (params: ParamMap) => {
      this.organizationId = params.get('id');
      this.authInfo = await this.authService.getAuthInfo();
      this.retrieveData();

      this.loadApplications();
      this.initInvitationForm();
    });
  }
  addInvitation() {
    if (this.invitationForm.valid) {
      const data = {
        "organizationId": this.organizationId,
         "email":  this.invitationForm.get('email')?.value,
         "clientId":  this.invitationForm.get('applicationId')?.value,
         "realm": this.realm,
          "groupes": [
           {
            id:  this.invitationForm.get('role')?.value.id,
            name:  this.invitationForm.get('role')?.value.name,
           }
          ]
      }
      const sub = this.organisationservice.sendInvitation(data).subscribe(
        response => {
          if(response.code===200){
            this.initInvitationForm();
            this.showMessage=true;
            this.message=response.message;
          }
        },
        error => {
          console.error('Error fetching data', error);
        }
      );
      this.subscription.add(sub);
     
      
    }
  }
  loadRoles(appId) {
    const sub = this.roleService.gerRoles(appId).subscribe(
      response => {
        this.roles = response.data.roles;
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
    this.subscription.add(sub);
  }
  onApplicationChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedApp = selectElement.value;
    this.roles=[]
    this.loadRoles(selectedApp);
  }
  loadApplications() {
    const sub = this.roleService.getApplications(this.realm).subscribe(
      response => {
        this.applications = response.data;
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
    this.subscription.add(sub);
  }
  initInvitationForm(): void {
    this.invitationForm = this.fb.group({
      role: ['', Validators.required], 
      applicationId: ['', Validators.required], 
      email: ['', Validators.required], 
    });
  }

  generateToken(): void {
    this.isLoading = true;
    const sub = this.organisationservice.generateCliToken(this.organizationId).subscribe(
      response => {
        this.token = response.data;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
      }
    );
    this.subscription.add(sub);
  }

  copyToClipboard(): void {
    if (this.token) {
      navigator.clipboard.writeText(this.token).then(() => {
        alert('Token copied to clipboard');
      });
    }
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      realm: ['' , [Validators.required]]
    });
  }
  createFormWithData(data: any) {
    this.userForm = this.fb.group({
      name: [data.name, [Validators.required, Validators.minLength(3)]],
      realm: [data.realm , [Validators.required]]
    });
  }
retrieveDomainData(){
  const sub = this.organisationservice.domainList().subscribe(
    response => {
      this.realms = response.data;
    },
    error => {
    }
  );
  this.subscription.add(sub);
}
retrieveData(){
  const sub = this.organisationservice.getOrganization(this.organizationId).subscribe(
    response => {
      this.organization = response.data;
      this.token=this.organization.infos.cliToken;
    },
    error => {
      this.router.navigate(['/not-found']);
    }
  );
  this.subscription.add(sub);
}

loginCli(){
  const sub = this.organisationservice.loginCli("hhh").subscribe(
    response => {
    },
    error => {
      //this.router.navigate(['/not-found']);
      console.log(error)
    }
  );
  this.subscription.add(sub);
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

onSubmit() {
  if (this.userForm.valid) {
  var data= this.userForm.value;
    this.organisationservice.createOrganization(data).subscribe(
      response => {
        this.success=true;
        this.error=false;
        this.message = "Organizaton created";
        this.createForm();
      },
      error => {
        this.error=true;
        this.success=false;
        this.message = "Internal error";
      }
    );
  
  } 
}
deleteLicence(id: any){
  this.organisationservice.deleteLicence(id).subscribe(
    response => {
      this.success=true;
      this.error=false;
      this.message = "licence deleted";
      this.retrieveData();
    },
    error => {
      this.error=true;
      this.success=false;
      this.message = "Internal error";
    }
  );
}

renewLicence(id: any){
  this.organisationservice.renewLicence(id, 2).subscribe(
    response => {
      this.success=true;
      this.error=false;
      this.message = "licence renewed";
      this.retrieveData();
    },
    error => {
      this.error=true;
      this.success=false;
      this.message = "Internal error";
    }
  );
}

enableOrDisableAccount(id,action){
  const sub = this.organisationservice.enableDisableUser(this.realm, id, action).subscribe(
    response => {
      this.retrieveData();
      alert("Action performed")
    },
    error => {
    }
  );
  this.subscription.add(sub);
}
deleteAccount(id) {
  const sub = this.organisationservice.deleteAccount(this.realm, id).subscribe(
    response => {
      this.retrieveData();
      alert("Account deleted")
    },
    error => {
    }
  );
  this.subscription.add(sub);
}

}
