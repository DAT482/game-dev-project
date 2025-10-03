"use strict";
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