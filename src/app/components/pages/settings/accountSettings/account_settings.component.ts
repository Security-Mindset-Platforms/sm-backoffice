import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { UserProfil } from '../../../modeles/busines.model';
import { BusinessService } from '../../../services/business.service';
import { ToastrService } from 'ngx-toastr';
import { AuthInfo, AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-account_settings',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './account_settings.component.html',
  styleUrl: './account_settings.component.scss'
})
export class AccountSettingsComponent implements OnInit, OnDestroy {
  userProfile?: UserProfil = new UserProfil() ;
  authInfo: AuthInfo | undefined;
  private subscription: Subscription = new Subscription();
  selectedLanguage = ['Français'];
  Languages = [
    { id: 1, name: 'Anglais' },
    { id: 2, name: 'Arabe' },
    { id: 3, name: 'Français' },
  ];
  userForm: FormGroup;
  constructor( private authService: AuthService,   private toastr: ToastrService , public businessService: BusinessService, private fb: FormBuilder,) {
    this.createForm();
  }
  async ngOnInit() {
    this.retrieveData();
    this.authInfo = await this.authService.getAuthInfo();
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      lastName: ['' , [Validators.required]]
    });
  }
  toggleDisabled() {
    const Language: any = this.Languages[1];
    Language.disabled = !Language.disabled;
  }
  selectedTags=['select'];
tags=[
  {id:1,name:'Plain'},
  {id:2,name:'Relaxed'},
  {id:3,name:'Washed'},
  {id:4,name:'Solid'},

]
url2 = '';
onSelectFile2(event: any) {
  if (event.target && event.target.files && event.target.files[0]) {
    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data URL

    reader.onload = (event: any) => {
      // called once readAsDataURL is completed
      this.url2 = event.target.result;
    };
  }
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

onSubmit() {
  if (this.userForm.valid) {
  var user= this.userForm.value;
    this.businessService.editUserProfil(this.authInfo?.userId, user, this.authInfo?.realm).subscribe(
      response => {
        this.toastr.success('Informations edited!', 'Succès'); 
      },
      error => {
        this.toastr.warning('Error.', 'Avertissement'); 
      }
    );
  } else {
    console.log('Formulaire invalide');
  }
}

}
