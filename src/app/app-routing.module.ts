import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { AuthGuardService } from './core-module/services';
import { LoginUserResolve } from './core-module/services/LoginUserResolve.service';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    resolve: {
      loginUser: LoginUserResolve
    },
    data: {
      title: 'mycode'
    },
    children: [
      {
        path: 'home',
        loadChildren: "./home/home.module#HomeModule"
      },
      {
        path: 'faq',
        loadChildren: "./faq/faq.module#FaqModule"
      },
      {
        path: 'info',
        loadChildren: "./info/info.module#InfoModule"
      },
      {
        path: 'about',
        loadChildren: "./about/about.module#AboutModule"
      },
      {
        path: 'dashboard',
        loadChildren: "./dash-board/dash-board.module#DashBoardModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
