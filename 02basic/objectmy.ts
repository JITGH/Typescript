{{
//     const User={
//     name:"Jit",
//     email:"Jit@his.com",
//     isActive:true
// }

// function createUser({name: string, isPaid: boolean}){}
// let newUser={name:"Jit",email:"Jit@his.com",ispaid:false}
// //createUser({name: "Jit",isPaid: false})
// createUser(newUser)

// function creatCourse():{name: string, price: number}{
//     return{name:"reactJs", price:399}
// }


// type User={
//     name: string;
//     email:string;
//     isActive: boolean
// }

// function createUser(user:User):User{
// return {name:"",email:"",isActive:true}
// }

// //createUser({name:"",email:"",isActive:true})


type User={

    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean
    credcardDetails?:number
}

let myuser:User={
    _id:"1234",
    name:"jit",
    email:"jg@jg.com",
    isActive:false
}

type cardNumber={
    cardNumber: string
}
type cardDate={
    carDate:string
}

type cardDetails=cardNumber & cardDate &{
    cvv:number
}

myuser.email="jg@gh.com"
// myuser._id="2345"









}
}``

// export {}