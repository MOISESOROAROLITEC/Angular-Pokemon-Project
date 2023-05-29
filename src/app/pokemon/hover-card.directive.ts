import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[pokemonHoverCard]'
})
export class HoverCardDirective {

	constructor(private element: ElementRef) {
		this.setBorder('red');
		this.setHeigth(100);
	}

	@HostListener("mouseenter") onMouseEnter() {
		this.setBorder('blue');
	}
	@HostListener("mouseleave") onMouseLeave() {
		this.setBorder('red');
	}

	setBorder(color: string) {
		this.element.nativeElement.style.border = `solid 2px ${color}`;
	}

	setHeigth(heigth: number) {
		this.element.nativeElement.style.heigth = `${heigth}px`;
	}
}
