import { Routes } from '@angular/router';

/**
 * components
 */
import { ContentPagesLayoutComponent } from './content-pages-layout.component';

export const ContentPagesLayoutRoutes: Routes = [
    { path: '', redirectTo: 'task-details', pathMatch: 'full' },
    {
        path: '', component: ContentPagesLayoutComponent, children: [
            { 
                path: 'task-details',
                loadComponent: () => import("@app/modules/system/task-details/task-details.component")
                .then(c => c.TaskDetailsComponent)
            },
            { 
                path: 'service-management',
                loadComponent: () => import("@app/modules/system/service-management/service-management.component")
                .then(c => c.ServiceManagementComponent)
            }
        ]
    }
]