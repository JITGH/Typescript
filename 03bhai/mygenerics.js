{
    {
        var score = [];
        var names = [];
        function identityOne(val) {
            return val;
        }
        function identityTwo(val) {
            return val;
        }
        function identityThree(val) {
            return val;
        }
        // identityThree(true)
        function identityfour(val) {
            return val;
        }
        identityfour({ brand: "GYM", type: 3 });
        function getSearchProducts(products) {
            //do some database opearations
            var myIndex = 3;
            return products[myIndex];
        }
        var getMoreSearchProduct = function (product) {
            //do some database opearations
            var myIndex = 4;
            return product[myIndex];
        };
        function anotherFunction(valOne, valTwo) {
            return {
                valOne: valOne,
                valTwo: valTwo
            };
        }
        anotherFunction(3, { connection: "yes", username: "Jit", password: "234" });












    }
}
