{
    {
        function addtwo(num) {
            //num.toUpperCase() //error 
            return num + 2;
            // return "hello";
        }
        function getupper(val) {
            return val.toUpperCase();
        }
        function signupuser(name, email, ispaid) {
        }
        var loginuser = function (name, email, ispaid) {
            if (ispaid === void 0) { ispaid = true; }
        };
        var myvalue = addtwo(5);
        getupper("d");
        signupuser("Jit", "jit@erty.com", false);
        loginuser("h", "h@j.com");
        // function getValue(myval:number){  //handle this 
        //     if(myval>5){
        //         return true;
        //     }
        //     return "200 OK"
        // }
        var gethello = function (s) {
            return "";
        };
        var heros = ["thor", "spiderman", "Batman"];
        //const heros=[1,2,3]
        heros.map(function (hero) {
            return "hero is ".concat(hero);
        });
        function consoleError(errmsg) {
            console.log(errmsg);
        }
    }
}
