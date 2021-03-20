import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PalyersService } from 'src/app/core/services/player.service';
import { IElementSelected } from 'src/app/interfaces';

@Component({
  selector: 'app-triqui',
  templateUrl: './triqui.component.html',
  styleUrls: ['./triqui.component.scss']
})
export class TriquiComponent implements OnInit {

  gameOver = false;

  player1: string = "";
  player2: string = "";
  playerWin: string = "";

  one?: IElementSelected;
  two?: IElementSelected;
  three?: IElementSelected;
  four?: IElementSelected;
  five?: IElementSelected;
  six?: IElementSelected;
  seven?: IElementSelected;
  eigh?: IElementSelected;
  nine?: IElementSelected;

  constructor(
    private palyersService: PalyersService,
    private router: Router,
  ) { }

  selectedCircle: number[] = [];
  selectedEx: number[] = [];

  ngOnInit(): void {
    this.palyersService.players$.subscribe(players => {
      if (players && players.length) {
        this.player1 = players[0];
        this.player2 = players[1];
      } else {
        this.router.navigate(['/'])
      }
    })
  }

  onClick(position: number) {
    this.selectedEx.push(position)
    this.changeTurn(position, this.player1);
    this.gameOver = this.isWin(this.player1)
    if(this.gameOver){
      this.playerWin = this.player1;
    }
  }

  onRightClick(position: number) {
    this.selectedCircle.push(position)
    this.changeTurn(position, this.player2);
    this.gameOver = this.isWin(this.player2)
    if(this.gameOver){
      this.playerWin = this.player2;
    }
  }

  changeTurn(position: number, player: string) {
    switch (position) {
      case 0:
        this.one = { position, player }
        break;
      case 1:
        this.two = { position, player }
        break;
      case 2:
        this.three = { position, player }
        break;
      case 3:
        this.four = { position, player }
        break;
      case 4:
        this.five = { position, player }
        break;
      case 5:
        this.six = { position, player }
        break;
      case 6:
        this.seven = { position, player }
        break;
      case 7:
        this.eigh = { position, player }
        break;
      case 8:
        this.nine = { position, player }
        break;
      default: break;
    }
  }

  /**
   * Validate if exist a win (Todo: it is posible improve) true: win, false: none
   * @param player: string
   * @returns: boolean
   */
  isWin(player: string): boolean {
    if (player === this.player1 && this.selectedEx.length > 2) {
      if (this.containAll([0, 1, 2], this.selectedEx)) return true;
      if (this.containAll([0, 4, 8], this.selectedEx)) return true;
      if (this.containAll([0, 3, 6], this.selectedEx)) return true;

      if (this.containAll([1, 4, 7], this.selectedEx)) return true;

      if (this.containAll([2, 4, 6], this.selectedEx)) return true;
      if (this.containAll([2, 5, 8], this.selectedEx)) return true;

      if (this.containAll([3, 4, 5], this.selectedEx)) return true;
    }
    if (player === this.player2 && this.selectedCircle.length > 2) {
      if (this.containAll([0, 1, 2], this.selectedCircle)) return true;
      if (this.containAll([0, 4, 8], this.selectedCircle)) return true;
      if (this.containAll([0, 3, 6], this.selectedCircle)) return true;

      if (this.containAll([1, 4, 7], this.selectedCircle)) return true;

      if (this.containAll([2, 4, 6], this.selectedCircle)) return true;
      if (this.containAll([2, 5, 8], this.selectedCircle)) return true;

      if (this.containAll([3, 4, 5], this.selectedCircle)) return true;
    }
    return false
  }

  containAll(elements: number[], list: number[]) {
    let count = 0
    for (const element of elements) {
      if (list.includes(element)) count++
    }
    if (count > 2) return true;
    return false
  }

  /**
   * Game again
   */
  resetGame(e: Event){
    this.one = undefined;
    this.two = undefined;
    this.three = undefined;
    this.four = undefined;
    this.five = undefined;
    this.six = undefined;
    this.seven = undefined;
    this.eigh = undefined;
    this.nine = undefined;

    this.selectedCircle = [];
    this.selectedEx = [];
    this.gameOver = false;

  }

}
