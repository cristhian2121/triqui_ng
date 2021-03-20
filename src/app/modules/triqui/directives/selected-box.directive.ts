import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { PalyersService } from 'src/app/core/services/player.service';
import { IElementSelected } from 'src/app/interfaces';

@Directive({
  selector: '[appSelectedBox]'
})
export class SelectedBoxDirective {

  player1 = "";
  player2 = "";

  @Input() set appSelectedBox(selected: IElementSelected | undefined) {
    if (selected) {
      this.addClass(selected as IElementSelected)
    }
    else {
      this.removeClass()
    }
  };

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private palyersService: PalyersService
  ) {
    this.palyersService.players$.subscribe(players => {
      if (players && players.length) {
        this.player1 = players[0];
        this.player2 = players[1];
      }
    })
  }

  addClass(selected: IElementSelected) {
    if (selected.player === this.player1) {
      this.renderer.addClass(this.element.nativeElement, 'ex')
    } else {
      this.renderer.addClass(this.element.nativeElement, 'circle')
    }
  }

  removeClass() {
    this.renderer.removeClass(this.element.nativeElement, 'ex')
    this.renderer.removeClass(this.element.nativeElement, 'circle')
  }

}
