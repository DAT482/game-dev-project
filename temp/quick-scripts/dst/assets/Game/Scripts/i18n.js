
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
        close_introduce: "Tap anywhere to close",
        titleWin: "Time        Beat         players",
        completed: "Congratulations on completing the level!",
        reward: "Reward for this level:",
        compiment: "Excellent!"
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
        close_introduce: "Nhấn vào bất kỳ chỗ nào để đóng",
        titleWin: "Thời gian        Vượt qua         người chơi",
        completed: "Chúc mừng bạn đã qua màn!",
        reward: "Phần thưởng màn này:",
        compiment: "Quá xuất sắc!"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcR2FtZVxcU2NyaXB0c1xcaTE4bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdhLFFBQUEsS0FBSyxHQUFHO0lBQ2pCLEVBQUUsRUFBRTtRQUNBLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLGFBQWE7UUFDbkIsVUFBVSxFQUFFLHNCQUFzQjtRQUNsQyxXQUFXLEVBQUUsVUFBVTtRQUN2QixTQUFTLEVBQUUsMkJBQTJCO1FBQ3RDLFVBQVUsRUFBRSxrQkFBa0I7UUFDOUIsZUFBZSxFQUFFLFNBQVM7UUFDMUIsV0FBVyxFQUFFLFVBQVU7UUFDdkIsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLElBQUk7UUFDZixlQUFlLEVBQUUsdUNBQXVDO1FBQ3hELElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsT0FBTztRQUNkLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLFdBQVc7UUFDdEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsU0FBUyxFQUFFLFlBQVk7UUFDdkIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsU0FBUyxFQUFFLDZCQUE2QjtRQUN4QyxlQUFlLEVBQUUsdUJBQXVCO1FBQ3hDLFFBQVEsRUFBQyxrQ0FBa0M7UUFDM0MsU0FBUyxFQUFDLDBDQUEwQztRQUNwRCxNQUFNLEVBQUMsd0JBQXdCO1FBQy9CLFNBQVMsRUFBQyxZQUFZO0tBQ3pCO0lBQ0QsRUFBRSxFQUFFO1FBQ0EsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsVUFBVSxFQUFFLDZCQUE2QjtRQUN6QyxXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsMEJBQTBCO1FBQ3JDLFVBQVUsRUFBRSx3QkFBd0I7UUFDcEMsZUFBZSxFQUFFLFlBQVk7UUFDN0IsV0FBVyxFQUFFLFVBQVU7UUFDdkIsVUFBVSxFQUFFLElBQUk7UUFDaEIsU0FBUyxFQUFFLE9BQU87UUFDbEIsV0FBVyxFQUFFLFdBQVc7UUFDeEIsZUFBZSxFQUFFLHNDQUFzQztRQUN2RCxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxXQUFXO1FBQ2pCLEtBQUssRUFBRSxRQUFRO1FBQ2YsSUFBSSxFQUFFLFVBQVU7UUFDaEIsU0FBUyxFQUFFLFdBQVc7UUFDdEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsU0FBUyxFQUFFLG1CQUFtQjtRQUM5QixTQUFTLEVBQUUsOEJBQThCO1FBQ3pDLGVBQWUsRUFBRSxpQ0FBaUM7UUFDbEQsUUFBUSxFQUFDLDhDQUE4QztRQUN2RCxTQUFTLEVBQUMsMkJBQTJCO1FBQ3JDLE1BQU0sRUFBQyxzQkFBc0I7UUFDN0IsU0FBUyxFQUFDLGVBQWU7S0FLNUI7Q0FDSixDQUFDO0FBRUYsSUFBSSxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDdkQsU0FBZ0IsT0FBTyxDQUFDLElBQVk7SUFDaEMsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDYixXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3RDO0FBQ0wsQ0FBQztBQUxELDBCQUtDO0FBQ0QsU0FBZ0IsQ0FBQyxDQUFDLEdBQVc7SUFDekIsT0FBTyxhQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDO0FBQzFDLENBQUM7QUFGRCxjQUVDO0FBQ0QsU0FBZ0IsT0FBTztJQUNuQixPQUFPLFdBQVcsQ0FBQztBQUN2QixDQUFDO0FBRkQsMEJBRUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aW1lIH0gZnJvbSBcImNvbnNvbGVcIjtcclxuaW1wb3J0IHsgdGl0bGUgfSBmcm9tIFwicHJvY2Vzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExBTkdTID0ge1xyXG4gICAgZW46IHtcclxuICAgICAgICBza2luOiBcIlNraW5zXCIsXHJcbiAgICAgICAgbW9yZTogXCJDb21pbmcgc29vblwiLFxyXG4gICAgICAgIGhvbWVfdGl0bGU6IFwiV2VsY29tZSB0byB0aGUgZ2FtZSFcIixcclxuICAgICAgICBwbGF5X2J1dHRvbjogXCJQbGF5IE5vd1wiLFxyXG4gICAgICAgIHdpbl9wb3B1cDogXCJDb25ncmF0dWxhdGlvbnMhIFlvdSB3b24hXCIsXHJcbiAgICAgICAgbG9zZV9wb3B1cDogXCJTb3JyeSEgWW91IGxvc3QhXCIsXHJcbiAgICAgICAgbGFuZ3VhZ2VfYnV0dG9uOiBcIkVuZ2xpc2hcIixcclxuICAgICAgICByYW5rX2J1dHRvbjogXCJSYW5raW5nc1wiLFxyXG4gICAgICAgIHllc19idXR0b246IFwiWWVzXCIsXHJcbiAgICAgICAgbm9fYnV0dG9uOiBcIk5vXCIsXHJcbiAgICAgICAgdGltZW91dF9tZXNzYWdlOiBcIlRpbWUncyB1cCEgRG8geW91IHdhbnQgdG8gcGxheSBhZ2Fpbj9cIixcclxuICAgICAgICBzdGVwOiBcIlN0ZXBzXCIsXHJcbiAgICAgICAgdGltZTogXCJUaW1lXCIsXHJcbiAgICAgICAgbGV2ZWw6IFwiTGV2ZWxcIixcclxuICAgICAgICBoZWxwOiBcIkhlbHBcIixcclxuICAgICAgICBjaGFsbGVuZ2U6IFwiQ2hhbGxlbmdlXCIsXHJcbiAgICAgICAgY29udGludWU6IFwiQ29udGludWVcIixcclxuICAgICAgICBsdWNreWRyYXc6IFwiTHVja3kgRHJhd1wiLFxyXG4gICAgICAgIGdhbWVfc3RhdHVzOiBcIkdhbWUgT3ZlclwiLFxyXG4gICAgICAgIGludHJvZHVjZTogXCJDb25uZWN0IDIgaWRlbnRpY2FsIGFuaW1hbHNcIixcclxuICAgICAgICBjbG9zZV9pbnRyb2R1Y2U6IFwiVGFwIGFueXdoZXJlIHRvIGNsb3NlXCIsXHJcbiAgICAgICAgdGl0bGVXaW46XCJUaW1lICAgICAgICBCZWF0ICAgICAgICAgcGxheWVyc1wiLFxyXG4gICAgICAgIGNvbXBsZXRlZDpcIkNvbmdyYXR1bGF0aW9ucyBvbiBjb21wbGV0aW5nIHRoZSBsZXZlbCFcIixcclxuICAgICAgICByZXdhcmQ6XCJSZXdhcmQgZm9yIHRoaXMgbGV2ZWw6XCIsXHJcbiAgICAgICAgY29tcGltZW50OlwiRXhjZWxsZW50IVwiXHJcbiAgICB9LFxyXG4gICAgdmk6IHtcclxuICAgICAgICBza2luOiBcIlRyYW5nIHBo4bulY1wiLFxyXG4gICAgICAgIG1vcmU6IFwiU+G6r3AgcmEgbeG6r3RcIixcclxuICAgICAgICBob21lX3RpdGxlOiBcIkNow6BvIG3hu6tuZyDEkeG6v24gduG7m2kgdHLDsiBjaMahaSFcIixcclxuICAgICAgICBwbGF5X2J1dHRvbjogXCJDaMahaSBuZ2F5XCIsXHJcbiAgICAgICAgd2luX3BvcHVwOiBcIkNow7pjIG3hu6tuZyEgQuG6oW4gxJHDoyB0aOG6r25nIVwiLFxyXG4gICAgICAgIGxvc2VfcG9wdXA6IFwiVGnhur9jIHF1w6EhIELhuqFuIMSRw6MgdGh1YSFcIixcclxuICAgICAgICBsYW5ndWFnZV9idXR0b246IFwidGnhur9uZyBWaeG7h3RcIixcclxuICAgICAgICByYW5rX2J1dHRvbjogXCJY4bq/cCBo4bqhbmdcIixcclxuICAgICAgICB5ZXNfYnV0dG9uOiBcIkPDs1wiLFxyXG4gICAgICAgIG5vX2J1dHRvbjogXCJLaMO0bmdcIixcclxuICAgICAgICBnYW1lX3N0YXR1czogXCJUaHVhIGN14buZY1wiLFxyXG4gICAgICAgIHRpbWVvdXRfbWVzc2FnZTogXCJI4bq/dCBnaeG7nSEgQuG6oW4gY8OzIG114buRbiBjaMahaSBs4bqhaSBraMO0bmc/XCIsXHJcbiAgICAgICAgc3RlcDogXCJCxrDhu5tjXCIsXHJcbiAgICAgICAgdGltZTogXCJUaOG7nWkgZ2lhblwiLFxyXG4gICAgICAgIGxldmVsOiBcIkPhuqVwIMSR4buZXCIsXHJcbiAgICAgICAgaGVscDogXCJUcuG7oyBnacO6cFwiLFxyXG4gICAgICAgIGNoYWxsZW5nZTogXCJUaOG7rSB0aMOhY2hcIixcclxuICAgICAgICBjb250aW51ZTogXCJUaeG6v3AgdOG7pWNcIixcclxuICAgICAgICBsdWNreWRyYXc6IFwiVsOybmcgcXVheSBtYXkgbeG6r25cIixcclxuICAgICAgICBpbnRyb2R1Y2U6IFwiS+G6v3QgbuG7kWkgMiBjb24gduG6rXQgZ2nhu5FuZyBuaGF1XCIsXHJcbiAgICAgICAgY2xvc2VfaW50cm9kdWNlOiBcIk5o4bqlbiB2w6BvIGLhuqV0IGvhu7MgY2jhu5cgbsOgbyDEkeG7gyDEkcOzbmdcIixcclxuICAgICAgICB0aXRsZVdpbjpcIlRo4budaSBnaWFuICAgICAgICBWxrDhu6N0IHF1YSAgICAgICAgIG5nxrDhu51pIGNoxqFpXCIsXHJcbiAgICAgICAgY29tcGxldGVkOlwiQ2jDumMgbeG7q25nIGLhuqFuIMSRw6MgcXVhIG3DoG4hXCIsXHJcbiAgICAgICAgcmV3YXJkOlwiUGjhuqduIHRoxrDhu59uZyBtw6BuIG7DoHk6XCIsXHJcbiAgICAgICAgY29tcGltZW50OlwiUXXDoSB4deG6pXQgc+G6r2MhXCJcclxuXHJcblxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxufTtcclxuXHJcbmxldCBjdXJyZW50TGFuZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGFuZ1wiKSB8fCBcImVuXCI7XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMYW5nKGxhbmc6IHN0cmluZykge1xyXG4gICAgaWYgKExBTkdTW2xhbmddKSB7XHJcbiAgICAgICAgY3VycmVudExhbmcgPSBsYW5nO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibGFuZ1wiLCBsYW5nKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdChrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gTEFOR1NbY3VycmVudExhbmddW2tleV0gfHwga2V5O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMYW5nKCkge1xyXG4gICAgcmV0dXJuIGN1cnJlbnRMYW5nO1xyXG59Il19