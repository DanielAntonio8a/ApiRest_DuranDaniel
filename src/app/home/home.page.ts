  // Importa el servicio APIServiceService y el decorador Component desde los módulos de Angular.
  // import { ItemsApi } from './../Services/apiservice.service'
  import { PokeapiService } from './../Services/apiservice.service';
  // import { PokeapiService } from './../Services/apiservice.service';
  import { Component } from '@angular/core';

  // Define el componente HomePage con su selector, plantilla y estilos.
  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
  export class HomePage {
    id: number = 0;
    name: string = '';
    img: string='';

    item: any
    pokemon:any
    pokemon1:any
    pokemon2:any
    pokemon3:any 
    // pokemones: any[]=[];
    constructor(private api: PokeapiService ) {}

    // Método para obtener datos de un Pokémon dado su ID.
    getPokemonDataID(id: number) {
      try {
        this.api.getPokemonID(id).subscribe(response => {
          this.pokemon=response
        });
      } catch (error) {
        console.log(error);
      }
    }
  // Método para obtener datos de un Pokémon dado su Nombre.
    getPokemonDataName(name: string) {
      try {
        this.api.getPokemonName(name).subscribe(response => {
          this.pokemon3=response
        });
      } catch (error) {
        console.log(error);
      }
    }
iditem=0
    getIDitem(iditem: number){
      try{
        this.api.getIDitem(iditem).subscribe(response => {
          this.item=response
          console.log(this.item)
          });
      } catch(error){
        console.log(error);
      }
    }
    item2:any ;
    nameitem=""
    getNameitem(nameitem: string) {
      try {
        this.api.getNameitem(nameitem).subscribe(response => {
          this.item2=response
          console.log(this.item2)
        });
      } catch (error) {
        console.log(error);
      }
    }

  }