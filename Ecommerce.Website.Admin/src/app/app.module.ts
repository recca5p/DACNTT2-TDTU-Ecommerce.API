import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ProductComponent } from './pages/dashboard/productmanagement/product/product.component';
import { BrandComponent } from './pages/dashboard/productmanagement/brand/brand.component';
import { CategoryComponent } from './pages/dashboard/productmanagement/category/category.component';
import { OrderComponent } from './pages/dashboard/order-manament/order/order.component';
import { UserComponent } from './pages/dashboard/user-manament/user/user.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailComponent } from './pages/dashboard/productmanagement/product/product-detail/product-detail.component';
import { AuthorizeComponent } from './pages/authorize/authorize.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    BrandComponent,
    CategoryComponent,
    OrderComponent,
    UserComponent,
    NotFoundComponent,
    ProductDetailComponent,
    AuthorizeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
