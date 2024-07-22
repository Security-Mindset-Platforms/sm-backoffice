import { Component, OnDestroy, OnInit } from '@angular/core';
import {  GalleryItem } from 'ng-gallery';
import { SharedModule } from '../../shared/shared.module';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { BusinessService } from '../../services/business.service';
import { Subscription } from 'rxjs';
import { UserProfil } from '../../modeles/busines.model';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule, PageHeaderComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy{

  constructor( public businessService: BusinessService) {}
  userProfile?: UserProfil = new UserProfil() ;
  userID= environment.userID;
  private subscription: Subscription = new Subscription();
  ngOnInit() {
    this.retrieveData();
  }

  retrieveData(){
    const sub = this.businessService.userProfile(this.userID).subscribe(
      response => {
        this.userProfile = response;
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
}



