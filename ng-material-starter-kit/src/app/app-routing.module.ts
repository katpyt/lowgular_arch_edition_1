import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserComponent } from './components/user-form/user.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryComponent } from './components/category/category.component';
import { CryptoComponent } from './components/crypto/crypto.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { CategoryHorizontalCheckboxListComponent } from './components/category-horizontal-checkbox-list/category-horizontal-checkbox-list.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CatFactComponent } from './components/cat-fact/cat-fact.component';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { UserComponentModule } from './components/user-form/user.component-module';
import { RegisterUserServiceModule } from './services/register-user.service-module';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { CategoryComponentModule } from './components/category/category.component-module';
import { CryptoComponentModule } from './components/crypto/crypto.component-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';
import { CategoryHorizontalCheckboxListComponentModule } from './components/category-horizontal-checkbox-list/category-horizontal-checkbox-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CategoryMenuComponentModule } from './components/category-menu/category-menu.component-module';
import { ProductTableComponentModule } from './components/product-table/product-table.component-module';
import { CatFactComponentModule } from './components/cat-fact/cat-fact.component-module';
import { CatFactServiceModule } from './services/cat-fact.service-module';
import {AgeComponent} from "./components/age/age.component";
import {AgeComponentModule} from "./components/age/age.component-module";
import {AgePredictionServiceModule} from "./services/age-prediction.service-module";
import {ProductDetailsComponentModule} from "./components/product-details/product-details.component-module";
import {CartComponent} from "./components/cart-details/cart.component";
import {CartServiceModule} from "./services/cart.service-module";
import {CartComponentModule} from "./components/cart-details/cart.component-module";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserDetailsComponentModule} from "./components/user-details/user-details.component-module";
import {BreedsListComponent} from "./components/breeds-list/breeds-list.component";
import {BreedsListComponentModule} from "./components/breeds-list/breeds-list.component-module";
import {DogBreedsServiceModule} from "./services/dog-breeds.service-module";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'create-product', component: ProductFormComponent },
    { path: 'create-employee', component: EmployeeFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: UserComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoryComponent },
    { path: 'crypto', component: CryptoComponent },
    { path: 'public-holidays', component: HolidaysComponent },
    { path: 'checkbox-categories', component: CategoryHorizontalCheckboxListComponent },
    { path: 'categories-menu', component: CategoryMenuComponent },
    { path: 'product-search', component: ProductTableComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    { path: 'cat-fact', component: CatFactComponent },
    { path: 'age/:name', component: AgeComponent },
    { path: 'carts/:id', component: CartComponent },
    { path: 'user/:id', component: UserDetailsComponent },
    { path: 'breeds-list', component: BreedsListComponent },
  ]),
    BreedsListComponentModule,
    DogBreedsServiceModule,
    ProductFormComponentModule,
    ProductServiceModule,
    EmployeeFormComponentModule,
    EmployeeServiceModule,
    LoginFormComponentModule,
    LoginServiceModule,
    UserComponentModule,
    RegisterUserServiceModule,
    ProductListComponentModule,
    CategoryComponentModule,
    CryptoComponentModule,
    HolidaysComponentModule,
    HolidaysServiceModule,
    CategoryHorizontalCheckboxListComponentModule,
    CategoryServiceModule,
    CategoryMenuComponentModule,
    ProductTableComponentModule,
    CatFactComponentModule,
    CatFactServiceModule,
    AgeComponentModule,
    AgePredictionServiceModule,
    ProductDetailsComponentModule,
    CartServiceModule,
    CartComponentModule,
    UserDetailsComponentModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
