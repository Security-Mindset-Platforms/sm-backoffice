import { Component, OnDestroy, OnInit } from '@angular/core';
import {  GalleryItem } from 'ng-gallery';
import { SharedModule } from '../../shared/shared.module';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { BusinessService } from '../../services/business.service';
import { Subscription } from 'rxjs';
import { UserProfil } from '../../modeles/busines.model';
import { environment } from '../../../../environments/environment';
import { AuthInfo, AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SharedModule, PageHeaderComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy{

  constructor(private authService: AuthService, public businessService: BusinessService) {}
  userProfile?: UserProfil = new UserProfil() ;
  authInfo: AuthInfo | undefined;
  private subscription: Subscription = new Subscription();
  async ngOnInit() {
 
    this.authInfo = await this.authService.getAuthInfo();
    this.retrieveData();
  }

  retrieveData(){
    const sub = this.businessService.userProfile(this.authInfo?.userId,  this.authInfo?.realm).subscribe(
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



