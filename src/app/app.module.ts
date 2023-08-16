import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DateFormatPipe } from './date-format.pipe';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    DateFormatPipe,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
