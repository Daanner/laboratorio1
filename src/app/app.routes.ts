import { Routes } from '@angular/router';
import { Layouts } from './layouts/layouts';
export const routes: Routes = [
    {
        path:'',
        component:Layouts,
        children:[
            {
                path:'',
                loadComponent:()=>
                    import('./home/home').then(m=>m.Home)
            },
            {
                path:'about',
                loadComponent:()=>
                    import('./about/about').then(m=>m.About)
            },

        ]
    }
];