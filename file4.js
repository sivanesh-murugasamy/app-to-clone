
function attendance()
{
 return new Promise((res,rej)=>{
  setTimeout(()=>{
    let ap=true;
    if(ap)
    {
      res("Attendance present");
    }
   
   
  },1000)  
})
}

function lunch()
{
  return new Promise((res,rej)=>{
  setTimeout(()=>{
    let lp=true;
    if(lp)
    {
      res("Lunch taken");
    }
    
   
  },1000)   
})
}
function home()
{
  return new Promise((res,rej)=>{
  setTimeout(()=>{
    let hp=true;
    if(hp)
    {
      res("Going to home")
    }
   
  },1000) })
}

// attendance().then((val)=>{console.log(val);return lunch()})
//             .then((val)=>{console.log(val);return home()})
//             .then((val)=>console.log("hi",val));

async function finalDay()
{
  let a=await attendance();
  console.log(a);
  let l=await lunch();
  console.log(l);
  let h=await home();
  console.log(h);

}

finalDay();
