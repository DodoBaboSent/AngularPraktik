import { Component } from '@angular/core'
import { MenuCafeService } from '../../services/menuCafe.service';
import { saveAs } from 'file-saver'

@Component({
  selector: 'app-downloadDB',
  templateUrl: './downloadDB.component.html'
})
export class DownloadDB {
  constructor(private menuCafeService: MenuCafeService) {

  }

  loggedIn: boolean = sessionStorage.getItem("loggedIn") === "true" ? true : false
  role: string | null = sessionStorage.getItem("role")

  theFile: Blob | undefined;
  download() {
    if (localStorage.getItem("token") != null) {
      this.menuCafeService.downloadDB(localStorage.getItem("token")!).subscribe((data) => {
        this.theFile = new Blob([data], { type: "application/octet-stream" })
        let fileName = "db.txt"
        saveAs(this.theFile, fileName);
        console.log(this.theFile)
      })
    }
  }
}

