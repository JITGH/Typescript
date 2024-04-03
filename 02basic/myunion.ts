{{

let score: number | string =33

score=44
score="55"

console.log(score);


type User={
    name:string;
    id:number
}

type admin={
    name:string;
    id:number
}

let jit: User|admin={name:"Jit",id:1234}

jit={name:"jg",id:1234}


// function getDbId(id:number | string){
//     console.log(`DB ID is :${id}`);
    
// }

getDbId(3)
getDbId("3")


function getDbId(id:number | string){
   if(typeof id==="string"){
    id.toLowerCase()
   }
   if(typeof id ==="number"){
    id=id+2
   }
    
}

//array

const data:number[]=[1,2,3,4]

const data1:string[]=["1","2","3"]

 const data2:(string|number)[]=["1","2",3]

// let pi:3.14=3.14

// pi=3.145

let seatAllotment:"aisle"|"middle"|"window"

seatAllotment="aisle"
// seatAllotment="crew"


















}}