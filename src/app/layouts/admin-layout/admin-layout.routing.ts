import { Routes } from '@angular/router';

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
import { VerEstacaoComponent } from '../../ver-estacao/ver-estacao.component';
import { VerLinhaComponent } from '../../ver-linha/ver-linha.component';
import { VerComposicaoComponent } from '../../ver-composicao/ver-composicao.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',            component: DashboardComponent },
    { path: 'user-profile',         component: UserProfileComponent },
    { path: 'table-list',           component: TableListComponent },
    { path: 'typography',           component: TypographyComponent },
    { path: 'icons',                component: IconsComponent },
    { path: 'maps',                 component: MapsComponent },
    { path: 'notifications',        component: NotificationsComponent },
    { path: 'upgrade',              component: UpgradeComponent },
    { path: 'modais',               component: ModaisComponent },
    { path: 'estacoes',             component: EstacoesComponent },
    { path: 'estacoes/ver/:id',     component: VerEstacaoComponent },
    { path: 'linhas/ver/:id',       component: VerLinhaComponent },
    { path: 'composicoes/ver/:id',  component: VerComposicaoComponent },
    { path: 'linhas',               component: LinhasComponent },
    { path: 'composicoes',          component: ComposicoesComponent },
    { path: '',                     redirectTo: 'modais', pathMatch: 'full' },
];
