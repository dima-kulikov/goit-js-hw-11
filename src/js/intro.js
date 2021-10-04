



const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    const success = Math.random() > 0.3;

    if(success){
        resolve('YES')
    
    } else{
        reject('NO')
    }
        
},1000)
});


console.log('beafore')

const onSucces = message => {
    console.log(message);
    };
const onError =  error => {
    console.error(`Error - ${error}`);
    };   


promise.then(onSucces, onError);


console.log('after')