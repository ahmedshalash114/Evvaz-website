import { SchoolService } from './core/services/school.service';
import { SchoolProfileService } from './core/services/school.profile.service';
import { ProfileResolver } from './core/services/profle.resolver';
import { ProfileServiceDashboard } from './core/services/profile.service.dashboard';
import { OfferResolver } from './core/services/offer.resolver.service';
import { CompanyService } from './core/services/company.service';
import { SchoolOrdersHistoryComponent } from './core/modules/dashboards/school-orders-history/school-orders-history.component';
import { SchoolOrdersComponent } from './core/modules/dashboards/school-orders/school-orders.component';
import { SchoolHomeComponent } from './core/modules/dashboards/school-home/school-home.component';
import { OffersComponent } from './core/modules/dashboards/offers/offers.component';
import { OfferEditComponent } from './core/modules/dashboards/offer-edit/offer-edit.component';
import { NewOfferComponent } from './core/modules/dashboards/new-offer/new-offer.component';
import { HomeComponent } from './core/modules/dashboards/home/home.component';
import { HeaderDashboardComponent } from './core/modules/dashboards/header/header.component';
import { FollowersComponent } from './core/modules/dashboards/followers/followers.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/* component */
import { AppComponent } from './app.component';
import { IndexComponent } from './core/modules/index/index.component';
import { LoginComponent } from './core/modules/login/login.component';
import { SignUpComponent } from './core/modules/sign-up/sign-up.component';
import { HeaderComponent } from './core/modules/header/header.component';
import { FooterComponent } from './core/modules/footer/footer.component';
import { HomeHeaderComponent } from './core/modules/home-header/home-header.component';
import { HomePageComponent } from './core/modules/home-page/home-page.component';
import { SignUpService } from './core/services/sign-up.service';
import { OfferPlatformComponent } from './core/modules/home-page/offer-platform/offer-platform.component';

/* services */
import { AuthGuard } from './core/services/auth.gaurd.service';
import { AuthService } from './core/services/auth.service';
import { GetCompaniesService } from './core/services/get-companies/get-companies.service';
import { AuthInterceptor } from './core/services/auth.interceptor.service';
import { UnifyingPlatformComponent } from './core/modules/unifying-platform/unifying-platform.component';
import { CompanyProfileComponent } from './core/modules/company-profile/company-profile.component';
import { ProfileService } from './core/services/profile/profile.service';
import { MyOrdersComponent } from './core/modules/dashboards/my-orders/my-orders.component';
import { ProfileComponent } from './core/modules/dashboards/profile/profile.component';
import { SchoolFollowersComponent } from './core/modules/dashboards/school-followers/school-followers.component';
import { SchoolHeaderComponent } from './core/modules/dashboards/school-header/school-header.component';
import { SchoolProfileComponent } from './core/modules/dashboards/school-profile/school-profile.component';
import { SchoolSidebarComponent } from './core/modules/dashboards/school-sidebar/school-sidebar.component';
import { SidebarComponent } from './core/modules/dashboards/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { OfferDetailsComponent } from './core/modules/offer-details/offer-details.component';
import { FollowHighlightDirective } from './core/modules/follow-highlight.directive';
import { UIService } from './core/services/ui.service';
import { NewTenderComponent } from './core/modules/dashboards/new-tender/new-tender.component';
import {AmazingTimePickerModule} from "amazing-time-picker";
import { MyTendersComponent } from './core/modules/dashboards/my-tenders/my-tenders.component';
import { ViewTenderComponent } from './core/modules/dashboards/view-tender/view-tender.component';
import { CollectiveTenderComponent } from './core/modules/dashboards/collective-tender/collective-tender.component';
import { PurchasePlatformComponent } from './core/modules/purchase-platform/purchase-platform.component';
import { AdminSidebarComponent } from './core/modules/dashboards/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './core/modules/dashboards/admin-header/admin-header.component';
import { AdminHomeComponent } from './core/modules/dashboards/admin-home/admin-home.component';
import { AdminNewTenderComponent } from './core/modules/dashboards/admin-new-tender/admin-new-tender.component';
import { AdminMyTendersComponent } from './core/modules/dashboards/admin-my-tenders/admin-my-tenders.component';
import { AdminOrdersComponent } from './core/modules/dashboards/admin-orders/admin-orders.component';
import { AdminRequestsComponent } from './core/modules/dashboards/admin-requests/admin-requests.component';
import { AdminHistoryComponent } from './core/modules/dashboards/admin-history/admin-history.component' ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    HomeHeaderComponent,
    HomePageComponent,
    OfferPlatformComponent,
    UnifyingPlatformComponent,
    CompanyProfileComponent,
    FollowersComponent,
    HeaderDashboardComponent,
    HomeComponent,
    MyOrdersComponent,
    NewOfferComponent,
    OfferEditComponent,
    OffersComponent,
    ProfileComponent,
    SchoolFollowersComponent,
    SchoolHeaderComponent,
    SchoolHomeComponent,
    SchoolOrdersComponent,
    SchoolOrdersHistoryComponent,
    SchoolProfileComponent,
    SchoolSidebarComponent,
    SidebarComponent,
    OfferDetailsComponent,
    FollowHighlightDirective,
    NewTenderComponent,
    MyTendersComponent,
    ViewTenderComponent,
    CollectiveTenderComponent,
    PurchasePlatformComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminNewTenderComponent,
    AdminMyTendersComponent,
    AdminOrdersComponent,
    AdminRequestsComponent,
    AdminHistoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    AmazingTimePickerModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    SignUpService,
    GetCompaniesService,
    ProfileService,
    CompanyService,
    OfferResolver,
    ProfileServiceDashboard,
    ProfileResolver,
    SchoolProfileService,
    UIService,
    SchoolService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }