import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

import { CarsService } from './cars.service';

type Estado = 'cargando' | 'error' | 'vacio' | 'listo';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private readonly carsService = inject(CarsService);

  readonly estado = signal<Estado>('cargando');
  readonly contenido = signal('');
  readonly error = signal('');

  constructor() {
    this.cargar();
  }

  cargar(): void {
    this.estado.set('cargando');
    this.error.set('');

    this.carsService.getCars().subscribe({
      next: (respuesta) => {
        const texto = this.aTexto(respuesta);
        this.contenido.set(texto);
        this.estado.set(texto.length === 0 ? 'vacio' : 'listo');
      },
      error: (err: HttpErrorResponse) => {
        this.error.set(
          `No se pudo obtener la información (HTTP ${err.status || 0}): ${err.message}`
        );
        this.estado.set('error');
      }
    });
  }

  private aTexto(respuesta: unknown): string {
    if (respuesta === null || respuesta === undefined) {
      return '';
    }
    if (typeof respuesta === 'string') {
      return respuesta.trim();
    }
    if (Array.isArray(respuesta) && respuesta.length === 0) {
      return '';
    }
    return JSON.stringify(respuesta, null, 2);
  }
}
