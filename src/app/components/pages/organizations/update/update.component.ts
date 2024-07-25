import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { UserProfil } from '../../../modeles/busines.model';
import { OrganizationService } from '../../../services/organization.service';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
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
  userID= environment.userID;
  private subscription: Subscription = new Subscription();
  userForm: FormGroup;
  organizationId: any;

  constructor(   private route: ActivatedRoute, public organisationservice: OrganizationService, private fb: FormBuilder,) {
    this.createForm();
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.organizationId = params.get('id');
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


}
