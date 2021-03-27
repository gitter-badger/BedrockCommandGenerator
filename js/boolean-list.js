function BooleanList() {
    document.querySelector("#list").innerHTML = `
        <!--布尔值-->
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">true </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">是</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">false </div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">否</span>
                </div>
            </div>
        </li>`
};