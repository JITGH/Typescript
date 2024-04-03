{{
    
    function addtwo(num:number):number{
        //num.toUpperCase() //error 
    return num+2
   // return "hello";
}

function getupper(val:string){
    return val.toUpperCase()
}

function signupuser(name:string,email:string,ispaid:boolean){

}

let loginuser=(name:string,email:string,ispaid:boolean=true)=>{

}


let myvalue=addtwo(5)
getupper("d")

signupuser("Jit","jit@erty.com",false)
loginuser("h","h@j.com")


// function getValue(myval:number){  //handle this 
//     if(myval>5){
//         return true;
//     }
//     return "200 OK"
// }

const gethello = (s:string):string=>{
return ""
}

const heros=["thor","spiderman","Batman"]
//const heros=[1,2,3]

heros.map((hero):string=>{
     return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg);
    //return 2;
}

function handleError(errmsg:string):never{
    // console.log(errmsg);
    throw new Error(errmsg)
    
}




}}
