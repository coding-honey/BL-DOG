import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { animalManagementRoutes} from './animal-managements.routing';

import { AnimalListComponent} from './animal-list/animal-list.component';
import { AdoptedanimalComponent } from './adoptedanimal/adoptedanimal.component';
import { HttpModule } from '@angular/http';

// import { ResthomeModule } from '../resthome/resthome.module';
//import { ResthomeModule } from '../resthome/resthome.module';
// import { AnimalCalendarComponent } from './animal-calendar/animal-calendar.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(animalManagementRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule,

    HttpModule,
    SelectModule
    
    // ,ResthomeModule
  ],
  declarations: [
    AnimalListComponent,
    AdoptedanimalComponent




    
  ]
})
export class AnimalManagementsModule { }
