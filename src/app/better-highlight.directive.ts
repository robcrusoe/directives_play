import { Directive, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

	@HostBinding('style.backgroundColor') backgroundColorProp: string = 'transparent';
	@HostBinding('style.color') colorProp: string = 'black';

	@HostListener('mouseenter') mouseover(eventData: Event) {
		// this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'orange');
		this.backgroundColorProp = 'blue';
		this.colorProp = 'whitesmoke';
	}

	@HostListener('mouseleave') mouseremove(eventData: Event) {
		// this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
		this.backgroundColorProp = 'transparent';
		this.colorProp = 'black';
	}


	constructor(
		private renderer: Renderer2,
		private elementRef: ElementRef
	) { }
}
