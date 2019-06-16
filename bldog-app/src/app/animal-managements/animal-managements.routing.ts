import { Routes} from '@angular/router';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AdoptedanimalComponent } from './adoptedanimal/adoptedanimal.component';

export const animalManagementRoutes: Routes=[
    {
        path: '',
        children: [ {
            path: 'list',
            component: AnimalListComponent
        }]},
    {
        path: '',
        children: [ {
            path: 'adopted',
            component: AdoptedanimalComponent
        }]}

];