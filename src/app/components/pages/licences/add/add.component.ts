import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { UserProfil } from '../../../modeles/busines.model';
import { OrganizationService } from '../../../services/organization.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-licence-add',
  standalone: true,
  imports: [SharedModule, CommonModule, NgSelectModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class LicenceAddComponent implements OnInit, OnDestroy {
  realms: any[]=[];
  organization: any = {
    infos: {"name": "", "realm": ""},
    licences: [],
    users: []
  }
  duration: number =1;
  organizationId: any;
  applications: any[]=[];
  message: string;
  success=false;
  error = false;
  userID= environment.userID;
  private subscription: Subscription = new Subscription();
  userForm: FormGroup;
  constructor(   private route: ActivatedRoute, public organisationservice: OrganizationService, private fb: FormBuilder,) {
   // this.createForm();
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.organizationId = params.get('id');
      this.retrieveData();
    });
    this.retrieveApplicationsData();
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      realm: ['' , [Validators.required]]
    });
  }
retrieveApplicationsData(){
  const sub = this.organisationservice.applicationsList("master").subscribe(
    response => {
      this.applications = response.data;
      this.applications = this.applications.map(item => ({ ...item, checked: false }));
    },
    error => {
      // console.error('Error fetching data', error);
    }
  );
  this.subscription.add(sub);

  
}
  createFormWithData(data: any) {
    this.userForm = this.fb.group({
      name: [data.name, [Validators.required, Validators.minLength(3)]],
      realm: [data.realm , [Validators.required]]
    });
  }

retrieveData(){
  const sub = this.organisationservice.getOrganization(this.organizationId).subscribe(
    response => {
      this.organization = response.data;
      // console.log(this.organization)
    },
    error => {
      // console.error('Error fetching data', error);
    }
  );
  this.subscription.add(sub);
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

onSubmit() {

  const checkedItems = this.applications.filter(item => item.checked);
  var data = {
    duration: this.duration,
    authorizedApplicationIds: checkedItems,
    organizationId: this.organizationId
  }
  this.organisationservice.createLicence(data).subscribe(
    response => {
      this.success=true;
      this.error=false;
      this.message = response.message;
      if(response.code == 400){
        this.error=true;
        this.success=false;
      }
     // this.createForm();
    },
    error => {
      this.error=true;
      this.success=false;
      this.message = "Internal error";
    }
  );

}

}
