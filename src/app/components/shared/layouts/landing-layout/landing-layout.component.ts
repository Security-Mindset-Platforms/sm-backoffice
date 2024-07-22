import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingSwitcherComponent } from '../../components/landing-switcher/landing-switcher.component';

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrl: './landing-layout.component.scss',
  standalone: true,
  imports: [RouterModule, LandingSwitcherComponent]
})
export class LandingLayoutComponent {


}
