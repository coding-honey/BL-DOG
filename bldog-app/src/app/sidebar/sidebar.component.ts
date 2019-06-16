import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    // icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link'
        // icontype: 'dashboard'
    },{
        path: '/shelter',
        title: 'Shelter',
        type: 'sub',
        // icontype: 'dashboard',
        collapse: 'shelter',
        children: [
            {path: 'info', title: 'Information', ab:'IF' },
            {path: 'employees', title: 'Employees', ab:'e'}
            
            // ,{path: 'commodity', title: 'Commodity', ab:'c'},
            // {path: 'calendar', title: 'Calendar', ab:'ca'},
            // {path: 'chart', title:'Charts', ab:'ct'}
        ]
    },{
        path: '/animal-managements',
        title: 'Animal managements',
        type: 'sub',
        // icontype: 'content_paste',
        collapse: 'animal-managements',
        children: [
            {path: 'list', title: 'Animal List', ab: 'AL'},
            {path: 'adopted', title: 'Adopted Animal', ab: 'AA'}
            
            // ,{path: 'calendar', title: 'Animal Calendar', ab: 'AC'},
            // {path: 'resttest', title: 'REST TEST', ab: 'RT'}
        ]
    },{
        path: '/donation-management',
        title: 'Transaction Management',
        type: 'sub',
        collapse:'donation-management',
        children:[{
            path: 'donation-ledger', title: 'Transaction List', ab:'DL'
        }]

    },{
        path: '/pages',
        title: 'Pages',
        type: 'sub',
        // icontype: 'image',
        collapse: 'pages',
        children: [
            
            {path: 'login', title: 'Login Page', ab:'LP'},
            {path: 'serviceSelect', title: 'service Select', ab:'SS'},
            {path: 'register', title: 'Register Page', ab:'RP'}
            // ,{path: 'lock', title: 'Lock Screen Page', ab:'LSP'},
            // {path: 'pricing', title: 'Pricing', ab:'P'},
            // {path: 'user', title: 'User Page', ab:'UP'}
        ]
    }



    // ,{
    //     path: '/components',
    //     title: 'Components',
    //     type: 'sub',
    //     // icontype: 'apps',
    //     collapse: 'components',
    //     children: [
    //         {path: 'buttons', title: 'Buttons', ab:'B'},
    //         {path: 'grid', title: 'Grid System', ab:'GS'},
    //         {path: 'panels', title: 'Panels', ab:'P'},
    //         {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
    //         {path: 'notifications', title: 'Notifications', ab:'N'},
    //         {path: 'icons', title: 'Icons', ab:'I'},
    //         {path: 'typography', title: 'Typography', ab:'T'}
    //     ]
    // },{
    //     path: '/forms',
    //     title: 'Forms',
    //     type: 'sub',
    //     // icontype: 'content_paste',
    //     collapse: 'forms',
    //     children: [
    //         {path: 'regular', title: 'Regular Forms', ab:'RF'},
    //         {path: 'extended', title: 'Extended Forms', ab:'EF'},
    //         {path: 'validation', title: 'Validation Forms', ab:'VF'},
    //         {path: 'wizard', title: 'Wizard', ab:'W'}
    //     ]
    // },{
    //     path: '/tables',
    //     title: 'Tables',
    //     type: 'sub',
    //     // icontype: 'grid_on',
    //     collapse: 'tables',
    //     children: [
    //         {path: 'regular', title: 'Regular Tables', ab:'RT'},
    //         {path: 'extended', title: 'Extended Tables', ab:'ET'},
    //         {path: 'datatables.net', title: 'Datatables.net', ab:'DT'}
    //     ]
    // },
    // {
    //     path: '/maps',
    //     title: 'Maps',
    //     type: 'sub',
    //     // icontype: 'place',
    //     collapse: 'maps',
    //     children: [
    //         {path: 'google', title: 'Google Maps', ab:'GM'},
    //         {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
    //         {path: 'vector', title: 'Vector Map', ab:'VM'}
    //     ]
    // },{
    //     path: '/widgets',
    //     title: 'Widgets',
    //     type: 'link'
    //     // icontype: 'widgets'

    // },
    // {
    //     path: '/charts',
    //     title: 'Charts',
    //     type: 'link'
    //     // icontype: 'timeline'

    // },{
    //     path: '/calendar',
    //     title: 'Calendar',
    //     type: 'link'
    //     // icontype: 'date_range'
    // }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
}
