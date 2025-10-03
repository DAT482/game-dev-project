import ViewManager from "../../framework/plugin_boosts/ui/ViewManager";
import { UserInfo } from "./Info";
import Platform from "../../framework/Platform";
import Device from "../../framework/plugin_boosts/gamesys/Device";
import { R } from "./hex-lines-game/Res";
import { Toast } from "../../framework/plugin_boosts/ui/ToastManager";
import { t, setLang, getLang } from "./i18n";
// ...existing code...
const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    static instance: Main = null;
    @property(cc.Node)
    drawRedPoint: cc.Node = null;
    
    @property(cc.Node)
    skinRedPoint: cc.Node = null;
    @property(cc.SpriteFrame)
    img_en: cc.SpriteFrame = null;
    @property(cc.SpriteFrame)
    img_vi: cc.SpriteFrame = null;

    onLoad() {
        Main.instance = this;
        Platform.login();
        UserInfo.init();
        Device.playMusic(R.audio_bgm);
         this.initLangButton();
        this.updateLocalizedUI();
    }
     initLangButton() {
        getLang();
      
        
    }
     onLangSwitch() {
        const newLang = getLang() === "en" ? "vi" : "en";
        setLang(newLang);
        this.updateLocalizedUI();
    }
    updateLocalizedUI() {
        // Cập nhật text
            let rankingButton = this.node.getChildByName("main").getChildByName("btn4").getChildByName("New Label").getComponent(cc.Label);
            rankingButton.string = t("rank_button");
        let playBtn = this.node.getChildByName("main").getChildByName("btn3").getChildByName("New Label").getComponent(cc.Label);
            playBtn.string = t("play_button");
        let skinBtn = this.node.getChildByName("main").getChildByName("btn2").getChildByName("New Label").getComponent(cc.Label);
            skinBtn.string = t("skin");
        let challengeBtn = this.node.getChildByName("main").getChildByName("btn1").getChildByName("New Label").getComponent(cc.Label);
            challengeBtn.string = t("challenge");
        let langBtn = this.node.getChildByName("main").getChildByName("Language Button").getChildByName("Background").getComponent(cc.Sprite);
        
            langBtn.spriteFrame = getLang() === "en" ? this.img_en : this.img_vi;
    }
    refreshRedpoints() {
        if (g.isNextDay(UserInfo.freedrawTime)) {
            this.drawRedPoint.active = true
        }
        else {
            this.drawRedPoint.active = false;
        }
        this.skinRedPoint.active = UserInfo.diamond >= 500 && !UserInfo.isAllUnlocked()
    }

    start() {

        if (g.isNextDay(UserInfo.dailyGetTime)) {
            ViewManager.instance.show("Game/DailyDialog")
        }

        this.refreshRedpoints();

        if (g.isNextDay(UserInfo.luckyVideoWatchTime)) {
            UserInfo.luckyVideoWatchTime = new Date().getTime()
            UserInfo.luckyVideoWatchCount = 0;
        }

        Platform.showBannerAd();
    }
    onButtonClick(){
        this.onLangSwitch();
        
        
    }

    click_play() {
        ViewManager.instance.show("Game/LevelDialog")
        // this.node.addChild(this.LevelDialog);
    }

    toggle_sfx(t) {
        Device.setSoundsEnable(!t.isChecked)
    }

    click_skin() {
        ViewManager.instance.show("Game/ShopDialog")
    }

    click_rank() {
        ViewManager.instance.show("wechat/WxRankDialog")
    }

    onShare() {

    }

    click_share() {
        Platform.share(this.onShare);
    }

    click_luck() {
        ViewManager.instance.show("Game/LuckyDialog")
    }


    click_more() {
        Toast.make("敬请期待")
    }

    // update (dt) {}
}
