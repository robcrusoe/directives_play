import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

	constructor(
		private renderer: Renderer2,
		private elementRef: ElementRef
	) { }


	ngOnInit(): void {
		this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'orange');
	}

}
