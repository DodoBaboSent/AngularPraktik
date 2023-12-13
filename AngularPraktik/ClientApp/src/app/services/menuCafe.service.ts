import { IMenuCafe } from "../models/menuCafeInterface";
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Person } from "../models/personClass";

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
    return this.http.get<Array<IMenuCafe>>('https://localhost:7150/api/DB/GetAllDB')
  }
  postDB(data: IMenuCafe[]): Observable<Array<IMenuCafe>> {
    return this.http.post<Array<IMenuCafe>>('https://localhost:7150/api/DB/Add', data[0])
  }
  loginUser(username: string, password: string): Observable<JSON> {
    return this.http.get<JSON>(`https://localhost:7150/api/account/token/${username}/${password}`)
  }
  regUser(data: Person): Observable<Person> {
    return this.http.post<Person>(`https://localhost:7150/api/account/reg/`, data)
  }
  resolveToken(token: string): Observable<{ login: string, role: string }>{
    const header: HttpHeaders = new HttpHeaders({ "Accept": "application/json", "Authorization": "Bearer " + token })
    return this.http.get<{ login: string, role: string }>(`https://localhost:7150/api/account/resolveToken`, {headers : header})
  }
  downloadDB(token: string) {
    const header: HttpHeaders = new HttpHeaders({ "Accept": "application/json", "Authorization": "Bearer " + token })
    return this.http.get(`https://localhost:7150/api/DB/downloaddb`, { headers: header, responseType: "blob" })
  }
}
