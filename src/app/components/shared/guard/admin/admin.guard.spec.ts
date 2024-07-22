import { TestBed } from '@angular/core/testing';
import { AdminGuard } from './admin.guard';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service2';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { ToastrModule, ToastrService } from 'ngx-toastr';
describe('AdminGuard', () => {
  let guard: AdminGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        AuthService,
        JwtHelperService,
        ToastrService,
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }
      ],
      imports: [
        ToastrModule.forRoot({
          timeOut: 15000, // 15 seconds
          closeButton: true,
          progressBar: true,
        }),
      ],
    });
    guard = TestBed.inject(AdminGuard);
  });
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
