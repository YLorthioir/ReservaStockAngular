import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthService} from "../service/auth.service";
import {catchError, throwError} from "rxjs";
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-download-file-component',
  templateUrl: './download-file-component.component.html',
  styleUrls: ['./download-file-component.component.css']
})
export class DownloadFileComponent implements OnInit{
  constructor(private http: HttpClient, private readonly _authService: AuthService,
              private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.http.get<Blob>(`http://localhost:8080/api/download/1`, { responseType: 'blob' as 'json'})
      .pipe(
        catchError(error => {
          console.error('Erreur de connexion réseau :', error);
          return throwError(error);
        })
      ).subscribe((blob: Blob) => {
      const objectURL = URL.createObjectURL(blob);
      this.imageURL = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      });
    }

  imageURL!: any;


  loadFile() {

    this.http.get<Blob>(`http://localhost:8080/api/download/1`)
      .subscribe((blob: Blob) => {
          const url = window.URL.createObjectURL(blob);
          this.imageURL = url;
          const a = document.createElement('a');
          document.body.appendChild(a);
          a.style.display = 'none';
          a.href = url;
          a.download = 'nom_du_fichier.jpg';
          a.click();
          window.URL.revokeObjectURL(url);
        });
  }
}
