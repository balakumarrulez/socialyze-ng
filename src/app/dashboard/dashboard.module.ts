import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ng2-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {LaddaModule} from "angular2-ladda";
import {LoadingSpinnerComponent} from "../loading-spinner/loading-spinner.component";
import {ViewTweetsComponent} from "../view-tweets/view-tweets.component";
import { TweetRetweetChartComponent } from './tweet-retweet-chart/tweet-retweet-chart.component';
import { SwitchComponent } from './switch/switch.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    HttpModule,
    LaddaModule,
	FormsModule
  ],
  declarations: [ DashboardComponent, LoadingSpinnerComponent, ViewTweetsComponent, TweetRetweetChartComponent ,SwitchComponent ]
})
export class DashboardModule { }
