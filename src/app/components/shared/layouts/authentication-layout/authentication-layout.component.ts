import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwitcherComponent } from '../../components/switcher/switcher.component';

@Component({
  selector: 'app-authentication-layout',
  templateUrl: './authentication-layout.component.html',
  styleUrl: './authentication-layout.component.scss',
  standalone: true,
  imports: [RouterModule, SwitcherComponent]
})
export class AuthenticationLayoutComponent {

}
