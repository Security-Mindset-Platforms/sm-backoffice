import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { UserProfil } from '../../../modeles/busines.model';
import { BusinessService } from '../../../services/business.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-account_settings',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './account_settings.component.html',
  styleUrl: './account_settings.component.scss'
})
export class AccountSettingsComponent implements OnInit, OnDestroy {
  userProfile?: UserProfil = new UserProfil() ;
  userID= environment.userID;
  private subscription: Subscription = new Subscription();
  selectedLanguage = ['Français'];
  Languages = [
    { id: 1, name: 'Anglais' },
    { id: 2, name: 'Arabe' },
    { id: 3, name: 'Français' },
  ];
  userForm: FormGroup;
  constructor(    private toastr: ToastrService , public businessService: BusinessService, private fb: FormBuilder,) {
    this.createForm();
  }
  ngOnInit() {
    this.retrieveData();
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

onSubmit() {
  if (this.userForm.valid) {
  var user= this.userForm.value;
    this.businessService.editUserProfil(environment.userID, user).subscribe(
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
