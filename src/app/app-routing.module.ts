import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlueComponent } from './blue.component';
import { GreenComponent } from './green.component';
import { RedComponent } from './red.component';
import { DemoResolver } from './demo.resolver';

const routes = [
  {
    path: '',
    children: [
      {
        path: 'blue',
        component: BlueComponent,
        resolve: {
          demo: DemoResolver
        }
      },
      {
        path: 'green',
        component: GreenComponent,
        resolve: {
          demo: DemoResolver
        }
      },
      {
        path: 'red',
        component: RedComponent,
        resolve: {
          demo: DemoResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }