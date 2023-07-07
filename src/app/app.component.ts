import { Component, HostListener, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  val: number = 5; 
  star = 5
  read = true
  tamañoPantalla = window.innerWidth;
  resize = false
  options: AnimationOptions= {  
    path: '../assets/lottie/96590-astronaut-info.json', // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
  options1: AnimationOptions= {  
    path: '../assets/lottie/68687-cute-astronaut-in-space-mug-cartoon.json', // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
  options2: AnimationOptions= {  
    path: '../assets/lottie/91574-astronaut-illustration.json', // download the JSON version of animation in your project directory and add the path to it like ./assets/animations/example.json
  };
  avatar = '../assets/img/avatar.png'
  draw1 = '../assets/img/draw1.svg'  
  draw2= '../assets/img/draw2.svg'  
  draw3= '../assets/img/draw3.svg'  
  title = 'hv-david';
  video = "../assets/video/video.mp4"
  isVisible = false
  isVisible1 = false
  isVisible2 = false
  value= 70
  vista= false
  skills:any = [
    {
      value:0,
      Maxvalue:90,
      img: "../assets/logos/angular.png" 
    },
    {
      value:0,
      Maxvalue:90,
      img: "../assets/logos/html.png" 
    },
    {
      value:0,
      Maxvalue:80,
      img: "../assets/logos/css.png" 
    },
    {
      value:0,
      Maxvalue:60,
      img: "../assets/logos/js.png" 
    },
    {
      value:0,
      Maxvalue:90,
      img: "../assets/logos/typescript.png" 
    },
    {
      value:0,
      Maxvalue:50,
      img: "../assets/logos/ionic.png" 
    },
    {
      value:0,
      Maxvalue:40,
      img: "../assets/logos/react.png" 
    },

  ]
constructor(
  private elementRef: ElementRef
){
  
}
ngAfterViewInit() {
  const container = this.elementRef.nativeElement.querySelector('#scroll-container');
  container.scrollTo(0, 0);
  if (this.tamañoPantalla < 850) {
    this.resize = true;
  } else {
    this.resize = false;
  }
}
  ngOnInit(): void {
  console.log(this.resize)
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.isVisible = entry.isIntersecting;
        this.isVisible1 = entry.isIntersecting;
      } 
      console.log(this.isVisible);
    });
    const observer2 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.isVisible2 = entry.isIntersecting;
       
      }
      console.log('jhhjh',this.isVisible2);
    });
    const observer1 = new IntersectionObserver(([entry]) => {
      this.vista = false
      if (entry.isIntersecting) {
       
       this.vista = entry.isIntersecting;
       if(this.vista){
        for (let i of this.skills) {
          for (let o = 0; o <= i.Maxvalue; o++) {
            setTimeout(() => {
              i.value = o;
              // console.log(i.value); // Puedes agregar cualquier acción que desees realizar dentro del bucle
            }, o * 20); // Multiplicamos "o" por 1000 para obtener los segundos
          }
        }
       }
      
      }
      console.log('vista',this.vista);
    });
  
  
    setTimeout(() => {
      const targetElement = this.elementRef.nativeElement.querySelector('#seccion1');
      if (targetElement) {
        observer.observe(targetElement);
      }
      console.log(observer);
    }, 10);
    setTimeout(() => {
      const targetElement = this.elementRef.nativeElement.querySelector('#seccion');
      if (targetElement) {
        observer1.observe(targetElement);
      }
      console.log(observer1);
    }, 10);
    setTimeout(() => {
      const targetElement = this.elementRef.nativeElement.querySelector('#seccion3');
      if (targetElement) {
        observer2.observe(targetElement);
      }
      console.log('ggg',observer2);
    }, 10);
   
  
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.tamañoPantalla = window.innerWidth;
    //console.log(this.tamañoPantalla)
    if (this.tamañoPantalla < 850) {
      this.resize = true;
    } else {
      this.resize = false;
    }
  }
}
