import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { AlertSuccessComponent } from './alert/alert-success/alert-success.component';
import { AlertErrorComponent } from './alert/alert-error/alert-error.component';
import { AlertWarningComponent } from './alert/alert-warning/alert-warning.component';
import { AppButtonsComponent } from './app-buttons/app-buttons.component';
import { IconsButtonsComponent } from './icons-buttons/icons-buttons.component';
import { InputsComponent } from './inputs/inputs.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { RadiobuttonsComponent } from './radiobuttons/radiobuttons.component';
import { ToggleButtonsComponent } from './toggle-buttons/toggle-buttons.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ProgressComponent } from './progress/progress.component';
import { SlidersComponent } from './sliders/sliders.component';
import { LabelsComponent } from './labels/labels.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TagsComponent } from './tags/tags.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TypografyComponent } from './typografy/typografy.component';
import { TablesComponent } from './tables/tables.component';
import { CollapseComponent } from './collapse/collapse.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { TabNavComponent } from './tab-nav/tab-nav.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ModalComponent } from './modal/modal.component';
import { PopoversComponent } from './popovers/popovers.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { NotifyComponent } from './notify/notify.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatepickerComponent,
    AlertSuccessComponent,
    AlertErrorComponent,
    AlertWarningComponent,
    AppButtonsComponent,
    IconsButtonsComponent,
    InputsComponent,
    CheckboxesComponent,
    RadiobuttonsComponent,
    ToggleButtonsComponent,
    DropdownComponent,
    ProgressComponent,
    SlidersComponent,
    LabelsComponent,
    PaginationComponent,
    TagsComponent,
    TextareaComponent,
    TypografyComponent,
    TablesComponent,
    CollapseComponent,
    FooterComponent,
    NavComponent,
    MenuComponent,
    TabNavComponent,
    AlertsComponent,
    ModalComponent,
    PopoversComponent,
    TooltipsComponent,
    NotifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
