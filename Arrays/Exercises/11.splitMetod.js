function dungeonDark(arrOfStr) {
// 
    let newArray = arrOfStr[0].split('|'); //prawim mnogo elementi w edin masiw
    //console.log(newArray);
    for (let i = 0; i < newArray.length; i++) {
  
      let command = newArray[i].split(' '); //така разбиваме на отделните масиви, които имат по 2 елемента
  
      console.log(command);
      }
  
    }

  dungeonDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);