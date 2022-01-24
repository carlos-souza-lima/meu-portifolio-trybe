const nomesEstados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];

const siglasEstados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];
const select_estado = document.querySelector('#estado-usuario');

function adicionaEstados () {
    for (let index = 0; index < nomesEstados.length; index++) {
        let optionsEstados = document.createElement('option');
        const element = nomesEstados[index];
        optionsEstados.innerText = element;
        optionsEstados.value = siglasEstados[index]
        select_estado.appendChild(optionsEstados);
    }
}
adicionaEstados();