import { Component } from '@angular/core';
import { SharedModule } from '../../../components/shared/shared.module';

@Component({
  selector: 'app-colors',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent {

}
