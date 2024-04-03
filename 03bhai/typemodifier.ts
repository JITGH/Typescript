{{

// class User{
//     public email: string;
//     name:string;
//     private readonly city: string ="Kolkata"
//     constructor( email: string, name:string){
//         this.email=email;
//         this.name=name
//         this.city=this.city
//     }
// }

//const Jit=new User("Jg@gh.com","JIT")

//Jit.city="Hyderabad" //Cannot assign to 'city' because it is a read-only propert

//Jit.city

class User{

     protected _courseCount=1
    
     readonly city: string ="Kolkata"
    constructor(
         public email: string, 
         public name:string,
         //private UserId:string
         ){ 
       
    }

    private deleteToken(){
     console.log("Token deleted");
     
    }


get getAppleEmail():string{
return `apple${this.email}`
}

get courseCount():number{
     return this._courseCount
}
 
set couseCount(courseNum){
if(courseNum<=1){
     throw new Error("courseCount should be more than one")
     
}
this._courseCount=courseNum
}

}


const Jit= new User("Jg@Gh.com","Jit")

//Jit.deleteToken() // only access within the class


class subuser extends User{
     isFamily:boolean=true
     changeCourseCount(){
          this._courseCount=4
     }

}
















}}