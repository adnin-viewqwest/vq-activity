import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  imports: [CommonModule, TranslateModule, 
            Ng2GoogleChartsModule, AboutRoutingModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
