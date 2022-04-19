import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedUpdateComponent } from './feed-update/feed-update.component';
import { TimeagoComponent } from './timeago/timeago.component';
import { ExpandableComponent } from './expandable/expandable.component';
import { ProfileComponent } from './profile/profile.component';
import { MemberInfoComponent } from './member-info/member-info.component';
import { ClientinfoComponent } from './clientinfo/clientinfo.component';
import { WorkreportDetailInfoComponent } from './workreport-detail-info/workreport-detail-info.component';
import { CustomerWorkreportInfoComponent } from './customer-workreport-info/customer-workreport-info.component';
import { TransportationExpenseComponent } from './transportation-expense/transportation-expense.component';
import { WorkreportSearchComponent } from './workreport-search/workreport-search.component';
import { LogoLargeComponent } from './logo-large/logo-large.component';
import { FaqComponent } from './faq/faq.component';
import { UserGuideComponent } from './user-guide/user-guide.component';

@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, LogoLargeComponent, FeedCardComponent, FeedUpdateComponent, TimeagoComponent, ExpandableComponent, ProfileComponent, MemberInfoComponent, ClientinfoComponent, WorkreportDetailInfoComponent, CustomerWorkreportInfoComponent,
    TransportationExpenseComponent, WorkreportSearchComponent, FaqComponent, UserGuideComponent ],
  exports: [SlidesComponent, StartComponent, LogoComponent, LogoLargeComponent, FeedCardComponent, FeedUpdateComponent, TimeagoComponent, ExpandableComponent, ProfileComponent, MemberInfoComponent, ClientinfoComponent, WorkreportDetailInfoComponent, CustomerWorkreportInfoComponent,
    TransportationExpenseComponent, WorkreportSearchComponent, FaqComponent, UserGuideComponent],
  imports: [
    CommonModule,
    IonicModule, // <- do not forget to add this import
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
