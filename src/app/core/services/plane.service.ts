// src/app/core/services/plane.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plane } from '../models/plane.interface';

@Injectable({ providedIn: 'root' })
export class PlaneService {
  constructor(private http: HttpClient) {}

  getPlanes(): Observable<{ planes: Plane[] }> {
    return this.http.get<{ planes: Plane[] }>('/data/planes.json');
  }
}