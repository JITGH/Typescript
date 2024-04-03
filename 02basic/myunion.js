{
    {
        var score = 33;
        score = 44;
        score = "55";
        console.log(score);
        var jit = { name: "Jit", id: 1234 };
        jit = { name: "jg", id: 1234 };
        // function getDbId(id:number | string){
        //     console.log(`DB ID is :${id}`);
        // }
        getDbId(3);
        getDbId("3");
        function getDbId(id) {
            if (typeof id === "string") {
                id.toLowerCase();
            }
            if (typeof id === "number") {
                id = id + 2;
            }
        }
        //array
        var data = [1, 2, 3, 4];
        var data1 = ["1", "2", "3"];
        var data2 = ["1", "2", 3];
        // let pi:3.14=3.14
        // pi=3.145
        var seatAllotment = void 0;
        seatAllotment = "aisle";
        // seatAllotment="crew"
    }
}
