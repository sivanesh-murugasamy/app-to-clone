
// function cat()
// {
//     if(true)
//     {
//         let a=5;
//         console.log(a);
//     }
//     console.log(a)
// }

// cat();


// function cat()
// {
//     if(true)
//     {
//         var a=5;
//         console.log(a);
//     }
//     console.log(a)
// }

// cat();


// setTimeout(function(){
//     console.log(a);
// },100)

// var a=5;

// let a=10;
// let a=13;
// console.log(a);

// let a=10;
// a=20;
// console.log(a);
// var b=45;
// b=99;
// console.log(b);

// let c=34567890n;//consider it as a big integer
// let d=BigInt(345675678);

// let student1={
//     name:["abi","raja"],
//     age:20,
//     isStudent:true,
//     address:{
//         state:"tamilnadu",
//         country:"India"
//     },
//     hello:function()
//     {
//         console.log(student1);
//     }
// }

// student1.hello();
// console.log(student1.name);
// console.log(student1.name[1]);


//another way  of creating 
let student1=new Object;
student1.name="abi";
student1.age=33;
console.log(student1);
student1.function_in_object=function()
{
    console.log("hello object");
}
student1.function_in_object();