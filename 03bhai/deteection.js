{
    {
        function detectType(val) {
            if (typeof val === "string") {
                return val.toLowerCase();
            }
            return val + 3;
        }
        function provideId(id) {
            if (!id) {
                console.log("Please provide Id");
                return;
            }
            id.toLowerCase();
        }
        function printAll(strs) {
            // !!!!!!!!!!!!!!!!
            //  DON'T DO THIS!
            //   KEEP READING
            // !!!!!!!!!!!!!!!!
            if (strs) {
                if (typeof strs === "object") {
                    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                        var s = strs_1[_i];
                        console.log(s);
                    }
                }
                else if (typeof strs === "string") {
                    console.log(strs);
                }
            }
        }
        function logValue(x) {
            if (x instanceof Date) {
                console.log(x.toUTCString());
            }
            else {
                console.log(x.toUpperCase());
            }
        }
        function isfish(pet) {
            return pet.swim !== undefined;
        }
        function getfood(pet) {
            if (isfish(pet)) {
                pet;
                return "fish food";
            }
            else {
                pet;
                return "bird food";
            }
        }
    }
}
