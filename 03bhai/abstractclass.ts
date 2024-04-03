{{

 abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}
    abstract getspia():void;

    getreeltime():number{
        return 8
        }
        

}


class Instagram extends TakePhoto{
getspia(): void {
    throw new Error("Method not implemented.");
}
// getspia(): void {
//     throw new Error("Method not implemented.");
// }
constructor(
    public cameraMode:string,
    public filter:string,
    public brust:number
){
    super(cameraMode,filter)
}
getsepia():void{
    console.log("sepia");    
}



}


const Jit= new Instagram("Night","Test",3)
Jit.getreeltime()

}}









