import { Component } from '@angular/core';
import { SharedModule } from '../../../components/shared/shared.module';

@Component({
  selector: 'app-grids',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.scss']
})
export class GridsComponent {

}
