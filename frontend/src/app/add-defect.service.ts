import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddDefectService {
  
  private url: string = 'http://127.0.0.1:8000/api';

  constructor() { }
}
