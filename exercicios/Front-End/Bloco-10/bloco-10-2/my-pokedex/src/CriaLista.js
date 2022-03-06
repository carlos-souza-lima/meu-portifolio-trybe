import React, { Component } from "react";
// import pokemons from "./data";
import Image from "./Image";

class CriaLista extends Component {
  render() {
    const teste = this.props.data
    return (
      teste.map((item) => 
        <section className="section-pokemon" key={item.id}>
          <p className="p-name">{ item.name }</p>
          <p className="p-type">{ item.type }</p>
          <p className="p-peso">{`average Weight: ${item.averageWeight.value}${item.averageWeight.measurementUnit}`}</p>
          <Image source={item.image}/>
        </section> 
      )
     
    )
  }
}

export default CriaLista

/*   id: 25,
name: "Pikachu",
type: 'Electric',
averageWeight: {
value: 6.0,
measurementUnit: "kg"
},
image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
moreInfo: */