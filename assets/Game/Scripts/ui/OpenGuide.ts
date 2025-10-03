// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
import { t, setLang, getLang } from "../../Scripts/i18n";


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
                this.node.getChildByName("label1").getComponent(cc.Label).string = t("introduce");
                this.node.getChildByName("label2").getComponent(cc.Label).string = t("close_introduce");
    }
    protected onEnable(): void {
             
    }

    // update (dt) {}
}
