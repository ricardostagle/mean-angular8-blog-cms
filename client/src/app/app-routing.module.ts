import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { DetailsComponent } from './details/details.component';
import { CategoryComponent } from './category/category.component';
import { PostComponent } from './post/post.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostAddComponent } from './post/post-add/post-add.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { BycategoryComponent } from './bycategory/bycategory.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';

import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './auth/user/user.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Blog Home' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' }
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: AdminComponent,
    data: { title: 'Blog Admin' }
  },
  {
    path: 'bycategory/:id',
    component: BycategoryComponent,
    data: { title: 'Post by Category' }
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    data: { title: 'Show Post Details' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' }
  },
  {
    path: 'category',
    canActivate: [AuthGuard],
    component: CategoryComponent,
    data: { title: 'Category' }
  },
  {
    path: 'category/details/:id',
    canActivate: [AuthGuard],
    component: CategoryDetailsComponent,
    data: { title: 'Category Details' }
  },
  {
    path: 'category/add',
    canActivate: [AuthGuard],
    component: CategoryAddComponent,
    data: { title: 'Category Add' }
  },
  {
    path: 'category/edit/:id',
    canActivate: [AuthGuard],
    component: CategoryEditComponent,
    data: { title: 'Category Edit' }
  },
  {
    path: 'post',
    canActivate: [AuthGuard],
    component: PostComponent,
    data: { title: 'Post' }
  },
  {
    path: 'post/details/:id',
    canActivate: [AuthGuard],
    component: PostDetailsComponent,
    data: { title: 'Post Details' }
  },
  {
    path: 'post/add',
    canActivate: [AuthGuard],
    component: PostAddComponent,
    data: { title: 'Post Add' }
  },
  {
    path: 'post/edit/:id',
    canActivate: [AuthGuard],
    component: PostEditComponent,
    data: { title: 'Post Edit' }
  },
  {  
    path: 'user',
    canActivate: [AuthGuard],
    component: UserComponent,
    data: { title: 'User' }
  },
  { 
    path: '404', 
    component: NotFoundComponent,
    data: { title: '404 - Not found page' }  
  },
  { 
    path: '**', 
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
