import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PalyersService } from 'src/app/core/services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  player1: string = "";
  player2: string = "";

  constructor(
    private router: Router,
    private palyersService: PalyersService
  ) { }

  ngOnInit(): void {
  }

  /**
   * Start whit the Game
   * @void
   */
  startGame(){
    if(!this.player1 || !this.player2) return;

    this.palyersService.createPayers([this.player1, this.player2])

    this.router.navigate(['/triqui'])
  }

}
