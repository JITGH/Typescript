{{

const score: Array<number>=[]

const names:Array<string>=[]

function identityOne(val:boolean|number):boolean|number{
  return val;
}

function identityTwo(val:any):any{
return val;
}


function identityThree<Type>(val:Type):Type{
    return val;
}

// identityThree(true)

function identityfour<T>(val:T):T{
    return val;
}


interface Bootle{
    brand:string,
    type:number,
}

identityfour<Bootle>({brand:"GYM",type:3});

function getSearchProducts<T>(products:T[]):T{
    //do some database opearations
    const myIndex=3
    return products[myIndex]
}

const getMoreSearchProduct= <T,>(product:T[]):T=>{
//do some database opearations
const myIndex=4
return product[myIndex]
}


interface Database{
    connection:string,
    username: string,
    password:string
}



function anotherFunction<T,U extends Database>(valOne:T,valTwo:U):object{
  return {
    valOne,
    valTwo
  }
}

anotherFunction(3,{connection:"yes",username:"Jit",password:"234"})

interface Quiz{
    name:String,
    type:String
}

interface Course{
    name:String,
    number:String,
    subject:String
}
class sellable<T>{
    public cart: T[]=[]
    addToCart(product:T){
        this.cart.push(product)
    }
}







}}





