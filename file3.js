
function attendance(callback)
{
  setTimeout(()=>{
    console.log("attendance present")
    callback();
  },1000)   
}

function lunch(callback)
{
  setTimeout(()=>{
    console.log("go to the lunch")
    callback();
  },1000)   
}
function home(callback)
{
  setTimeout(()=>{
    console.log("go to the home")
    callback();
  },1000)   
}

attendance(()=>{
    lunch(()=>{
        home(()=>{
            console.log("Day Completed");
        })
    })
})