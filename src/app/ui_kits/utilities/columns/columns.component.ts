import { Component } from '@angular/core';
import { SharedModule } from '../../../components/shared/shared.module';

@Component({
  selector: 'app-columns',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent {

}
