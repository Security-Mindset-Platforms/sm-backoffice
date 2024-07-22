import { Component } from '@angular/core';
import { SharedModule } from '../../../components/shared/shared.module';

@Component({
  selector: 'app-flex',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent {

}
