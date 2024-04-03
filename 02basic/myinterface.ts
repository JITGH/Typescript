{{

interface User{
    readonly dbId:number
    email:string;
    userId:number;
    googleId?:string
    // startTrial: ()=>string
    startTrial(): string

    getCoupon(couponname:string):number
}

interface User{
    githubToken: string
}

interface Admin extends User{
role: "Admin"|"ta"|"learner"
}





const Jit:Admin={dbId:112,email:"jg@gh.com",userId:2211,
githubToken:"github",role:"Admin",
startTrial:()=>{
    return "trial started"
},
getCoupon:(couponname:"Joy")=>{
    return 10
}

}

Jit.email="Jg@Gh.com"
//Jit.dbId=122  //db id is  a readonly  




}}