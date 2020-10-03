import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

	@HostListener('mouseenter') mouseover(eventData: Event) {
		this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'orange');
	}

	@HostListener('mouseleave') mouseremove(eventData: Event) {
		this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
	}


	constructor(
		private renderer: Renderer2,
		private elementRef: ElementRef
	) { }
}
