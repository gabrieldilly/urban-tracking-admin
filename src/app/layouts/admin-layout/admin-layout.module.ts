import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { ModaisService } from '../../services/modais.service';
import { EstacoesService } from '../../services/estacoes.service';
import { CriarModalComponent } from '../../criar-modal/criar-modal.component';
import { EditarModalComponent } from '../../editar-modal/editar-modal.component';
import { CriarEstacaoComponent } from 'app/criar-estacao/criar-estacao.component';
import { EditarEstacaoComponent } from 'app/editar-estacao/editar-estacao.component';
import { VerEstacaoComponent } from '../../ver-estacao/ver-estacao.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
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
    MatDialogModule, 
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule
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
    CriarModalComponent,
    EditarModalComponent,
    CriarEstacaoComponent,
    EditarEstacaoComponent,
    VerEstacaoComponent
  ],
  providers: [
    ModaisService,
    EstacoesService
  ],
  entryComponents: [
    CriarModalComponent,
    EditarModalComponent,
    CriarEstacaoComponent,
    EditarEstacaoComponent
  ]
})

export class AdminLayoutModule {}
