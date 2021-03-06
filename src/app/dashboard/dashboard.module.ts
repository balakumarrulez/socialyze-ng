import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {BsDropdownModule} from 'ng2-bootstrap/dropdown';

import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {LaddaModule} from "angular2-ladda";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";
import {ViewTweetsComponent} from "../view-tweets/view-tweets.component";
import {TweetRetweetChartComponent} from './tweet-retweet-chart/tweet-retweet-chart.component';
import {ModalModule} from "ng2-bootstrap";
import {ViewDashTweetsComponent} from './view-dash-tweets/view-dash-tweets.component';
import {ChartsComponent} from './charts/charts.component';
import {HandlesComponent} from './handles/handles.component';
import {AgmCoreModule} from "@agm/core";
import {AgmJsMarkerClustererModule} from "@agm/js-marker-clusterer";
@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    HttpModule,
    LaddaModule,
    FormsModule,
    ModalModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDiVR_CuIU1JfJPJPZPQaYuFuR4Q4EModg'
    }),
    AgmJsMarkerClustererModule
  ],
  declarations: [DashboardComponent, LoadingSpinnerComponent, ViewTweetsComponent, TweetRetweetChartComponent, ViewDashTweetsComponent, ChartsComponent, HandlesComponent]
})
export class DashboardModule {
}
