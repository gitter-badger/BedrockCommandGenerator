function CommandList() {
    document.querySelector("#list").innerHTML = `
        <!--命令列表-->
        <!--A-->
        <li onclick="AddCommand(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">/alwaysday </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">锁定或解锁日夜循环。</span>
                </div>
            </div>
        </li>
        <!--D-->
        <li onclick="AddCommand(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">/daylock </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">锁定或解锁日夜循环。</span>
                </div>
            </div>
        </li>
        <!--E-->
        <li onclick="AddCommand(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">/execute </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">用于执行另一个命令，但是允许改变执行者、命令执行的位置和角度，添加限制执行条件。</span>
                </div>
            </div>
        </li>
        <!--L-->
        <li onclick="AddCommand(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">/locate </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">在聊天框中为命令执行者显示给定类型结构的最近坐标和距离。</span>
                </div>
            </div>
        </li>
        <!--T-->
        <li onclick="AddCommand(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">/teleport </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">传送实体（玩家、生物、物品、矿车等）。</span>
                </div>
            </div>
        </li>
        <li onclick="AddCommand(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">/tp </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">传送实体（玩家、生物、物品、矿车等）。</span>
                </div>
            </div>
        </li>
        <!--Other-->
        <li onclick="AddCommand(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">@</div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">[不是指令] 开启目标选择器编辑器。</span>
                </div>
            </div>
        </li>
        <li onclick="AddCommand(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">{</div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">[不是指令] 开启JSON文本编辑器。</span>
                </div>
            </div>
        </li>`
};