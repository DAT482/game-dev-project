// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

     @property(cc.ScrollView)
    scrollView: cc.ScrollView = null!;

    @property(cc.Prefab)
    rankItemPrefab: cc.Prefab = null!;

    // Fake API data (bạn có thể fetch từ server)
    private rankData = [
        { "rank": 1, "name": "Kiên", "level": 50 },
        { "rank": 2, "name": "ĐỨC", "level": 20 },
        { "rank": 3, "name": "Naruto", "level": 15 },
        { "rank": 4, "name": "Trần Văn  Khiết", "level": 13 },
        { "rank": 5, "name": "DULIEUAN", "level": 12 },
        { "rank": 6, "name": "name6", "level": 11 },
        { "rank": 7, "name": "Quang", "level": 7 },
        { "rank": 8, "name": "Tô Đắc", "level": 6 },
        { "rank": 9, "name": "Huyền", "level": 3 },
        { "rank": 10, "name": "Phóng", "level": 2 }
    ];

    start() {
        this.loadRankList();
    }

    loadRankList() {
        // Clear content cũ
        this.scrollView.content.removeAllChildren();

        // Loop dữ liệu
        this.rankData.forEach(player => {
            const item = cc.instantiate(this.rankItemPrefab);

            // Tìm các Label trong prefab
            const labels = item.getComponentsInChildren(cc.Label);
            labels.find(l => l.node.name === "lblRank")!.string = String(player.rank);
            labels.find(l => l.node.name === "lblName")!.string = player.name;
            labels.find(l => l.node.name === "lblLevel")!.string = "Lv." + player.level;

            // Add vào content
            this.scrollView.content.addChild(item);
        });
    }
}
