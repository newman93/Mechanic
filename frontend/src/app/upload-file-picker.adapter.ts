import { FilePreviewModel } from 'ngx-awesome-uploader-v2';
import { HttpRequest, HttpClient, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FilePickerAdapter } from 'ngx-awesome-uploader-v2';
import { UserService } from './user.service';
import { Router } from '@angular/router';

export class UploadFilePickerAdapter extends FilePickerAdapter {
  
  private url: string = 'http://127.0.0.1:8000/api';
  
  constructor(private http: HttpClient, private user: UserService, private router: Router) {
    super();
  }
  public uploadFile(fileItem: FilePreviewModel) {
    const form = new FormData();
    form.append('file', fileItem.file);
    form.append('email', this.user.getEmail());
    const api = `${this.url}/upload`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.user.getToken()}`,
    });
    const req = new HttpRequest('POST', api, form, {headers: headers, reportProgress: true});

    return this.http.request(req)
    .pipe(
      map( (res: HttpEvent<any>) => {
          if (res.type === HttpEventType.Response) {
           
            return res.body.id.toString();
        } else if (res.type ===  HttpEventType.UploadProgress) {
            
            const UploadProgress = +Math.round((100 * res.loaded) / res.total);
            return UploadProgress;
        }
      })
      );
  }
    public removeFile(fileItem): Observable<any> {
    const removeApi = '';
    return this.http.post(removeApi, {});
    }
}