import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { PlaneService } from '../../core/services/plane.service';
import { Plane, SortablePlaneKeys } from '../../core/models/plane.interface';

@Component({
  selector: 'app-planes',
  imports: [CommonModule, MatCardModule, MatGridListModule, MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css'
})
export class PlanesComponent implements OnInit {
  planes: Plane[] = [];
  filteredPlanes: Plane[] = [];
  brandFilter = new FormControl('');
  sortControl = new FormControl<SortablePlaneKeys | null>(null);
  breakpoint: number = 1;
  isHovered: boolean = false;

  constructor(private planeService: PlaneService) { }

  ngOnInit() {
    this.planeService.getPlanes().subscribe({
      next: data => {
        this.planes = data.planes;
        this.filteredPlanes = [...this.planes];
        this.breakpoint = window.innerWidth <= 600 ? 1 : 3;
        this.applyFilters();
      },
      error: err => console.error('Error loading planes data', err)
    });

    this.brandFilter.valueChanges.subscribe(() => this.applyFilters());
    this.sortControl.valueChanges.subscribe(() => this.applyFilters());
  }

  applyFilters() {
    let tempPlanes = [...this.planes];

    // Filtro por marca
    const brandFilterValue = this.brandFilter.value?.toLowerCase() || '';
    if (brandFilterValue) {
      tempPlanes = tempPlanes.filter(plane =>
        plane.brand.toLowerCase().includes(brandFilterValue)
      );
    }

    // Ordenamiento
    const sortBy = this.sortControl.value;
    if (sortBy) {
      tempPlanes.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
      });
    }

    this.filteredPlanes = tempPlanes;
  }
}
