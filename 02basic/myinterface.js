{
    {
        var Jit = { dbId: 112, email: "jg@gh.com", userId: 2211,
            startTrial: function () {
                return "trial started";
            },
            getCoupon: function (couponname) {
                return 10;
            }
        };
        Jit.email = "Jg@Gh.com";
        //Jit.dbId=122  //db id is  a readonly  
    }
}
