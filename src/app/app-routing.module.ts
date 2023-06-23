import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './Pages/accounts/accounts.component';
import { CustomerAccountsComponent } from './Pages/customer-accounts/customer-accounts.component';
import { CustomersComponent } from './Pages/customers/customers.component';
import { EditCustomerComponent } from './Pages/edit-customer/edit-customer.component';
import { NewCustomerComponent } from './Pages/new-customer/new-customer.component';
import { MainComponent } from './Pages/Dashboard/main/main.component';

const routes: Routes = [
  { path: "dashboard", component: MainComponent },
  { path: "customers", component: CustomersComponent },
  { path: "accounts", component: AccountsComponent },
  { path: "new-customer", component: NewCustomerComponent },
  { path: "edit-customer/:id", component: EditCustomerComponent },
  { path: "customer-accounts/:id", component: CustomerAccountsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
