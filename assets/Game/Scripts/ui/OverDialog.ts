// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
import { t, setLang, getLang } from "../i18n";


const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

     start () {

    }
    onLoad () {
       
    }
    protected onEnable(): void {
        getLang();
                this.node.getChildByName("frame3").getChildByName("NoButton").getChildByName("label").getComponent(cc.Label).string = t("no_button");
                this.node.getChildByName("frame3").getChildByName("YesButton").getChildByName("label").getComponent(cc.Label).string = t("yes_button");
                this.node.getChildByName("frame3").getChildByName("label").getComponent(cc.Label).string = t("timeout_message");
                this.node.getChildByName("banner").getChildByName("label").getComponent(cc.Label).string = t("game_status");

    }
    onYes(){
        cc.director.loadScene("Game");
        
    }
    onNo(){
        cc.director.loadScene("Main");
    }

    // update (dt) {}
}
