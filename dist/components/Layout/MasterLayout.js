"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Dashboard_1 = require("../../views/Dashboard/Dashboard");
var MasterLayout = (function (_super) {
    __extends(MasterLayout, _super);
    function MasterLayout(props) {
        return _super.call(this, props) || this;
    }
    MasterLayout.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement(Dashboard_1.default, null)));
    };
    return MasterLayout;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MasterLayout;
;
//# sourceMappingURL=MasterLayout.js.map