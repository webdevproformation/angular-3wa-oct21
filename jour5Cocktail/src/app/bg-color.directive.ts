import { Directive , ElementRef , Input  } from '@angular/core';

@Directive({
  selector: '[bgColor]'
})
export class BgColorDirective {
  @Input('bgColor') color: string = "";

  constructor( private baliseHtml : ElementRef ) { }

  ngOnInit(){
    console.log(this.color);
    this.baliseHtml.nativeElement.style["background"] = this.color;  
  }

}
