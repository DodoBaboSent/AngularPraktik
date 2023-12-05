import { IMenuCafe } from "../models/menuCafeInterface";
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class MenuCafeService {
  constructor(private http: HttpClient) {

  }
  getAll(): Observable<IMenuCafe[]> {
    return this.http.get<IMenuCafe[]>('http://localhost/index.json')
  }
}
