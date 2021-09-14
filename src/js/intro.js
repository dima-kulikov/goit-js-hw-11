const myCode = (time)=>
    console.log(
    `Время идет ${time}ms ${Date.now()}`);

    let counter = 0;

const interval = setInterval(()=>{
    console.log('Подписка на рассылку');
    counter += 1;
    console.log(counter);
},1000);



