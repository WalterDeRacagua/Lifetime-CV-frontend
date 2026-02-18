import { Directive, ElementRef, inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollReveal implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(30px)');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 1s ease-out');

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
            this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(0)');
          } else {
            this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
            this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateY(30px)');
          }
        });
      },
      { threshold: 0.3 },
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    // Limpiar el observer cuando se destruye la directiva
    this.observer?.disconnect();
  }
}
