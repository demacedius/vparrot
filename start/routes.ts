/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', 'ServicesController.index')
Route.post('pages/comment', 'ComentsController.store')
Route.get('pages/login', 'LoginController.create')
Route.post('pages/login', 'LoginController.store')
Route.get('pages/dashboard', 'ComentsController.index').as('dashboard')
Route.get('logout', 'LoginController.logout').as('auth.logout')