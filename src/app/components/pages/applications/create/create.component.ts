import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import {  ToastrService } from 'ngx-toastr';
import { OrganizationService } from '../../../services/organization.service';
import {ClientConfig} from '../client-config.model'
@Component({
  selector: 'app-application-create',
  standalone: true,
  imports: [SharedModule, CommonModule, NgSelectModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class ApplicationCreateComponent implements OnInit, OnDestroy {
  realms: any[] = [];
  message: string;
  success=false;
  error = false;
  private subscription: Subscription = new Subscription();
  userForm: FormGroup;
  constructor(    private toastr: ToastrService , public organisationservice: OrganizationService, private fb: FormBuilder,) {
    this.createForm();
  }
  ngOnInit() {
    this.retreiveRealmsList();
  }

  
  createForm() {
    this.userForm = this.fb.group({
      clientId: ['', Validators.required],
      realm: ['', Validators.required],
      clientSecret: ['', Validators.required],
      rootUrl: ['', Validators.required],
      homeUrl: ['', Validators.required],
      validRedirectUris: ['', Validators.required],
      validPostLogoutUris: ['', Validators.required],
      webOrigins: ['', Validators.required],
      defaultClientScopes: ['', Validators.required],
      optionalClientScopes: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      photos: ['', Validators.required],
      tags: ['', Validators.required]
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
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

onSubmit() {
  const formValue = this.userForm.value;
    const clientConfig: ClientConfig = {
      ...formValue,
      validRedirectUris: formValue.validRedirectUris.split(';').map((uri: string) => uri.trim()),
      validPostLogoutUris: formValue.validPostLogoutUris.split(';').map((uri: string) => uri.trim()),
      webOrigins: formValue.webOrigins.split(';').map((uri: string) => uri.trim()),
      defaultClientScopes: formValue.defaultClientScopes.split(';').map((scope: string) => scope.trim()),
      optionalClientScopes: formValue.optionalClientScopes.split(';').map((scope: string) => scope.trim()),
      tags: formValue.tags.split(';').map((tag: string) => tag.trim())
    };
    this.organisationservice.createApplication(clientConfig, this.userForm.value.realm ).subscribe(
      response => {
        this.success=true;
        this.error=false;
        this.message = "Application created";
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
