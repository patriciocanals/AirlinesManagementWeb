import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private snackBar: MatSnackBar) { }

  showNotification(message: string, action: string = 'Cerrar', duration: number = 3000) {
    this.snackBar.open(message, action, { duration });
  }

  handleError(error: unknown): string {
    if (error instanceof Error) {
      return error.message;
    }
    return 'Ocurrió un error inesperado. Inténtalo de nuevo.'
  }
}
