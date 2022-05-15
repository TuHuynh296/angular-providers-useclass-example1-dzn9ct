import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductService } from './product.service';
import { FakeProductService } from './fake-product.service';
import { LoggerService } from './logger.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [
    // { provide: ProductService, useClass: ProductService },
    { provide: ProductService, useClass: FakeProductService },
    { provide: LoggerService, useClass: LoggerService }
  ]
})
export class AppModule {}
