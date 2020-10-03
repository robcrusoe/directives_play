import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

	@Input() defaultColor: string = 'transparent';
	@Input() highlightColor: string = 'blue';

	@HostBinding('style.backgroundColor') backgroundColorProp: string;
	@HostBinding('style.color') colorProp: string = 'black';

	@HostListener('mouseenter') mouseover(eventData: Event) {
		// this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'orange');
		this.backgroundColorProp = this.highlightColor;
		this.colorProp = 'whitesmoke';
	}

	@HostListener('mouseleave') mouseremove(eventData: Event) {
		// this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
		this.backgroundColorProp = this.defaultColor;
		this.colorProp = 'black';
	}


	ngOnInit(): void {
		this.backgroundColorProp = this.defaultColor;
	}


	constructor(
		private renderer: Renderer2,
		private elementRef: ElementRef
	) { }
}
