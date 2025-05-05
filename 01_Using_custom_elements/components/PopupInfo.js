// 为这个元素创建类
class PopupInfo extends HTMLElement {
    constructor() {
        // 必须首先调用 super 方法
        super();
    }

    connectedCallback() {
        // 创建影子根
        const shadow = this.attachShadow({ mode: "open" });

        // 创建几个 span
        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");

        const icon = document.createElement("span");
        icon.setAttribute("class", "icon");
        icon.setAttribute("tabindex", 0);

        const info = document.createElement("span");
        info.setAttribute("class", "info");

        // 获取属性内容然后将其放入 info 这个 span 内
        const text = this.getAttribute("data-text");
        info.textContent = text;

        // 插入图标
        let imgUrl;
        if (this.hasAttribute("img")) {
            imgUrl = this.getAttribute("img");
        } else {
            imgUrl = "img/default.png";
        }

        const img = document.createElement("img");
        img.src = imgUrl;
        icon.appendChild(img);
        // 将外部样式添加至影子 DOM
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "style.css");
        // 将创建好的元素附加到影子 DOM 上
        shadow.appendChild(linkElem);
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);
    }
}

customElements.define("popup-info", PopupInfo);
