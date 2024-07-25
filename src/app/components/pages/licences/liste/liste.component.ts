import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { OrganizationService } from '../../../services/organization.service';
import {  RouterModule } from '@angular/router';
@Component({
  selector: 'app-licence-liste',
  standalone: true,
  imports: [SharedModule,RouterModule, CommonModule, NgSelectModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class LicenceListComponent implements OnInit, OnDestroy {

  validLicences: any[]=[];
  nonValidLicences: any[]=[''];
  message: string;
  success=false;
  error = false;
  private subscription: Subscription = new Subscription();
  constructor(  public organisationservice: OrganizationService) {
  }
  ngOnInit() {
    this.retrieveValidLicences();
    this.retrieveNonValidLicences();
  }
retrieveValidLicences(){
  const sub = this.organisationservice.retrieveValidLicence().subscribe(
    response => {
      this.validLicences = response.data;
    },
    error => {
    }
  );
  this.subscription.add(sub);
}
retrieveNonValidLicences(){
  const sub = this.organisationservice.retrieveNonValidLicence().subscribe(
    response => {
      this.nonValidLicences = response.data;
    },
    error => {
    }
  );
  this.subscription.add(sub);
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

}
