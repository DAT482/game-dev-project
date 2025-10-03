import { UserInfo } from "../Info";
import LevelSelector from "../../../framework/plugin_boosts/ui/game/LevelSelector";
import { t, setLang, getLang } from "../i18n";


const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelDialog extends cc.Component {

    onLoad() {


    }
    start() {

    }
    @property(LevelSelector)
    selector: LevelSelector;

    onShown() {
        

        this.scheduleOnce(this.refreshLevels, 0.1)
    }
    onEnable() {
        this.node.getChildByName("btn4").getChildByName("New Label").getComponent(cc.Label).string = t("continue");
        this.selector.currentLevel = UserInfo.level;
        this.selector.refresh()

    }

    refreshLevels() {
        this.selector.scrollToCurrentLevel();
    }

    select_level(lvnode) {

        this.gotoLevel(lvnode.name)
    }

    refreshLevelItem(data) {
    }

    gotoLevel(lv) {
        lv = parseInt(lv)
        console.log("enter level", lv);
        UserInfo.currentLevel = lv;
        cc.director.loadScene("Game")
    }

    click_continue() {
        this.gotoLevel(UserInfo.level)
    }
}