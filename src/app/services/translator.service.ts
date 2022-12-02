import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Translator } from "../models/translator.model";

@Injectable({ providedIn: 'root' })

export class TranslatorService {
  private apiServerUrl = "https://api.openai.com/v1";
  
  constructor(private http: HttpClient) {
   }

 
  public addString(translator: Translator): Observable<Translator> {
    let api_key = "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";
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`
      });

    const requestOptions = { headers: headers };
    return this.http.post<Translator>(`${this.apiServerUrl}/completions`,translator, requestOptions);
  }
}