function LocateList() {
    document.querySelector("#list").innerHTML = `
        <!--结构列表-->
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">buriedtreasure </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">埋藏的宝藏</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">endcity </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">末地城</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">fortress </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">下界要塞</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">mansion </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">林地府邸</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">mineshaft </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">废弃矿井</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">monument </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">海底神殿</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">ruins </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">海底废墟</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">shipwreck </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">沉船</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">stronghold </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">要塞</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">temple </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">沙漠神殿、雪屋、丛林神庙、女巫小屋</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">village </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">村庄</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">pillageroutpost </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">掠夺者前哨站</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">bastionremnant </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">堡垒遗迹</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">ruinedportal</div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">废弃传送门</span>
                </div>
            </div>
        </li>`
};