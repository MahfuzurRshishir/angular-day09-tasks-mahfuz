import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export interface Product { id: number; name: string; price: number; }

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Product[]> {
    const base = environment.apiBaseUrl ?? '';
    return this.http.get<Product[]>(`${base}/assets/products.json`);
  }
}
