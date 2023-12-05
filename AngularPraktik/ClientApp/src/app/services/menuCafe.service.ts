import { IMenuCafe } from "../models/menuCafeInterface";
import { HttpClient } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class MenuCafeService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

  }
  // С локалки
  getAll(): Observable<Array<IMenuCafe>> {
    return this.http.get<Array<IMenuCafe>>(this.baseUrl + 'MenuCafe')
  }
  // C mysql сервера, запущенном на OpenServer (версии 8.0.30)
  getAllDB(): Observable<Array<IMenuCafe>> {
    return this.http.get<Array<IMenuCafe>>(this.baseUrl + 'api/DB/GetAllDB')
  }
}
