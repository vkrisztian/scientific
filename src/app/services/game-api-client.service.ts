import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GameApiClientService {

  private apiAddress = 'http://localhost:8080';
  private generateRandomUrl = '/GetRandom';

  constructor(
    private http: HttpClient
  ) { }

  getRandom(num: number, upperBound: number): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiAddress}${this.generateRandomUrl}`, {
      params: {
        length: num.toString(),
        upperBound: upperBound.toString()
      }
    });
  }

  getRandomMock(num: Number, upperBound: number): Observable<number[]> {
    const result: number[] = [];
    while (result.length < num) {
      const number = Math.floor(Math.random() * upperBound);
      if (!result.includes(number)) {
        result.push(number);
      }
    }

    return of(result);
  }

}
