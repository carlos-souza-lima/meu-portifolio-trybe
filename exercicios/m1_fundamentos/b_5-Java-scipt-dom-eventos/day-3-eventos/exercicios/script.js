function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// EXERCICIO 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
function addNumbersDeze() {
  let ulDay = document.querySelector('#days');
  // console.log(ulDay);
  for (let day of dezDaysList){
    let liDay = document.createElement('li');
    // console.log(liDay);
    liDay.className = 'day';    
    liDay.innerText = day;
    // console.log(liDay)
    ulDay.appendChild(liDay);
    if (day == 24 || day == 25 || day == 31) {
      liDay.className += ' holiday';
    }
  }
}
addNumbersDeze();