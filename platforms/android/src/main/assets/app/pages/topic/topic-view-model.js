"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var moment = require("moment");
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
var config_1 = require("../../config");
var TopicViewModel = /** @class */ (function (_super) {
    __extends(TopicViewModel, _super);
    function TopicViewModel(TopicPage, topicId, topicTitle) {
        var _this = _super.call(this) || this;
        _this.TopicPage = TopicPage;
        _this.topicId = topicId;
        _this.topicTitle = topicTitle;
        _this.title = "";
        _this.topicInfo = {};
        // @ObservableProperty() public topicReplies:ObservableArray<any> = new ObservableArray([]);
        _this.topicReplies = [];
        _this.title = topicTitle;
        fetch(config_1.config.url + "t/topic/" + topicId + ".json").then(function (res) { return res.json(); })
            .then(function (res) {
            var topicView = TopicPage.getViewById("topicView");
            res.post_stream.posts = res.post_stream.posts.map(function (post) {
                post.created_at = moment(post.created_at).locale("ar").fromNow();
                post.cooked = "<style>a {\n                    background: #00ff9508;\n                    display: block;\n                    margin: 5px;\n                    color: #0080d0;\n                    padding: 7px;\n                    border-radius: 5px;\n                    border: 3px solid #ffffffad;\n                    font-weight: bold;\n                    text-decoration: none;\n                    text-align: center;\n                }\n                * {\n                    direction: rtl;\n                    font-size: 100%;\n                }\n                img {\n                    width: 100%;\n                    min-width: 100%;\n                    max-width: 100%;\n                    height: auto;\n                }\n                code,pre {\n                    word-wrap: break-word;\n                    direction: ltr !important;\n                    text-align: left !important;\n                }\n                pre code {\n                    display: block;\n                    padding: 5px 10px;\n                    color: #222;\n                    background: #f9f9f9;\n                    max-height: 500px;\n                }\n                img.emoji {\n                    width: 1em;\n                    min-width: 1em;\n                    max-width: 1em;\n                    margin-left: 2px;\n                    margin-right: 2px;\n                }\n                article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {\n                    display: block;\n                }\n                aside.onebox {\n                    border: 5px solid #e9e9e9;\n                    padding: 12px 12px 12px 25px;\n                    font-size: 1em;\n                }\n                aside.onebox .onebox-body {\n                    clear: both;\n                }\n                aside.onebox .onebox-body [style*=\"--aspect-ratio\"] {\n                    position: relative;\n                }\n                .badge-notification.clicks {\n                    font-weight: normal;\n                    background-color: #e9e9e9;\n                    top: -1px;\n                    color: #919191;\n                    position: relative;\n                    margin-right: 2px;\n                    border: none;\n                }\n                aside.onebox .onebox-body h3, aside.onebox .onebox-body h4 {\n                    font-size: 1.17em;\n                    margin: 0 0 10px 0;\n                }\n                .quote .avatar{\n                    height: 1.25em !important;\n                    width: 1.25em !important;\n                    min-height: 0%;\n                    min-width: 0%;\n                    max-height: 100%;\n                    max-width: 100%;\n                    border-radius: 50%;\n                }\n                aside.quote .title {\n                    border-right: 5px solid #e9e9e9;\n                    background-color: #f9f9f9;\n                    color: #646464;\n                    padding: 12px 12px 1px 12px;\n                }\n                blockquote {\n                    margin-right: 0;\n                    margin-left: 0;\n                    padding: 12px;\n                    border-right: 5px solid #e9e9e9;\n                    background-color: #f9f9f9;\n                    clear: both;\n                }\n                aside.quote blockquote {\n                    margin-top: 0;\n                }</style>".trim()
                    + post.cooked;
                if (post.avatar_template) {
                    if (post.avatar_template.indexOf('http') == -1) {
                        post.avatar_template = (config_1.config.url + "." + post.avatar_template.replace("{size}", "80")).replace('./', '');
                    }
                }
                return post;
            });
            var topicReplies = TopicPage.getViewById('topicReplies');
            var replies = JSON.parse(JSON.stringify(res.post_stream.posts));
            replies.shift();
            _this.topicInfo = res.post_stream.posts[0];
            _this.topicReplies = replies;
            topicReplies.refresh();
        });
        return _this;
    }
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], TopicViewModel.prototype, "title", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Object)
    ], TopicViewModel.prototype, "topicInfo", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Object)
    ], TopicViewModel.prototype, "topicReplies", void 0);
    return TopicViewModel;
}(observable_1.Observable));
exports.TopicViewModel = TopicViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvcGljLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFNN0MsK0JBQWtDO0FBQ2xDLDRGQUFnRjtBQUNoRix1Q0FBc0M7QUFFdEM7SUFBb0Msa0NBQVU7SUFLMUMsd0JBQW1CLFNBQWMsRUFBUyxPQUFjLEVBQVMsVUFBaUI7UUFBbEYsWUFDSSxpQkFBTyxTQTJIVjtRQTVIa0IsZUFBUyxHQUFULFNBQVMsQ0FBSztRQUFTLGFBQU8sR0FBUCxPQUFPLENBQU87UUFBUyxnQkFBVSxHQUFWLFVBQVUsQ0FBTztRQUpyRCxXQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLGVBQVMsR0FBVSxFQUFFLENBQUM7UUFDbkQsNEZBQTRGO1FBQy9ELGtCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRzNDLEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLEtBQUssQ0FBSSxlQUFNLENBQUMsR0FBRyxnQkFBVyxPQUFPLFVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDcEUsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLElBQUksU0FBUyxHQUFXLFNBQVMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0QsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtnQkFFbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFakUsSUFBSSxDQUFDLE1BQU0sR0FBRyxvNkdBNkZKLENBQUMsSUFBSSxFQUFFO3NCQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUVWLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQSxDQUFDO29CQUNyQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxlQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM3RyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksWUFBWSxHQUFZLFNBQVMsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbEUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFaEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztZQUU1QixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFM0IsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQWhJcUI7UUFBckIsa0RBQWtCLEVBQUU7O2lEQUEwQjtJQUN6QjtRQUFyQixrREFBa0IsRUFBRTs7cURBQThCO0lBRTdCO1FBQXJCLGtEQUFrQixFQUFFOzt3REFBMEI7SUE4SG5ELHFCQUFDO0NBQUEsQUFsSUQsQ0FBb0MsdUJBQVUsR0FrSTdDO0FBbElZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gJ3VpL3dlYi12aWV3JztcbmltcG9ydCB7IFJlcGVhdGVyIH0gZnJvbSAndWkvcmVwZWF0ZXInO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWdcIjtcblxuZXhwb3J0IGNsYXNzIFRvcGljVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHB1YmxpYyB0aXRsZTpzdHJpbmcgPSBcIlwiO1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBwdWJsaWMgdG9waWNJbmZvOm9iamVjdCA9IHt9O1xuICAgIC8vIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBwdWJsaWMgdG9waWNSZXBsaWVzOk9ic2VydmFibGVBcnJheTxhbnk+ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHB1YmxpYyB0b3BpY1JlcGxpZXMgPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgVG9waWNQYWdlOlBhZ2UsIHB1YmxpYyB0b3BpY0lkOm51bWJlciwgcHVibGljIHRvcGljVGl0bGU6c3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0b3BpY1RpdGxlO1xuICAgICAgICBmZXRjaChgJHtjb25maWcudXJsfXQvdG9waWMvJHt0b3BpY0lkfS5qc29uYCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgbGV0IHRvcGljVmlldzpXZWJWaWV3ID0gVG9waWNQYWdlLmdldFZpZXdCeUlkKFwidG9waWNWaWV3XCIpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVzLnBvc3Rfc3RyZWFtLnBvc3RzID0gcmVzLnBvc3Rfc3RyZWFtLnBvc3RzLm1hcChwb3N0ID0+e1xuXG4gICAgICAgICAgICAgICAgcG9zdC5jcmVhdGVkX2F0ID0gbW9tZW50KHBvc3QuY3JlYXRlZF9hdCkubG9jYWxlKFwiYXJcIikuZnJvbU5vdygpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHBvc3QuY29va2VkID0gYDxzdHlsZT5hIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwZmY5NTA4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA4MGQwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZmZmZmFkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29kZSxwcmUge1xuICAgICAgICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogbHRyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJlIGNvZGUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1nLmVtb2ppIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxZW07XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMWVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbmF2LCBzZWN0aW9uLCBzdW1tYXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFzaWRlLm9uZWJveCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNlOWU5ZTk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTJweCAxMnB4IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhc2lkZS5vbmVib3ggLm9uZWJveC1ib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFzaWRlLm9uZWJveCAub25lYm94LWJvZHkgW3N0eWxlKj1cIi0tYXNwZWN0LXJhdGlvXCJdIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYmFkZ2Utbm90aWZpY2F0aW9uLmNsaWNrcyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTFweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5MTkxOTE7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXNpZGUub25lYm94IC5vbmVib3gtYm9keSBoMywgYXNpZGUub25lYm94IC5vbmVib3gtYm9keSBoNCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xN2VtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5xdW90ZSAuYXZhdGFye1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMjVlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMS4yNWVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDAlO1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXNpZGUucXVvdGUgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgI2U5ZTllOTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NDY0NjQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMTJweCAxcHggMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmxvY2txdW90ZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkICNlOWU5ZTk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhc2lkZS5xdW90ZSBibG9ja3F1b3RlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICB9PC9zdHlsZT5gLnRyaW0oKVxuICAgICAgICAgICAgKyBwb3N0LmNvb2tlZDtcblxuICAgICAgICAgICAgICAgIGlmKHBvc3QuYXZhdGFyX3RlbXBsYXRlKXtcbiAgICAgICAgICAgICAgICAgICAgaWYocG9zdC5hdmF0YXJfdGVtcGxhdGUuaW5kZXhPZignaHR0cCcpID09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuYXZhdGFyX3RlbXBsYXRlID0gKGNvbmZpZy51cmwgKyBcIi5cIiArIHBvc3QuYXZhdGFyX3RlbXBsYXRlLnJlcGxhY2UoXCJ7c2l6ZX1cIixcIjgwXCIpKS5yZXBsYWNlKCcuLycsJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwb3N0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCB0b3BpY1JlcGxpZXM6UmVwZWF0ZXIgPSBUb3BpY1BhZ2UuZ2V0Vmlld0J5SWQoJ3RvcGljUmVwbGllcycpO1xuICAgICAgICAgICAgbGV0IHJlcGxpZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlcy5wb3N0X3N0cmVhbS5wb3N0cykpO1xuICAgICAgICAgICAgcmVwbGllcy5zaGlmdCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnRvcGljSW5mbyA9IHJlcy5wb3N0X3N0cmVhbS5wb3N0c1swXTtcbiAgICAgICAgICAgIHRoaXMudG9waWNSZXBsaWVzID0gcmVwbGllcztcblxuICAgICAgICAgICAgdG9waWNSZXBsaWVzLnJlZnJlc2goKTtcblxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=