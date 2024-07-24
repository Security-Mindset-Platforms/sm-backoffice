import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import {  ToastrService } from 'ngx-toastr';
import { OrganizationService } from '../../../services/organization.service';
@Component({
  selector: 'app-organization-create',
  standalone: true,
  imports: [SharedModule, CommonModule, NgSelectModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class OrganizationCreateComponent implements OnInit, OnDestroy {
  realms: any[]=[];
  message: string;
  success=false;
  error = false;
  userID= environment.userID;
  private subscription: Subscription = new Subscription();
  userForm: FormGroup;
  constructor(    private toastr: ToastrService , public organisationservice: OrganizationService, private fb: FormBuilder,) {
    this.createForm();
  }
  ngOnInit() {
    this.retrieveDomainData();
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      realm: ['' , [Validators.required]]
    });
  }
retrieveDomainData(){
  const sub = this.organisationservice.domainList().subscribe(
    response => {
      this.realms = response;
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

}
