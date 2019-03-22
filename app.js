let randomNumber = () => {
    let a = Math.ceil(Math.random() * 49);
    
    let b = Math.ceil(Math.random() * 49);
    while (b==a) {
        b = Math.ceil(Math.random() * 49);
    }
    let c = Math.ceil(Math.random() * 49);
    while (c==a||c==b) {
        c = Math.ceil(Math.random() * 49);
    }
    let d = Math.ceil(Math.random() * 49);
    while (d==a||d==b||d==c) {
        d = Math.ceil(Math.random() * 49);
    }
    let e = Math.ceil(Math.random() * 49);
    while (e==a||e==b||e==c||e==d) {
        e = Math.ceil(Math.random() * 49);
    }
    let f = Math.ceil(Math.random() * 49);
    while (f==a||f==b||f==c||f==d||f==e) {
        f = Math.ceil(Math.random() * 49);
    }


        
    document.getElementsByClassName("no1")[0].innerHTML = a;
    document.getElementsByClassName("no2")[0].innerHTML = b;
    document.getElementsByClassName("no3")[0].innerHTML = c;
    document.getElementsByClassName("no4")[0].innerHTML = d;
    document.getElementsByClassName("no5")[0].innerHTML = e;
    document.getElementsByClassName("no6")[0].innerHTML = f;
}