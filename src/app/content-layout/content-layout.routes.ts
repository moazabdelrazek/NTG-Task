import { Routes } from '@angular/router';

export const ContentLayoutRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { 
        path: 'auth',
        loadChildren: () => import('./auth-pages-layout/auth-pages-layout.routes')
        .then(r => r.AuthPagesLayoutRoutes)
    },
    { 
        path: 'dashboard',
        title: "dashboard",
        loadChildren: () => import('./content-pages-layout/content-pages-layout.routes')
        .then(r => r.ContentPagesLayoutRoutes)
    }    
]