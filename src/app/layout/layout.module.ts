import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CopyRightComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutModule {}
