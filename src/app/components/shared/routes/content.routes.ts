import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { advanceduiRoutingModule } from '../../../ui_kits/advancedui/advancedui.routes';
import { pagesRoutingModule } from '../../pages/pages.routes';
import { mapsRoutingModule } from '../../../ui_kits/maps/maps.routes';
import { widgetsRoutingModule } from '../../../ui_kits/widgets/widgets.routes';
import { tablesRoutingModule } from '../../../ui_kits/tables/tables.routes';
import { utilitiesRoutingModule } from '../../../ui_kits/utilities/utilities.routes';
import { uielementsRoutingModule } from '../../../ui_kits/uielements/uielements.routes';
import { FormEditorsRoutingModule } from '../../../ui_kits/forms/form-editors/form-editors.routes';
import { formelementsRoutingModule } from '../../../ui_kits/forms/form-elements/form-elements.routes';
import { formsRoutingModule } from '../../../ui_kits/forms/forms.routes';
import { iconsRoutingModule } from '../../../ui_kits/icons/icons.routes';
import { OrganizationsRoutingModule } from '../../pages/organizations/organizations.routes';
import { LicencesRoutingModule } from '../../pages/licences/licences.routes';
import { DashboardRoutingModule } from '../../pages/dashboard/dashboard.routes';
import { UsersRoutingModule } from '../../pages/users/users.routes';
import { ApplicationsRoutingModule } from '../../pages/applications/application.routes';

export const content: Routes = [

  { path: '', children: [
   ...advanceduiRoutingModule.routes,
   ...pagesRoutingModule.routes,  
   ...uielementsRoutingModule.routes,
   ...utilitiesRoutingModule.routes,
   ...FormEditorsRoutingModule.routes,
   ...formelementsRoutingModule.routes,
   ...formsRoutingModule.routes,
   ...mapsRoutingModule.routes,
   ...iconsRoutingModule.routes,
   ...widgetsRoutingModule.routes,
   ...tablesRoutingModule.routes,
   ...OrganizationsRoutingModule.routes,
   ...LicencesRoutingModule.routes,
   ...DashboardRoutingModule.routes,
   ...UsersRoutingModule.routes,
   ...ApplicationsRoutingModule.routes
  ]}

  
];
@NgModule({
    imports: [],
    exports: [RouterModule]
})
export class SaredRoutingModule { }
