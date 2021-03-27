function XList() {
    document.querySelector("#list").innerHTML = `
        <!--坐标-->
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">~</div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">相对坐标</span>
                </div>
            </div>
        </li>
        <li onclick="AddParameter(); Change();" class="mdui-list-item mdui-ripple">
            <div class="mdui-list-item-content">
                <div class="mdui-list-item-title">^</div>
                <div class="mdui-list-item-text mdui-list-item-one-line">
                    <span class="mdui-text-color-theme-text">局部坐标</span>
                </div>
            </div>
        </li>`
}

