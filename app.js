function compareNr(a,b) {     //sortowanie
    return a-b;
}

let randomNumber = () => {
    let minNum = 0;     //losowana wartosc jest wieksza od min
    let maxNum = 49;    //losowana wartosc jest mniejsza lub rowna od max
    let luckyNumbers = [];

    let a = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;

    for(let i=0;i<6;i++) {

        luckyNumbers[i] = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    

        while(luckyNumbers[i]==luckyNumbers[i-1]||luckyNumbers[i]==luckyNumbers[i-2]||luckyNumbers[i]==luckyNumbers[i-3]||luckyNumbers[i]==luckyNumbers[i-4]||luckyNumbers[i]==luckyNumbers[i-5]){
            luckyNumbers[i] = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
        }
      }

      document.getElementsByClassName("no1")[0].innerHTML = luckyNumbers[0];
      // document.querySelectorAll(".no1")[0].innerHTML = luckyNumbers[0]; //tak też może być
      document.getElementsByClassName("no2")[0].innerHTML = luckyNumbers[1];
      document.getElementsByClassName("no3")[0].innerHTML = luckyNumbers[2];
      document.getElementsByClassName("no4")[0].innerHTML = luckyNumbers[3];
      document.getElementsByClassName("no5")[0].innerHTML = luckyNumbers[4];
      document.getElementsByClassName("no6")[0].innerHTML = luckyNumbers[5];

      luckyNumbers = luckyNumbers.sort(compareNr);

      document.getElementsByClassName("sortNo1")[0].innerHTML = luckyNumbers[0];
      document.getElementsByClassName("sortNo2")[0].innerHTML = luckyNumbers[1];
      document.getElementsByClassName("sortNo3")[0].innerHTML = luckyNumbers[2];
      document.getElementsByClassName("sortNo4")[0].innerHTML = luckyNumbers[3];
      document.getElementsByClassName("sortNo5")[0].innerHTML = luckyNumbers[4];
      document.getElementsByClassName("sortNo6")[0].innerHTML = luckyNumbers[5];
     
    
}