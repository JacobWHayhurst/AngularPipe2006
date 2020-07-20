import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
/* Rxjs is Reactive extension of JavaScript, It contains Observables, BehavioralSubjects,
  Promises, etc.
*/

export interface Pokes {
  'name': string;
  'id': number;
  'base_experience': number;
}

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private url = 'https://pokeapi.co/api/v2/pokemon/123';

  constructor(private httpCli: HttpClient) { }

  /* An Observable is like a Promise, and is used to subscribe to information published to a stream.
    All subscribers are "notified" when new information is avialible in the stream(network). The subscriber callback
    function is then invoked.

    Unlike Promises, Observables can be synchronous or asynchronous. They can provide 0 to many values.
    Promises can have only 1 activation, Observables can 0 to 1 to many activations.
  */
  retrievePokemon(): Observable<string> {
    return this.httpCli.get<string>(this.url);
  }

  retrievePokemon2(): Observable<Pokes> {
    return this.httpCli.get<Pokes>(this.url);
  }

}
