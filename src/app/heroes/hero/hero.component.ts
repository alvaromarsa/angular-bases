import { Component } from '@angular/core';

@Component({

  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;


//los get son metodos que parece propiedades, ademas podemos tratarlos como propiedades de un objeto.
  get capitalizedName(): string{
    return this.name.toUpperCase();
  }
// los `` son para hacer concatenaciones
  getheroDescription(): string{
    return `${ this.name } - ${ this.age}`;
  }

  changeHero(): void{
    this.name = 'spiderman';
  }

  changeAge (): void{
    this.age = 25;
  }

  resetForm (): void {
    this.name = 'ironman';
    this.age = 45;
  }

}
