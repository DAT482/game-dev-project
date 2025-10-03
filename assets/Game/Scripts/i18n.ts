import { time } from "console";
import { title } from "process";

export const LANGS = {
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
        titleWin:"Time        Beat         players",
        completed:"Congratulations on completing the level!",
        reward:"Reward for this level:",
        compiment:"Excellent!"
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
        titleWin:"Thời gian        Vượt qua         người chơi",
        completed:"Chúc mừng bạn đã qua màn!",
        reward:"Phần thưởng màn này:",
        compiment:"Quá xuất sắc!"



        
    }
};

let currentLang = localStorage.getItem("lang") || "en";
export function setLang(lang: string) {
    if (LANGS[lang]) {
        currentLang = lang;
        localStorage.setItem("lang", lang);
    }
}
export function t(key: string): string {
    return LANGS[currentLang][key] || key;
}
export function getLang() {
    return currentLang;
}