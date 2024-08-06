import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  images = [
    {pCode:1, src: './assets/img/poert1.png', alt: 'Image 1'  },
    {pCode:2, src: './assets/img/port2.png', alt: 'Image 2' },
    {pCode:3, src: './assets/img/port3.png', alt: 'Image 3' },
    {pCode:4, src: './assets/img/poert1.png', alt: 'Image 1' },
    {pCode:5, src: './assets/img/port2.png', alt: 'Image 2' },
    {pCode:6, src: './assets/img/port3.png', alt: 'Image 3' },
   
  ];
   

  onImageClick(image: { pCode: number; src: string; alt: string }): void {
    console.log('Image clicked:', image);
    let layer=document.querySelector(".layer");
    layer?.classList.replace("hidden","flex");
    document.querySelector(".layer img")?.setAttribute("src",image.src);
  }

  onClose(event: MouseEvent): void {
    let layerClose=document.querySelector(".layer");
    layerClose?.classList.replace("flex","hidden");
    event.stopPropagation();
    event.preventDefault(); 
  }

  onImageClick2(event: MouseEvent): void {
    event.stopPropagation();
  }
}
