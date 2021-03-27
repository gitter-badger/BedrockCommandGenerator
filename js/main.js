function Interval(callback, n) {
    // 伪setInterval(), 来自https://blog.csdn.net/qq_45503103/article/details/110943706
    let time = setTimeout(() => {
        clearTimeout(time)
        time = null
        callback()
        return interval(callback, n)
    }, n)
}

// 定义常量
const input = document.querySelector('#EditCommand')
const grammar = document.querySelector("#grammar")
const info = document.querySelector("#info")
const wikiURL = document.querySelector("#wikiURL")
const list = document.querySelector("#list")

function AddParameter() {  // 添加新变量
    input.value = input.value.split(" ", input.value.split(" ").length - 1).join(" ") + " "
    input.value = input.value + document.querySelector('.mdui-list-item:hover').querySelector('.mdui-list-item-title').innerHTML
};

function AddCommand() {  // 添加指令
    input.value = document.querySelector('.mdui-list-item:hover').querySelector('.mdui-list-item-title').innerHTML
}

function Search() {  // 根据首字母检索列表
    for (var i = 0; i < document.querySelector('#list').querySelectorAll('.mdui-list-item').length; i++) {
        document.querySelector('#list').querySelectorAll('.mdui-list-item')[i].style = "display: none"
        if (document.querySelector('#list').querySelectorAll('.mdui-list-item-title')[i].innerHTML.startsWith(input.value.split(" ")[input.value.split(" ").length - 1]) == true) {
    document.querySelector('#list').querySelectorAll('.mdui-list-item')[i].style = ""
        }
    }
}

function Change() {  // 切换页面数据
    // 切换#wikiURL的链接
    function WikiURL() {
        wikiURL.href = "https://minecraft-zh.gamepedia.com/命令" + input.value.split(" ")[0]
    }
    // 开始编写
    if (input.value.split(" ").length == 1) {
        CommandList()
        grammar.innerHTML = ""
        info.innerHTML = "请选择一个指令开始编写"
        WikiURL()
    }
    // 结束编写
    function End() {
        list.innerHTML = ""        
        grammar.innerHTML = ""
        info.innerHTML = "已完成编写"
        wikiURL.removeAttribute("href")
    }
    // /alwaysday
    if (input.value.split(" ")[0] == "/alwaysday" && input.value.split(" ").length == 2) {
        BooleanList()
        grammar.innerHTML = `/alwaysday <strong><布尔值></strong>`
        info.innerHTML = "指定是否开启昼夜更替。"
        WikiURL()
    } else if (input.value.split(" ")[0] == "/alwaysday" && input.value.split(" ").length == 3) {
        End()
    }
    // /daylock
    if (input.value.split(" ")[0] == "/daylock" && input.value.split(" ").length == 2) {
        BooleanList()
        grammar.innerHTML = `/daylock <strong><布尔值></strong>`
        info.innerHTML = "指定是否开启昼夜更替。"
        WikiURL()        
    } else if (input.value.split(" ")[0] == "/daylock" && input.value.split(" ").length == 3) {
        End()
    }
    // /locate
    if (input.value.split(" ")[0] == "/locate" && input.value.split(" ").length == 2) {
        LocateList()
        grammar.innerHTML = `/locate <strong><结构类型></strong>`
        info.innerHTML = "指定要定位的结构。"
        WikiURL()        
    } else if (input.value.split(" ")[0] == "/locate" && input.value.split(" ").length == 3) {
        End()
    }
};