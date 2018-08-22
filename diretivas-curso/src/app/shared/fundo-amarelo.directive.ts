import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer) {
      console.log(this._elementRef);

      this._elementRef.nativeElement.style.backgroundColor = 'red';

      this._renderer.setElementStyle(
        this._elementRef.nativeElement,
        'background-color',
        'yellow'
        );
   }

}
