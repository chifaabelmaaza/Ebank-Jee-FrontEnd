import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './init/navbar/navbar.component';
import { CustomersComponent } from './Pages/customers/customers.component';
import { AccountsComponent } from './Pages/accounts/accounts.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { NewCustomerComponent } from './Pages/new-customer/new-customer.component';
import { CustomerAccountsComponent } from './Pages/customer-accounts/customer-accounts.component';
import { EditCustomerComponent } from './Pages/edit-customer/edit-customer.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { SideBarComponent } from './init/side-bar/side-bar.component';
import { MainComponent } from './Pages/Dashboard/main/main.component';
import { TopWidgetsComponent } from './Pages/Dashboard/top-widgets/top-widgets.component';
import { OpperationByMonthComponent } from './Pages/Dashboard/opperation-by-month/opperation-by-month.component';
import { OpperationByCustomerComponent } from './Pages/Dashboard/customers-per-city/opperation-by-customer.component';
import { LastFewTransactionsComponent } from './Pages/Dashboard/last-few-transactions/last-few-transactions.component';
import { TopThreeAccountsComponent } from './Pages/Dashboard/top-three-accounts/top-three-accounts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CustomersComponent,
    AccountsComponent,
    NewCustomerComponent,
    CustomerAccountsComponent,
    EditCustomerComponent,
    SideBarComponent,
    MainComponent,
    TopWidgetsComponent,
    OpperationByMonthComponent,
    OpperationByCustomerComponent,
    LastFewTransactionsComponent,
    TopThreeAccountsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatTooltipModule,
    FontAwesomeModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
