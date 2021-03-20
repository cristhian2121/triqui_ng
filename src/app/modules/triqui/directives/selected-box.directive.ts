import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IElementSelected } from 'src/app/interfaces';

@Directive({
  selector: '[appSelectedBox]'
})
export class SelectedBoxDirective {

  @Input() set appSelectedBox(selected: IElementSelected | undefined) {
    if (selected) {
      this.addClass(selected as IElementSelected)
    }
  };

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  addClass(selected: IElementSelected) {
    console.log('selected: ', selected);
    if(selected.player === "X"){
      this.renderer.addClass(this.element.nativeElement, 'ex')
    } else {
      this.renderer.addClass(this.element.nativeElement, 'circle')
    }
  }

}
