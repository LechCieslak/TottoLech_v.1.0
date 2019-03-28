let randomNumber = () => {
    let minNum = 0;     //losowana wartosc jest wieksza od min
    let maxNum = 49;    //losowana wartosc jest mniejsza lub rowna od max

    let a = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    
    let b = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    while (b==a) {
        b = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    }
    let c = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    while (c==a||c==b) {
        c = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    }
    let d = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    while (d==a||d==b||d==c) {
        d = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    }
    let e = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    while (e==a||e==b||e==c||e==d) {
        e = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    }
    let f = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    while (f==a||f==b||f==c||f==d||f==e) {
        f = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    }


        
    document.getElementsByClassName("no1")[0].innerHTML = a;
    document.getElementsByClassName("no2")[0].innerHTML = b;
    document.getElementsByClassName("no3")[0].innerHTML = c;
    document.getElementsByClassName("no4")[0].innerHTML = d;
    document.getElementsByClassName("no5")[0].innerHTML = e;
    document.getElementsByClassName("no6")[0].innerHTML = f;
}

let randomNumberWithforLoop = () => {
    let minNum = 0;     //losowana wartosc jest wieksza od min
    let maxNum = 6;    //losowana wartosc jest mniejsza lub rowna od max
    let luckyNumbers = [];

    let a = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;

    for(let i=0;i<6;i++) {

        luckyNumbers[i] = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
    

        while(luckyNumbers[i]==luckyNumbers[i-1]||luckyNumbers[i]==luckyNumbers[i-2]||luckyNumbers[i]==luckyNumbers[i-3]||luckyNumbers[i]==luckyNumbers[i-4]||luckyNumbers[i]==luckyNumbers[i-5]){
            luckyNumbers[i] = Math.ceil(Math.random() * (maxNum - minNum)) + minNum;
        }
      }

      function compareNr(a,b) {     //sortowanie
          return a-b;
      }

      let tab2 = luckyNumbers.sort(compareNr);

      console.log(tab2);
      
    
}

randomNumberWithforLoop();