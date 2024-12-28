function a1(callback)
{
 setTimeout(()=>{
   console.log("you file is processing");
   callback();
 },1000)
}

function a2(callback)
{
    setTimeout(()=>{
      console.log("your file is loaded")
      callback();
    },2000)
}

a1(()=>{
    a2(()=>{
        setTimeout(()=>{
            console.log("Your file is completed");
        },1000)
       
    })
})