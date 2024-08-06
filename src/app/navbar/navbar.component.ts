import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private navbar: HTMLElement | null = null;
  isMenuOpen: boolean = false; // Track the menu state

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.navbar = this.renderer.selectRootElement('.navbar', true);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.navbar) {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        this.renderer.addClass(this.navbar, 'shrink');
      } else {
        this.renderer.removeClass(this.navbar, 'shrink');
      }
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.renderer.addClass(this.navbar, 'expanded');
    } else {
      this.renderer.removeClass(this.navbar, 'expanded');
    }
  }
}
