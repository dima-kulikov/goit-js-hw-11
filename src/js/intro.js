// const date = new Date();
// console.log(date.getTime());

const timer = {
    start(){
        this.startTime = Date.now();
        
        this.timerId = setInterval(()=>{
console.log('worck!');
        },1000);
    },
};

timer.start();


// const myCode = (time)=>
//     console.log(
//     `Время идет ${time}ms ${Date.now()}`);

//     let counter = 0;
//     let pp = 0

// const interval = setInterval(()=>{
//     if(counter <10){
//         console.log('Подписка на рассылку');
//     counter += 1;
//     console.log(counter);
//     } else{
//         clearInterval(interval);
//         console.log('END')
//     }
//     console.log(`ведем счет  ${pp+=1}`)
// },1000);



