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
var react_youtube_1 = require("react-youtube");
var axios_1 = require("axios");
var Videos = (function (_super) {
    __extends(Videos, _super);
    function Videos(props) {
        var _this = _super.call(this, props) || this;
        _this.opts = {
            height: "245",
            width: "400",
        };
        _this.fetch = function () {
            axios_1.default.get("http://localhost:57527/api/videos")
                .then(_this.updateState);
        };
        _this.updateState = function (response) {
            console.log(response);
            _this.setState({ songs: response.data });
        };
        _this.state = {
            songs: []
        };
        return _this;
    }
    Videos.prototype.componentDidMount = function () {
        this.fetch();
    };
    Videos.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { style: { display: "flex", flexDirection: "column", width: "400px", margin: "auto", marginTop: "20px" } },
            React.createElement(react_router_dom_1.Link, { to: routes.AddVideo, style: { wdith: "100%" } },
                React.createElement(material_ui_1.RaisedButton, { label: "Dodaj swoją piosenkę", labelPosition: "before", backgroundColor: "#64DD17", labelColor: "#ffffff", style: { width: "100%", marginBottom: "15px" }, icon: React.createElement(svg_icons_1.ContentAddCircle, null) })),
            React.createElement(material_ui_1.RaisedButton, { label: "Najnowsze piosenki", labelPosition: "before", backgroundColor: "#29B6F6", labelColor: "#ffffff", style: { width: "100%", marginBottom: "15px" }, icon: React.createElement(svg_icons_1.AvNewReleases, null) }),
            React.createElement(material_ui_1.RaisedButton, { label: "Najbardziej lubiane piosenki", labelPosition: "before", backgroundColor: "#D32F2F", labelColor: "#ffffff", icon: React.createElement(svg_icons_1.ActionFavorite, null) }),
            React.createElement("div", { style: { display: "flex", flexDirection: "column", width: "400px", marginTop: "20px" } }, this.state.songs.map(function (song) {
                return React.createElement("div", { style: { marginBottom: "20px" } },
                    React.createElement(react_youtube_1.default, { videoId: song.link, opts: _this.opts }),
                    song.uploader);
            }))));
    };
    return Videos;
}(React.Component));
exports.Videos = Videos;
//# sourceMappingURL=Videos.js.map