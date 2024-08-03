import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import {  ToastrService } from 'ngx-toastr';
import { OrganizationService } from '../../../services/organization.service';
import { AuthInfo, AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-user-create',
  standalone: true,
  imports: [SharedModule, CommonModule, NgSelectModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class UserCreateComponent implements OnInit, OnDestroy {
  types: any[]=["Enterprise", "Internal", "Public"];
  authInfo: AuthInfo | undefined;
  realms: any[] = [];
  organizations: any[]=[];
  message: string;
  success=false;
  error = false;

  private subscription: Subscription = new Subscription();
  userForm: FormGroup;
  constructor(private authService: AuthService,    private toastr: ToastrService , public organisationservice: OrganizationService, private fb: FormBuilder,) {
    this.createForm();
  }
  ngOnInit() {
    this.retreiveOrganizationsList();
    this.retreiveRealmsList();
    // this.authInfo = await this.authService.getAuthInfo();
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
  
    this.organisationservice.createUser(data, this.userForm.value.realm, this.userForm.value.organizationId, this.userForm.value.type ).subscribe(
      response => {
        this.success=true;
        this.error=false;
        this.message = "User created";
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

}
