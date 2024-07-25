import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgChartsModule } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { OrganizationService } from '../../services/organization.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    NgApexchartsModule,
    NgChartsModule,
    TranslateModule,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  users: any[]= [];
  realm ="master";
  stats: any = {
    invalidLicenses: 0,
    numberOfDomains: 0,
    totalLicenses: 0,
    totalOrganizations: 0,
    validLicenses: 0, 
    activeAccount: 0,
    nonActiveAccount: 0
  }
  private subscription: Subscription = new Subscription();
  constructor(public organizationService: OrganizationService) {
  }
  ngOnInit(): void {
    this.retrieveData();
    this.retrieveStatsData();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  retrieveData(){
    const sub = this.organizationService.allUserList().subscribe(
      response => {
        this.users = response.data;
      },
      error => {
      }
    );
    this.subscription.add(sub);
  }
  retrieveStatsData(){
    const sub = this.organizationService.globalStats().subscribe(
      response => {
        this.stats = response.data;
      },
      error => {
      }
    );
    this.subscription.add(sub);
  }

  enableOrDisableAccount(id,action){
    const sub = this.organizationService.enableDisableUser(this.realm, id, action).subscribe(
      response => {
        this.retrieveData();
        this.retrieveStatsData();
        alert("Action performed")
      },
      error => {
      }
    );
    this.subscription.add(sub);
  }
  deleteAccount(id) {
    const sub = this.organizationService.deleteAccount(this.realm, id).subscribe(
      response => {
        this.retrieveData();
        this.retrieveStatsData();
        alert("Account deleted")
      },
      error => {
      }
    );
    this.subscription.add(sub);
  }
}
