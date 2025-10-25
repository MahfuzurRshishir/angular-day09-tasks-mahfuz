import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService, Product } from '../../data/products.service';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PricePipe } from '../../../../shared/pipes/price/price.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PricePipe],
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class ListComponent implements OnInit {
  // in-memory state
  all: Product[] = [];
  filtered: Product[] = [];
  query = '';

  form!: FormGroup;
  editingId: number | null = null;

  constructor(private products: ProductsService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(1)]]
    });
    this.products.getAll().subscribe((data) => {
      this.all = data;
      this.applyFilter();
    });
  }

  applyFilter() {
    const q = this.query.toLowerCase().trim();
    this.filtered = q ? this.all.filter(p => p.name.toLowerCase().includes(q)) : [...this.all];
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.value as { name: string; price: number };
    if (this.editingId != null) {
      // update
      const idx = this.all.findIndex(p => p.id === this.editingId);
      if (idx > -1) {
        this.all[idx] = { id: this.editingId, name: value.name, price: Number(value.price) };
      }
      this.editingId = null;
    } else {
      // add
      const nextId = this.all.length ? Math.max(...this.all.map(p => p.id)) + 1 : 1;
      this.all.unshift({ id: nextId, name: value.name, price: Number(value.price) });
    }
    this.form.reset({ name: '', price: 0 });
    this.applyFilter();
  }

  edit(p: Product) {
    this.editingId = p.id;
    this.form.setValue({ name: p.name, price: p.price });
  }

  remove(p: Product) {
    this.all = this.all.filter(x => x.id !== p.id);
    this.applyFilter();
  }

  details(p: Product) {
    // Simple details display for now; can be replaced with routing/modal later
    alert(`Product Details:\nID: ${p.id}\nName: ${p.name}\nPrice: ${p.price}`);
  }
}
