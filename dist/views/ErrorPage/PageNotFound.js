"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
require("./PageNotFound.less");
var PageNotFound = (function (_super) {
    __extends(PageNotFound, _super);
    function PageNotFound(props) {
        return _super.call(this, props) || this;
    }
    PageNotFound.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: "text-center" },
                React.createElement("div", { className: "col-md-12 characters" }),
                React.createElement("div", { className: "col-md-12" },
                    React.createElement("h1", null, "Page not found"),
                    React.createElement("p", null, "Sorry, an error has occured, the page you are trying to visit is not available."),
                    React.createElement("p", null, "It could be a broken or dead link!"),
                    React.createElement("p", null,
                        React.createElement(react_router_1.Link, { to: "/", className: "btn btn-primary" },
                            React.createElement("i", { className: "fa fa-lg fa-home" }),
                            " Go back to Home Page")),
                    React.createElement("hr", null),
                    React.createElement("a", { href: "//github.com/hegdeashwin/alphonso", target: "_blank", className: "btn btn-link btn-sm" }, "Github Home Page"),
                    React.createElement("a", { href: "//github.com/hegdeashwin/alphonso/releases", target: "_blank", className: "btn btn-link btn-sm" }, "Release Page"),
                    React.createElement("a", { href: "//github.com/hegdeashwin/alphonso/milestones", target: "_blank", className: "btn btn-link btn-sm" }, "Milestones"),
                    React.createElement("a", { href: "//github.com/hegdeashwin/alphonso/issues", target: "_blank", className: "btn btn-link btn-sm" }, "Report Issues"),
                    React.createElement("a", { href: "//github.com/hegdeashwin/alphonso/pulls", target: "_blank", className: "btn btn-link btn-sm" }, "Open Pull Requests"),
                    React.createElement("a", { href: "//github.com/hegdeashwin/alphonso", target: "_blank", className: "btn btn-link btn-sm" }, "About Alphonso")))));
    };
    return PageNotFound;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PageNotFound;
//# sourceMappingURL=PageNotFound.js.map