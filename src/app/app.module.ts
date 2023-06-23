import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './Pages/Dashboard/main/main.component';
import { CustomersByCityComponent } from './Pages/Dashboard/customers-by-city/customers-by-city.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TopWidgetComponent } from './Pages/Dashboard/top-widget/top-widget.component';
import { MobileappVsWebsiteComponent } from './Pages/Dashboard/mobileapp-vs-website/mobileapp-vs-website.component';
import { TransactionPerAgeComponent } from './Pages/Dashboard/transaction-per-age/transaction-per-age.component';
import { HeatmapTransactionsComponent } from './Pages/Dashboard/heatmap-transactions/heatmap-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    AccountsComponent,
    NewCustomerComponent,
    CustomerAccountsComponent,
    EditCustomerComponent,
    SideBarComponent,
    MainComponent,
    CustomersByCityComponent,
    TopWidgetComponent,
    MobileappVsWebsiteComponent,
    TransactionPerAgeComponent,
    HeatmapTransactionsComponent,
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
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
