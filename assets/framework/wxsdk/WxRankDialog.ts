import Platform from "../Platform";
import View from "../plugin_boosts/ui/View";
import ViewManager from "../plugin_boosts/ui/ViewManager";
import Common from "../plugin_boosts/utils/Common";
import Signal from "../plugin_boosts/misc/Signal";

const { ccclass, property } = cc._decorator;

@ccclass
export default class WxRankDialog extends cc.Component {
    @property(cc.ScrollView)
    scrollView: cc.ScrollView = null!;

    private first: boolean = true;
    private closeSignal = new Signal();

    /**
     * Called when the View is shown
     */
    onShown(callback, target) {
        this.closeSignal.on(callback, target);

        if (this.first) {
            // Only delay the first time to ensure Platform is ready
            this.scheduleOnce(() => {
                this.openRank();
            }, 0.1);
            this.first = false;
        } else {
            this.openRank();
        }
    }

    /**
     * Perform showing the ranking board
     */
    private openRank() {
        Platform.showRank(this.scrollView);
    }

    /**
     * Click the close button
     */
    click_close() {
        Platform.hideRank();
        this.getComponent(View).hide();
        this.closeSignal.fire();
    }
}