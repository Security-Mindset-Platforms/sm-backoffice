import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrganizationService } from '../../../services/organization.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [SharedModule,CommonModule, NgSelectModule,RouterModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ApplicationListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  applications: any[]= [];
constructor(public organizationService: OrganizationService){
}
ngOnInit(): void {
    this.retrieveData();
  }

retrieveData(){
  const sub = this.organizationService.applicationsList("master").subscribe(
    response => {
      this.applications = response.data;
    },
    error => {
    }
  );
  this.subscription.add(sub);
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
deleteApplication(id,  index){
  const sub = this.organizationService.deleteApplication(id, "master").subscribe(
    response => {
      this.applications.splice(index, 1);
      this.retrieveData();
    },
    error => {
    }
  );
  this.subscription.add(sub);
}
}
