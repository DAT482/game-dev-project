
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Game/Scripts/i18n.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '52606c36oxHSaK0FCDjyEkf', 'i18n');
// Game/Scripts/i18n.ts

Object.defineProperty(exports, "__esModule", { value: true });
exports.getLang = exports.t = exports.setLang = exports.LANGS = void 0;
exports.LANGS = {
    en: {
        skin: "Skins",
        more: "Coming soon",
        home_title: "Welcome to the game!",
        play_button: "Play Now",
        win_popup: "Congratulations! You won!",
        lose_popup: "Sorry! You lost!",
        language_button: "English",
        rank_button: "Rankings",
        yes_button: "Yes",
        no_button: "No",
        timeout_message: "Time's up! Do you want to play again?",
        step: "Steps",
        time: "Time",
        level: "Level",
        help: "Help",
        challenge: "Challenge",
        continue: "Continue",
        luckydraw: "Lucky Draw",
        game_status: "Game Over",
        introduce: "Connect 2 identical animals",
        close_introduce: "Tap anywhere to close"
    },
    vi: {
        skin: "Trang phục",
        more: "Sắp ra mắt",
        home_title: "Chào mừng đến với trò chơi!",
        play_button: "Chơi ngay",
        win_popup: "Chúc mừng! Bạn đã thắng!",
        lose_popup: "Tiếc quá! Bạn đã thua!",
        language_button: "tiếng Việt",
        rank_button: "Xếp hạng",
        yes_button: "Có",
        no_button: "Không",
        game_status: "Thua cuộc",
        timeout_message: "Hết giờ! Bạn có muốn chơi lại không?",
        step: "Bước",
        time: "Thời gian",
        level: "Cấp độ",
        help: "Trợ giúp",
        challenge: "Thử thách",
        continue: "Tiếp tục",
        luckydraw: "Vòng quay may mắn",
        introduce: "Kết nối 2 con vật giống nhau",
        close_introduce: "Nhấn vào bất kỳ chỗ nào để đóng"
    }
};
var currentLang = localStorage.getItem("lang") || "en";
function setLang(lang) {
    if (exports.LANGS[lang]) {
        currentLang = lang;
        localStorage.setItem("lang", lang);
    }
}
exports.setLang = setLang;
function t(key) {
    return exports.LANGS[currentLang][key] || key;
}
exports.t = t;
function getLang() {
    return currentLang;
}
exports.getLang = getLang;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaTE4bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVhLFFBQUEsS0FBSyxHQUFHO0lBQ2pCLEVBQUUsRUFBRTtRQUNBLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLGFBQWE7UUFDbkIsVUFBVSxFQUFFLHNCQUFzQjtRQUNsQyxXQUFXLEVBQUUsVUFBVTtRQUN2QixTQUFTLEVBQUUsMkJBQTJCO1FBQ3RDLFVBQVUsRUFBRSxrQkFBa0I7UUFDOUIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsV0FBVyxFQUFFLFVBQVU7UUFDdkIsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLElBQUk7UUFDZixlQUFlLEVBQUUsdUNBQXVDO1FBQ3hELElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsT0FBTztRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLFdBQVc7UUFDdEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsU0FBUyxFQUFFLFlBQVk7UUFDdkIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsU0FBUyxFQUFFLDZCQUE2QjtRQUN4QyxlQUFlLEVBQUUsdUJBQXVCO0tBQzNDO0lBQ0QsRUFBRSxFQUFFO1FBQ0EsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsVUFBVSxFQUFFLDZCQUE2QjtRQUN6QyxXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsMEJBQTBCO1FBQ3JDLFVBQVUsRUFBRSx3QkFBd0I7UUFDcEMsZUFBZSxFQUFFLFlBQVk7UUFDN0IsV0FBVyxFQUFFLFVBQVU7UUFDdkIsVUFBVSxFQUFFLElBQUk7UUFDaEIsU0FBUyxFQUFFLE9BQU87UUFDbEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsZUFBZSxFQUFFLHNDQUFzQztRQUN2RCxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxXQUFXO1FBQ2pCLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLFVBQVU7UUFDaEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsU0FBUyxFQUFFLG1CQUFtQjtRQUM5QixTQUFTLEVBQUUsOEJBQThCO1FBQ3pDLGVBQWUsRUFBRSxpQ0FBaUM7S0FJckQ7Q0FDSixDQUFDO0FBRUYsSUFBSSxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDdkQsU0FBZ0IsT0FBTyxDQUFDLElBQVk7SUFDaEMsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDYixXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3RDO0FBQ0wsQ0FBQztBQUxELDBCQUtDO0FBQ0QsU0FBZ0IsQ0FBQyxDQUFDLEdBQVc7SUFDekIsT0FBTyxhQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDO0FBQzFDLENBQUM7QUFGRCxjQUVDO0FBQ0QsU0FBZ0IsT0FBTztJQUNuQixPQUFPLFdBQVcsQ0FBQztBQUN2QixDQUFDO0FBRkQsMEJBRUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aW1lIH0gZnJvbSBcImNvbnNvbGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMQU5HUyA9IHtcclxuICAgIGVuOiB7XHJcbiAgICAgICAgc2tpbjogXCJTa2luc1wiLFxyXG4gICAgICAgIG1vcmU6IFwiQ29taW5nIHNvb25cIixcclxuICAgICAgICBob21lX3RpdGxlOiBcIldlbGNvbWUgdG8gdGhlIGdhbWUhXCIsXHJcbiAgICAgICAgcGxheV9idXR0b246IFwiUGxheSBOb3dcIixcclxuICAgICAgICB3aW5fcG9wdXA6IFwiQ29uZ3JhdHVsYXRpb25zISBZb3Ugd29uIVwiLFxyXG4gICAgICAgIGxvc2VfcG9wdXA6IFwiU29ycnkhIFlvdSBsb3N0IVwiLFxyXG4gICAgICAgIGxhbmd1YWdlX2J1dHRvbjogXCJFbmdsaXNoXCIsXHJcbiAgICAgICAgcmFua19idXR0b246IFwiUmFua2luZ3NcIixcclxuICAgICAgICB5ZXNfYnV0dG9uOiBcIlllc1wiLFxyXG4gICAgICAgIG5vX2J1dHRvbjogXCJOb1wiLFxyXG4gICAgICAgIHRpbWVvdXRfbWVzc2FnZTogXCJUaW1lJ3MgdXAhIERvIHlvdSB3YW50IHRvIHBsYXkgYWdhaW4/XCIsXHJcbiAgICAgICAgc3RlcDogXCJTdGVwc1wiLFxyXG4gICAgICAgIHRpbWU6IFwiVGltZVwiLFxyXG4gICAgICAgIGxldmVsOiBcIkxldmVsXCIsXHJcbiAgICAgICAgaGVscDogXCJIZWxwXCIsXHJcbiAgICAgICAgY2hhbGxlbmdlOiBcIkNoYWxsZW5nZVwiLFxyXG4gICAgICAgIGNvbnRpbnVlOiBcIkNvbnRpbnVlXCIsXHJcbiAgICAgICAgbHVja3lkcmF3OiBcIkx1Y2t5IERyYXdcIixcclxuICAgICAgICBnYW1lX3N0YXR1czogXCJHYW1lIE92ZXJcIixcclxuICAgICAgICBpbnRyb2R1Y2U6IFwiQ29ubmVjdCAyIGlkZW50aWNhbCBhbmltYWxzXCIsXHJcbiAgICAgICAgY2xvc2VfaW50cm9kdWNlOiBcIlRhcCBhbnl3aGVyZSB0byBjbG9zZVwiXHJcbiAgICB9LFxyXG4gICAgdmk6IHtcclxuICAgICAgICBza2luOiBcIlRyYW5nIHBo4bulY1wiLFxyXG4gICAgICAgIG1vcmU6IFwiU+G6r3AgcmEgbeG6r3RcIixcclxuICAgICAgICBob21lX3RpdGxlOiBcIkNow6BvIG3hu6tuZyDEkeG6v24gduG7m2kgdHLDsiBjaMahaSFcIixcclxuICAgICAgICBwbGF5X2J1dHRvbjogXCJDaMahaSBuZ2F5XCIsXHJcbiAgICAgICAgd2luX3BvcHVwOiBcIkNow7pjIG3hu6tuZyEgQuG6oW4gxJHDoyB0aOG6r25nIVwiLFxyXG4gICAgICAgIGxvc2VfcG9wdXA6IFwiVGnhur9jIHF1w6EhIELhuqFuIMSRw6MgdGh1YSFcIixcclxuICAgICAgICBsYW5ndWFnZV9idXR0b246IFwidGnhur9uZyBWaeG7h3RcIixcclxuICAgICAgICByYW5rX2J1dHRvbjogXCJY4bq/cCBo4bqhbmdcIixcclxuICAgICAgICB5ZXNfYnV0dG9uOiBcIkPDs1wiLFxyXG4gICAgICAgIG5vX2J1dHRvbjogXCJLaMO0bmdcIixcclxuICAgICAgICBnYW1lX3N0YXR1czogXCJUaHVhIGN14buZY1wiLFxyXG4gICAgICAgIHRpbWVvdXRfbWVzc2FnZTogXCJI4bq/dCBnaeG7nSEgQuG6oW4gY8OzIG114buRbiBjaMahaSBs4bqhaSBraMO0bmc/XCIsXHJcbiAgICAgICAgc3RlcDogXCJCxrDhu5tjXCIsXHJcbiAgICAgICAgdGltZTogXCJUaOG7nWkgZ2lhblwiLFxyXG4gICAgICAgIGxldmVsOiBcIkPhuqVwIMSR4buZXCIsXHJcbiAgICAgICAgaGVscDogXCJUcuG7oyBnacO6cFwiLFxyXG4gICAgICAgIGNoYWxsZW5nZTogXCJUaOG7rSB0aMOhY2hcIixcclxuICAgICAgICBjb250aW51ZTogXCJUaeG6v3AgdOG7pWNcIixcclxuICAgICAgICBsdWNreWRyYXc6IFwiVsOybmcgcXVheSBtYXkgbeG6r25cIixcclxuICAgICAgICBpbnRyb2R1Y2U6IFwiS+G6v3QgbuG7kWkgMiBjb24gduG6rXQgZ2nhu5FuZyBuaGF1XCIsXHJcbiAgICAgICAgY2xvc2VfaW50cm9kdWNlOiBcIk5o4bqlbiB2w6BvIGLhuqV0IGvhu7MgY2jhu5cgbsOgbyDEkeG7gyDEkcOzbmdcIlxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn07XHJcblxyXG5sZXQgY3VycmVudExhbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxhbmdcIikgfHwgXCJlblwiO1xyXG5leHBvcnQgZnVuY3Rpb24gc2V0TGFuZyhsYW5nOiBzdHJpbmcpIHtcclxuICAgIGlmIChMQU5HU1tsYW5nXSkge1xyXG4gICAgICAgIGN1cnJlbnRMYW5nID0gbGFuZztcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxhbmdcIiwgbGFuZyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIExBTkdTW2N1cnJlbnRMYW5nXVtrZXldIHx8IGtleTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGFuZygpIHtcclxuICAgIHJldHVybiBjdXJyZW50TGFuZztcclxufSJdfQ==