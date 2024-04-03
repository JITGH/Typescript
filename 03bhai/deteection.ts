{{

function detectType(val:number|string) {
    if (typeof val==="string") {
        return val.toLowerCase()
    }
    return val+3
}

function provideId(id:string|null){
    if(!id){
        console.log("Please provide Id");
        return;
        
    }
    id.toLowerCase()
}


function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }


  function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
  }


//   function isFish(pet: Fish | Bird): pet is Fish {
//     return (pet as Fish).swim !== undefined;
//   }

type fish={swim:()=>void}
type bird={fly:()=>void}

function isfish(pet:fish|bird) : pet is fish{
   return (pet as  fish).swim!==undefined
}

function getfood(pet :fish|bird){
    if(isfish(pet)){
        pet
        return "fish food"
    }else{
        pet
        return "bird food"
    }
}




















}}