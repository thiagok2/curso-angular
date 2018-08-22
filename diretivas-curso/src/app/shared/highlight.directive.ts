import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() defaultColor: string = 'blue';
  // tslint:disable-next-line:no-input-rename
  @Input('highlight') highlightColor: string = 'yellow';

  constructor() {
    this.backgroundColor = this.defaultColor;
   }

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
}

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
}
}
