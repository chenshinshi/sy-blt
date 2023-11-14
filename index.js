"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
const siyuan = require("siyuan");
const index = "";
async function request(url, data) {
  let response = await siyuan.fetchSyncPost(url, data);
  let res = response.code === 0 ? response.data : null;
  return res;
}
async function setBlockAttrs(id, attrs) {
  let data = {
    id,
    attrs
  };
  let url = "/api/attr/setBlockAttrs";
  return request(url, data);
}
let i18n;
const setI18n = (i18nObj) => {
  i18n = i18nObj;
};
function qsr(selectid) {
  let button = document.createElement("button");
  button.className = "b3-menu__item";
  button.setAttribute("data-node-id", selectid);
  button.setAttribute("custom-attr-name", "blt");
  button.setAttribute("custom-attr-value", "qsr");
  button.innerHTML = `<span class="b3-menu__label">🔴${i18n.button.qsr}</span>`;
  return button;
}
function qsy(selectid) {
  let button = document.createElement("button");
  button.className = "b3-menu__item";
  button.setAttribute("data-node-id", selectid);
  button.setAttribute("custom-attr-name", "blt");
  button.setAttribute("custom-attr-value", "qsy");
  button.innerHTML = `<span class="b3-menu__label">🟡${i18n.button.qsy}</span>`;
  return button;
}
function qsg(selectid) {
  let button = document.createElement("button");
  button.className = "b3-menu__item";
  button.setAttribute("data-node-id", selectid);
  button.setAttribute("custom-attr-name", "blt");
  button.setAttribute("custom-attr-value", "qsg");
  button.innerHTML = `<span class="b3-menu__label">🟢${i18n.button.qsg}</span>`;
  return button;
}
function qsb(selectid) {
  let button = document.createElement("button");
  button.className = "b3-menu__item";
  button.setAttribute("data-node-id", selectid);
  button.setAttribute("custom-attr-name", "blt");
  button.setAttribute("custom-attr-value", "qsb");
  button.innerHTML = `<span class="b3-menu__label">🔵${i18n.button.qsb}</span>`;
  return button;
}
function ssr(selectid) {
  let button = document.createElement("button");
  button.className = "b3-menu__item";
  button.setAttribute("data-node-id", selectid);
  button.setAttribute("custom-attr-name", "blt");
  button.setAttribute("custom-attr-value", "ssr");
  button.innerHTML = `<span class="b3-menu__label">🟥${i18n.button.ssr}</span>`;
  return button;
}
function ssy(selectid) {
  let button = document.createElement("button");
  button.className = "b3-menu__item";
  button.setAttribute("data-node-id", selectid);
  button.setAttribute("custom-attr-name", "blt");
  button.setAttribute("custom-attr-value", "ssy");
  button.innerHTML = `<span class="b3-menu__label">🟧${i18n.button.ssy}</span>`;
  return button;
}
function ssg(selectid) {
  let button = document.createElement("button");
  button.className = "b3-menu__item";
  button.setAttribute("data-node-id", selectid);
  button.setAttribute("custom-attr-name", "blt");
  button.setAttribute("custom-attr-value", "ssg");
  button.innerHTML = `<span class="b3-menu__label">🟩${i18n.button.ssg}</span>`;
  return button;
}
function ssb(selectid) {
  let button = document.createElement("button");
  button.className = "b3-menu__item";
  button.setAttribute("data-node-id", selectid);
  button.setAttribute("custom-attr-name", "blt");
  button.setAttribute("custom-attr-value", "ssb");
  button.innerHTML = `<span class="b3-menu__label">🟦${i18n.button.ssb}</span>`;
  return button;
}
function jb(selectid) {
  let button = document.createElement("button");
  button.className = "b3-menu__item";
  button.setAttribute("data-node-id", selectid);
  button.setAttribute("custom-attr-name", "blt");
  button.setAttribute("custom-attr-value", "jb");
  button.innerHTML = `<span class="b3-menu__label">🟨${i18n.button.jb}</span>`;
  return button;
}
function ay(selectid) {
  let button = document.createElement("button");
  button.className = "b3-menu__item";
  button.setAttribute("data-node-id", selectid);
  button.setAttribute("custom-attr-name", "blt");
  button.setAttribute("custom-attr-value", "ay");
  button.innerHTML = `<span class="b3-menu__label">🏮${i18n.button.ay}</span>`;
  return button;
}
function ayx(selectid) {
  let button = document.createElement("button");
  button.className = "b3-menu__item";
  button.setAttribute("data-node-id", selectid);
  button.setAttribute("custom-attr-name", "blt");
  button.setAttribute("custom-attr-value", "ay2");
  button.innerHTML = `<span class="b3-menu__label">❄️${i18n.button.ayx}</span>`;
  return button;
}
function Defaultblt(selectid) {
  let button = document.createElement("button");
  button.className = "b3-menu__item";
  button.setAttribute("data-node-id", selectid);
  button.setAttribute("custom-attr-name", "blt");
  button.setAttribute("custom-attr-value", "");
  button.innerHTML = `<svg class="b3-menu__icon" style=""><use xlink:href="#iconRefresh"></use></svg><span class="b3-menu__label">${i18n.button.default}</span>`;
  return button;
}
const NewButton = [
  qsr,
  qsy,
  qsg,
  qsb,
  ssr,
  ssy,
  ssg,
  ssb,
  jb,
  ay,
  ayx
];
async function setUpAttr(blockId, value) {
  setBlockAttrs(blockId, {
    "custom-blt": value
  });
}
class BltPlugin extends siyuan.Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "blockIconEventBindThis", this.blockIconEvent.bind(this));
    __publicField(this, "CSSRoot", "BltPlugin");
  }
  async onload() {
    setI18n(this.i18n);
    this.eventBus.on("click-blockicon", this.blockIconEventBindThis);
  }
  async onunload() {
    this.eventBus.off("click-blockicon", this.blockIconEventBindThis);
  }
  blockIconEvent({ detail }) {
    console.log(detail);
    if (detail.blockElements.length > 1) {
      return;
    }
    let ele = detail.blockElements[0];
    console.log(ele);
    let menu = detail.menu;
    let submenus = [];
    for (let newbtn of NewButton) {
      let btn2 = newbtn(ele.getAttribute("data-node-id"));
      btn2.onclick = () => {
        setUpAttr(ele.getAttribute("data-node-id"), btn2.getAttribute("custom-attr-value"));
      };
      submenus.push({
        element: btn2
      });
    }
    submenus.push({
      type: "separator"
    });
    let btn = Defaultblt(ele.getAttribute("data-node-id"));
    btn.onclick = () => {
      setUpAttr(ele.getAttribute("data-node-id"), btn.getAttribute("custom-attr-value"));
    };
    submenus.push({
      element: btn
    });
    menu.addItem({
      icon: "iconInfo",
      label: this.i18n.name,
      type: "submenu",
      submenu: submenus
    });
  }
}
module.exports = BltPlugin;
