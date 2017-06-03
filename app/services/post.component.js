"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var post_service_1 = require("./post.service");
var PostComponent = (function () {
    function PostComponent(_postService) {
        var _this = this;
        this._postService = _postService;
        this._postService.getPosts().subscribe(function (response) {
            _this.posts = response;
        });
    }
    return PostComponent;
}());
PostComponent = __decorate([
    core_1.Component({
        selector: 'posts',
        template: "\n\t         <div class=\"container\">\n\t         <h1>My Blog</h1>\n\t         <br>\n\t         <div>\n                <label>Title:</label>\n                <input type=\"text\"[(ngModel)]=\"title\"/><br>\n                <label>Body:</label>\n                <input type=\"text\" [(ngModel)]=\"body\"/><br>\n                <input class=\"btn btn-primary\" type=\"button\" (click)=\"addNewPost()\" value=\"Add Post\"/>\n\t         </div>\n\t         <ul *ngFor=\"let post of posts\">\n\t          <li>{{post.title}}</li>\n\t          <li>{{post.body}}</li>\n\t         </ul>\n\t         </div>\n\n\t          "
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=post.component.js.map