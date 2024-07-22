import { Component } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-auth_providers',
  standalone: true,
  imports: [SharedModule,NgSelectModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './auth_providers.component.html',
  styleUrl: './auth_providers.component.scss'
})
export class AuthProvidersComponent {
  selectedLanguage = ['Français'];
  Languages = [
    { id: 1, name: 'Anglais' },
    { id: 2, name: 'Arabe' },
    { id: 3, name: 'Français' },
  ];
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

}
