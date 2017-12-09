"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var material_ui_1 = require("material-ui");
var svg_icons_1 = require("material-ui/svg-icons");
var react_router_dom_1 = require("react-router-dom");
var routes = require("../Routes");
var axios_1 = require("axios");
var AddVideo = (function (_super) {
    __extends(AddVideo, _super);
    function AddVideo(props) {
        var _this = _super.call(this, props) || this;
        _this.handleCheck = function (event, isInputChecked) { return _this.setState({ IsAnonymous: isInputChecked }); };
        _this.handleLink = function (event, newValue) { return _this.setState({ Link: newValue }); };
        _this.handleName = function (event, newValue) { return _this.setState({ Name: newValue }); };
        _this.handleAdding = function () {
            var entry = {
                Link: _this.state.Link,
                Uploader: _this.state.IsAnonymous ? "Anonim" : _this.state.Name
            };
            axios_1.default.put("http://localhost:57527/api/videos", entry);
        };
        _this.state = {
            Link: "",
            Name: "",
            IsAnonymous: false,
        };
        return _this;
    }
    AddVideo.prototype.render = function () {
        return (React.createElement("div", { style: { display: "flex", justifyContent: "center", marginTop: "200px" } },
            React.createElement(material_ui_1.Card, { style: { width: "800px" } },
                React.createElement(material_ui_1.CardHeader, { title: "Dodaj nową piosenkę" }),
                React.createElement(material_ui_1.CardText, null,
                    React.createElement("div", { style: { display: "flex", justifyContent: "space-around", flexFlow: "column", marginLeft: "30px" } },
                        React.createElement(material_ui_1.TextField, { hintText: "Link YouTube", floatingLabelText: "Link YouTube", onChange: this.handleLink }),
                        React.createElement(material_ui_1.TextField, { hintText: "Kto wrzuca", floatingLabelText: "Kto wrzuca", onChange: this.handleName, disabled: this.state.IsAnonymous }),
                        React.createElement(material_ui_1.Checkbox, { label: "Wstydzę się tej piosenki, więc nie chcę podawać imienia ...", style: { marginTop: "10px" }, onCheck: this.handleCheck }),
                        React.createElement(react_router_dom_1.Link, { to: routes.Videos, style: { marginTop: "20px", marginRight: "20px", alignSelf: "flex-end" } },
                            React.createElement(material_ui_1.FloatingActionButton, { backgroundColor: "#64DD17", onClick: this.handleAdding },
                                React.createElement(svg_icons_1.ContentAdd, null))))))));
    };
    return AddVideo;
}(React.Component));
exports.AddVideo = AddVideo;
//# sourceMappingURL=AddVideo.js.map