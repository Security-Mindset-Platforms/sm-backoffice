import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { SimplebarAngularModule } from 'simplebar-angular';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { TabToTopComponent } from './components/tab-to-top/tab-to-top.component';
import { HoverEffectSidebarDirective } from './directives/hover-effect-sidebar.directive';
import { FullscreenDirective } from './directives/fullscreen.directive';
import { LandingSwitcherComponent } from './components/landing-switcher/landing-switcher.component';
import { LandingLayoutComponent } from './layouts/landing-layout/landing-layout.component';

@NgModule({

  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ColorPickerModule,
    PageHeaderComponent,
    // NgxColorsModule
    HeaderComponent,
    SidebarComponent,
    TabToTopComponent,
    FooterComponent,
    FullscreenDirective,
    HoverEffectSidebarDirective,
    LandingSwitcherComponent,
    LandingLayoutComponent,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    PageHeaderComponent,
    TabToTopComponent,
    FooterComponent,
    FullscreenDirective,
    HoverEffectSidebarDirective,
    LandingSwitcherComponent,
    LandingLayoutComponent,
    ColorPickerModule,
  ],
  providers: [ColorPickerService],
})
export class SharedModule {}
