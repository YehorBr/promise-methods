const delayedPromise =  (value, delay ) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(value)
        }, delay)
    })
}

const promisesArr = [delayedPromise("Promise A",1000), delayedPromise("Promise B",1500),delayedPromise("Promise C",2000),delayedPromise("Promise D",2500),delayedPromise("Promise E",3000)]

Promise.all(promisesArr)
.then((res)=>{
    console.log("Результати:", res);
})
.catch((err)=>{
    console.log("Помилка:", err);
})

const randomDelay = (value) =>{
    const delay = Math.floor(Math.random()* 4000) + 1000
                console.log(`${value} in ${delay} ms`);
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(value)
        },delay)
    })
}   

const promisesRaceArr = [randomDelay("A"),randomDelay("B"),randomDelay("C"),randomDelay("D"),randomDelay("E")]

Promise.race(promisesRaceArr)
.then((res)=>{
    console.log("Fastest promise:", res);
})
.catch((err)=>{
    console.log("Error!",  err);
})