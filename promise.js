
// function a1()
// {
//    return new Promise((resolve,reject)=>{
//     let val=true
//    if(val)
//     {
//         resolve("Your file is processing")
//     } 
//     else
//     {
//         reject("Error")
//     } }) 
// }

// a1().then((data)=>{
//    console.log(data)
      
// }).catch((error)=>{console.log(error)}
// )

function a1(callback)
{
  setInterval(()=>{
     console.log("Function 1 is executed")
     callback();
  },1000)
}
function a2(callback)
{
  setInterval(()=>{
     console.log("Function 2 is executed");
     callback();
  },1000)
}
function a3(callback)
{
    setInterval(()=>{
         console.log("Function 3 is executed");
         callback()
    },1000)
}

a1(()=>{
   a2(()=>{
        a3(()=>{
             console.log("All functions are executed")
        })
   })
})