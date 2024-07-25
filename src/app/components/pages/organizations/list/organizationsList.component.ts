import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrganizationService } from '../../../services/organization.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-organization-list',
  standalone: true,
  imports: [SharedModule,CommonModule, NgSelectModule,RouterModule],
  templateUrl: './organizationsList.component.html',
  styleUrls: ['./organizationsList.component.scss']
})
export class OrganizationsListComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  organizations: any[]= [];
constructor(public organizationService: OrganizationService){
}
ngOnInit(): void {
    this.retrieveData();
  }

retrieveData(){
  const sub = this.organizationService.organizationList().subscribe(
    response => {
      this.organizations = response.data;
    },
    error => {
    }
  );
  this.subscription.add(sub);
}
ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
deleteOrganization(id,  index){
  const sub = this.organizationService.deleteOrganization(id).subscribe(
    response => {
      this.organizations.splice(index, 1);
    },
    error => {
    }
  );
  this.subscription.add(sub);
}
}
