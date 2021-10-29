import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[defaultImg]'
})
export class ImageDirective {

  private url : string = "http://via.placeholder.com/200x100?text=logo";

  constructor(imgHtml : ElementRef) {
      imgHtml.nativeElement.src = this.url;
      imgHtml.nativeElement.style["border"] = "2px solid grey";
      imgHtml.nativeElement.style["border-radius"] = "10px";
      imgHtml.nativeElement.addEventListener("click" , (e : any) => {
          e.target.style["display"] = "none";
      })
  }

}
