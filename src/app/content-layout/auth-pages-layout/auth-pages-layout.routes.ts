import { Routes } from '@angular/router';

/**
 * components
 */
import { AuthPagesLayoutComponent } from './auth-pages-layout.component';

export const AuthPagesLayoutRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '', component: AuthPagesLayoutComponent, children: [
            { 
                path: 'login',
                loadComponent: () => import("@app/modules/system/login/login.component")
                .then(c => c.LoginComponent)
            },
        ]
    }
]