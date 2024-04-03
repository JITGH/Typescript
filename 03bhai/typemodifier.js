var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    {
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
        var User = /** @class */ (function () {
            function User(email, name) {
                this.email = email;
                this.name = name;
                this._courseCount = 1;
                this.city = "Kolkata";
            }
            User.prototype.deleteToken = function () {
                console.log("Token deleted");
            };
            Object.defineProperty(User.prototype, "getAppleEmail", {
                get: function () {
                    return "apple".concat(this.email);
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(User.prototype, "courseCount", {
                get: function () {
                    return this._courseCount;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(User.prototype, "couseCount", {
                set: function (courseNum) {
                    if (courseNum <= 1) {
                        throw new Error("courseCount should be more than one");
                    }
                    this._courseCount = courseNum;
                },
                enumerable: false,
                configurable: true
            });
            return User;
        }());
        var Jit = new User("Jg@Gh.com", "Jit");
        //Jit.deleteToken() // only access within the class
        var subuser = /** @class */ (function (_super) {
            __extends(subuser, _super);
            function subuser() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.isFamily = true;
                return _this;
            }
            subuser.prototype.changeCourseCount = function () {
                this._courseCount = 4;
            };
            return subuser;
        }(User));
    }
}
