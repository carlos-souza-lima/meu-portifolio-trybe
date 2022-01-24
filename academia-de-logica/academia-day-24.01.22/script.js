const objArray = require('./data');
const regioes = objArray.regions;
const estados = objArray.states;
const cidades = objArray.cities;

function mapCities() {
  const retorno = {};
  regioes.forEach((regiao) => {
    retorno[regiao.short] = [];
  });
  console.log(retorno);
}

mapCities();

function qualEstado(sigla) {
    return estados.find((estado) => estado.short === sigla).name;
  }
  console.log(qualEstado('AM'))