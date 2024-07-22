import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../components/shared/shared.module';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './icons.component.html',
  styleUrl: './icons.component.scss'
})
export class IconsComponent {

}
