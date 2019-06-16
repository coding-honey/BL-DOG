import { Routes, RouterModule , RouteConfigLoadEnd } from '@angular/router';
import { NgModule } from '@angular/core';


import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },{
                path: 'shelter',
                loadChildren: './shelter/shelter.module#ShelterModule'
            },  {
                path: 'animal-managements',
                loadChildren: './animal-managements/animal-managements.module#AnimalManagementsModule'

            }, {
                path: 'donation-management',
                loadChildren: './donation-management/donation-management.module#DonationManagementModule'

            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            },{
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }
        ]
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [{
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        }]
    }
    
    // ,{
    //     path: 'login',
    //     component: LoginComponent
    // }
   

];


