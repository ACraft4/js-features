const promt_delay = 1000; 
const max_promt_attemts = 3; 

let promtCounter = 0;
let hasSubcribed = false; 


const intervalId = setInterval(() => {
    if (promtCounter === max_promt_attemts) {
        console.log('stop!');
        clearInterval(intervalId);
        return;
    }

    console.log('Subscribe - ' + Date.now());
    promtCounter += 1;
}, promt_delay); 

