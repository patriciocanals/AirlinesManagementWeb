import { Routes } from '@angular/router';
import { PlanesComponent } from './components/planes/planes.component';
import { RoutesComponent } from './components/routes/routes.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

export const routes: Routes = [
    {path: 'planes', component: PlanesComponent},
    {path: 'routes', component: RoutesComponent},
    {path: 'calculator', component: CalculatorComponent}
];
