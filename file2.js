// passing a function as a argument to the another function is known as callback
function dog(cat)//callback
{
    setTimeout(()=>{
      console.log("jack the dog");
      cat();//callback
    },2000);
}
function cat()
{
    console.log("Rose the cat");
}
dog(cat);

//nested code is callback 