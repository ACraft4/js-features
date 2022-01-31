const date1 = Date.now();       //new Date().getTime(); 

console.log("date1", date1);

setTimeout(() => {
    const date2 = Date.now();

    console.log("date1", date1);
    console.log("date2", date2);

    console.log(date2 - date1);
}, 60000); 



// const date1 = new Date(); 

// console.log("date1", date1);

// setTimeout(() => {
//     const date2 = new Date();

//     console.log("date1", date1);
//     console.log("date2", date2);

//     console.log(date2 - date1);
// }, 3000); 

