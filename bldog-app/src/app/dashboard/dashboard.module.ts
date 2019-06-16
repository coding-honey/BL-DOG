import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { TagInputModule } from 'ngx-chips';
import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        FormsModule,
        MdModule,
        MaterialModule,
        ReactiveFormsModule,
        TagInputModule,
        NouisliderModule
    ],
    declarations: [DashboardComponent]
})

export class DashboardModule {}
