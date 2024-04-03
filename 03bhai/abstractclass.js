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
        var TakePhoto = /** @class */ (function () {
            function TakePhoto(cameraMode, filter) {
                this.cameraMode = cameraMode;
                this.filter = filter;
            }
            TakePhoto.prototype.getreeltime = function () {
                return 8;
            };
            return TakePhoto;
        }());
        var Instagram = /** @class */ (function (_super) {
            __extends(Instagram, _super);
            // getspia(): void {
            //     throw new Error("Method not implemented.");
            // }
            function Instagram(cameraMode, filter, brust) {
                var _this = _super.call(this, cameraMode, filter) || this;
                _this.cameraMode = cameraMode;
                _this.filter = filter;
                _this.brust = brust;
                return _this;
            }
            Instagram.prototype.getspia = function () {
                throw new Error("Method not implemented.");
            };
            Instagram.prototype.getsepia = function () {
                console.log("sepia");
            };
            return Instagram;
        }(TakePhoto));
        var Jit = new Instagram("Night", "Test", 3);
        Jit.getreeltime();
    }
}
