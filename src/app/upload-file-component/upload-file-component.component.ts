import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from "../service/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-upload',
  templateUrl: './upload-file-component.component.html'
})
export class UploadFileComponent {
  file!: File;

  constructor(private http: HttpClient, private readonly _authService: AuthService) {
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.file = input.files[0];
    }
  }

  uploadFile(): void {
    const formData = new FormData();
    formData.append('file', this.file);

    this.http.post('http://localhost:8080/api/upload', formData, {headers: this._authService.getCredentials()})
      .subscribe(
        error => {
          console.error('Erreur :', error);
        });
  }

  downloadFileService(fileId: number): Observable<any> {
    const url = `http://localhost:8080/api/download/${fileId}`;
    return this.http.get(url, { responseType: 'blob' });
  }

}

