import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
        selector: '[appBasicHighlight]',
})

export class BasicHighLightDirective implements OnInit{

    constructor(private someElement: ElementRef) {}

    ngOnInit(): void {
        this.someElement.nativeElement.style.backgroundColor="green";
    }
    
}