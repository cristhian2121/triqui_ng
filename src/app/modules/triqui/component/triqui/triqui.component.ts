import { Component, OnInit } from '@angular/core';
import { IElementSelected } from 'src/app/interfaces';

@Component({
  selector: 'app-triqui',
  templateUrl: './triqui.component.html',
  styleUrls: ['./triqui.component.scss']
})
export class TriquiComponent implements OnInit {

  one?: IElementSelected;
  two?: IElementSelected;
  three?: IElementSelected;
  four?: IElementSelected;
  five?: IElementSelected;
  six?: IElementSelected;
  seven?: IElementSelected;
  eigh?: IElementSelected;
  nine?: IElementSelected;

  constructor() { }

  selectedCircle: IElementSelected[] = [
    {
      position: 0,
      player: "0"
    }
  ];
  selectedEx: IElementSelected[] = [];

  ngOnInit(): void {
  }

  onClick(position: number) {
    this.selectedCircle.push({ position, player: 'X' })
    this.changeTurn(position, "X");
  }

  onRightClick(position: number) {
    console.log('position: ', position);
    this.selectedEx.push({ position, player: 'O' })
    this.changeTurn(position, "O");
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

}
