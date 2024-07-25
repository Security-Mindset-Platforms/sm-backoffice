import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { OrganizationService } from '../../../services/organization.service';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-user-update',
  standalone: true,
  imports: [SharedModule,RouterModule, CommonModule, NgSelectModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class USerUpdateComponent implements OnInit, OnDestroy {
  user: any = {
  };
  types: any[]=["Enterprise", "Internal", "Public"];
  realms: any[]=[''];
  message: string;
  success=false;
  organizations: any[]=[];
  error = false;
  private subscription: Subscription = new Subscription();
  userForm: FormGroup;
  userId: any;
  realm = "master"
  constructor(private router: Router,   private route: ActivatedRoute, public organisationservice: OrganizationService, private fb: FormBuilder,) {
    this.createForm();
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = params.get('id');
      this.retrieveData();
    });
    this.retreiveOrganizationsList();
    this.retreiveRealmsList();
  }
  retreiveRealmsList(){
    const sub = this.organisationservice.domainList().subscribe(
      response => {
        this.realms = response.data;
      },
      error => {
        console.error('Error fetching data', error);
      }
    );
    this.subscription.add(sub);
  }
retreiveOrganizationsList(){
  const sub = this.organisationservice.organizationList().subscribe(
    response => {
      this.organizations = response.data;
    },
    error => {
      console.error('Error fetching data', error);
    }
  );
  this.subscription.add(sub);
}
  createForm() {
    this.userForm = this.fb.group({
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(3)]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      organizationId: ['' , [Validators.required]],
      type: ['' , [Validators.required]],
      realm: ['' , [Validators.required]]
    });
  }
  createFormWithData(data: any) {
    this.userForm = this.fb.group({
      lastName: [data.lastName, [Validators.required, Validators.minLength(3)]],
      username: [data.username, [Validators.required, Validators.minLength(3)]],
      email: [data.email, [Validators.required, Validators.minLength(3)]],
      phone: [data.phone, [Validators.required, Validators.minLength(3)]],
      firstName: [data.firstName, [Validators.required, Validators.minLength(3)]],
      organizationId: [data.organizationId , [Validators.required]],
      type: [data.accountType , [Validators.required]],
      realm: ['' , [Validators.required]]
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
  const sub = this.organisationservice.userProfile(this.userId).subscribe(
    response => {
      this.user = response.data;
      this.createFormWithData(this.user)
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
  var data= {
    username: this.userForm.value.username,
    firstName: this.userForm.value.firstName,
    lastName: this.userForm.value.lastName, 
    email: this.userForm.value.email, 
    phone: this.userForm.value.phone,
    enabled: true,
    //address: ''
  }
  
    this.organisationservice.updateUser(data, this.userForm.value.realm, this.userForm.value.organizationId, this.userForm.value.type, this.userId ).subscribe(
      response => {
        this.success=true;
        this.error=false;
        this.message = "User updated";
        this.createForm();
      },
      error => {
        // this.error=true;
        // this.success=false;
        // this.message = "Internal error";
      }
    );
  
  } 
}


}
