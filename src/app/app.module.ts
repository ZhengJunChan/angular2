import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms'; // 访问模板驱动表单的所有特性，包括ngModel。
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';

@NgModule({
  imports:      [ FormsModule, BrowserModule ],  // 本模块声明的组件模板需要的类所在的其它模块。
  declarations: [ AppComponent, HeroDetailComponent ],   // 声明本模块中拥有的视图类。 Angular 有三种视图类：组件、指令和管道。(注册自己写的组件，全局可用)
  bootstrap:    [ AppComponent ]    // 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。
})
export class AppModule { }
