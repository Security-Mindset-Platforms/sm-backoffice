import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakOperationService } from './keycloak.service';

@Component({
  selector: 'app-logout',
  template: '<p>Logging out...</p>', // Optionally add a template or redirect logic
})
export class LogoutComponent implements OnInit {
  constructor(
    private keycloakService: KeycloakOperationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.keycloakService.logout().then(() => {
     // this.router.navigate(['']); // Redirect to login or any other route
    }).catch(err => {
      console.error('Logout failed', err);
      // Handle logout failure if needed
      this.router.navigate(['']);
    });
  }
}
