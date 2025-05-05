function updateStyle(elem) {
    const shadow = elem.shadowRoot;
    shadow.querySelector("style").textContent = `
      div {
        width: ${elem.getAttribute("size")}px;
        height: ${elem.getAttribute("size")}px;
        background-color: ${elem.getAttribute("color")};
      }
    `;
}

class CustomSquare extends HTMLElement {
    static get observedAttributes() {
        return ["color", "size"];
    }

    constructor() {
        // 必须首先调用 super 方法
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const div = document.createElement("div");
        const style = document.createElement("style");
        shadow.appendChild(style);
        shadow.appendChild(div);
    }

    connectedCallback() {
        console.log("自定义正方形元素添加至页面。");
        updateStyle(this);
    }

    disconnectedCallback() {
        console.log("自定义正方形元素从页面中移除。");
    }

    adoptedCallback() {
        console.log("自定义正方形元素移动至新页面。");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("自定义正方形元素的属性已变更。");
        updateStyle(this);
    }
}

customElements.define("custom-square", CustomSquare);
