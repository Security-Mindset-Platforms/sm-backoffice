import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { OrganizationService } from '../../../services/organization.service';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';
import { AuthInfo, AuthService } from '../../../services/auth.service';
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
  realms: any[]=[''];
  message: string;
  success=false;
  error = false;
  private subscription: Subscription = new Subscription();
  userForm: FormGroup;
  authInfo: AuthInfo | undefined;
  organizationId: any;
  realm = "security-mindset"
  constructor(private authService: AuthService,  private router: Router,  private route: ActivatedRoute, public organisationservice: OrganizationService, private fb: FormBuilder,) {
    this.createForm();
  }
  ngOnInit() {
    this.route.paramMap.subscribe(async (params: ParamMap) => {
      this.organizationId = params.get('id');
      this.authInfo = await this.authService.getAuthInfo();
      this.retrieveData();
    });
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
    },
    error => {
      this.router.navigate(['/not-found']);
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
