import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ModaisComponent } from '../../modais/modais.component';
import { EstacoesComponent } from '../../estacoes/estacoes.component';
import { LinhasComponent } from '../../linhas/linhas.component';
import { ComposicoesComponent } from '../../composicoes/composicoes.component';
import { EditarModalComponent } from 'app/editar-modal/editar-modal.component';
import { CriarModalComponent } from 'app/criar-modal/criar-modal.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatDialogModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ModaisComponent,
    EstacoesComponent,
    LinhasComponent,
    ComposicoesComponent,
    EditarModalComponent,
    CriarModalComponent
  ],
  entryComponents: [
    EditarModalComponent,
    CriarModalComponent
  ]
})

export class AdminLayoutModule {}
