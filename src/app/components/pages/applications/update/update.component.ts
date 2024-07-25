import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { OrganizationService } from '../../../services/organization.service';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';
import { ClientConfig } from '../client-config.model';
@Component({
  selector: 'app-application-update',
  standalone: true,
  imports: [SharedModule,RouterModule, CommonModule, NgSelectModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class ApplicationUpdateComponent implements OnInit, OnDestroy {
  application: any = {
  };
  types: any[]=["Enterprise", "Internal", "Public"];
  realms: any[]=[''];
  message: string;
  success=false;
  organizations: any[]=[];
  error = false;
  private subscription: Subscription = new Subscription();
  userForm: FormGroup;
  appId: any;
  realm = "master"
  constructor( private router: Router,   private route: ActivatedRoute, public organisationservice: OrganizationService, private fb: FormBuilder,) {
    this.createForm();
  }
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.appId = params.get('id');
      this.retrieveData();
    });
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

  createFormWithData(data: any) {
    this.userForm.patchValue({
      clientId: data.clientId || '',
      clientSecret: data.clientSecret || '',
      rootUrl: data.rootUrl || '',
      homeUrl: data.homeUrl || '',
      validRedirectUris: (data.validRedirectUris || []).join(';'),
      validPostLogoutUris: (data.validPostLogoutUris || []).join(';'),
      webOrigins: (data.webOrigins || []).join(';'),
      defaultClientScopes: (data.defaultClientScopes || []).join(';'),
      optionalClientScopes: (data.optionalClientScopes || []).join(';'),
      name: data.name || '',
      description: data.description || '',
      photos: data.photos || '',
      tags: (data.tags || []).join(';'),
      phone: data.phone || '',
      username: data.username || '',
      realm: data.realm || '',
      type: data.type || ''
    });
  }

retrieveData(){
  const sub = this.organisationservice.applicationDetail(this.appId).subscribe(
    response => {
      this.application = response.data;
      console.log(this.application)
      this.createFormWithData(this.application);
      if(response.data === null){
        this.router.navigate(['/not-found']); 
      }
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
    this.organisationservice.updateApplication(clientConfig, this.userForm.value.realm ).subscribe(
      response => {
        this.success=true;
        this.error=false;
        this.message = "Application updated";

      },
      error => {
        this.error=true;
        this.success=false;
        this.message = "Internal error";
      }
    );
}


}
