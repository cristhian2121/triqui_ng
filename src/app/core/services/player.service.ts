
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    providedIn: 'root'
})
export class PalyersService {

  private playersBS = new BehaviorSubject<string[]>([]);
  players$ = this.playersBS.asObservable();

  constructor() { }

  createPayers(players: string[]){
    this.playersBS.next(players);
  }

  clearPayers(){
    this.playersBS.next([])
  }
  
}