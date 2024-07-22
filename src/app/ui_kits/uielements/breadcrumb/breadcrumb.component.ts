import { Component } from '@angular/core';
import { SharedModule } from '../../../components/shared/shared.module';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

}
