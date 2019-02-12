import { Observable } from 'rxjs';
import { LoginCredentials } from 'app/modules/auth/models';

export abstract class AuthAsyncService {
  abstract login(loginCreds: LoginCredentials): Observable<string>;
}
