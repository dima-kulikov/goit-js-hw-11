const myCode = (time)=>
    console.log(
    `Время идет ${time}ms ${Date.now()}`);

    let counter = 0;
    let pp = 0

const interval = setInterval(()=>{
    if(counter <10){
        console.log('Подписка на рассылку');
    counter += 1;
    console.log(counter);
    } else{
        clearInterval(interval);
        console.log('END')
    }
    console.log(`ведем счет  ${pp+=1}`)
},1000);



