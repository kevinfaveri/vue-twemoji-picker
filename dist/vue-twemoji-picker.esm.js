import Vue from 'vue';
import Twemoji from 'twemoji';
import { Dropdown } from 'v-tooltip';

var EmojiServiceImport = {
    getEmojiImgFromUnicode(unicode, twemojiOptions) {
        return Twemoji.parse(unicode, twemojiOptions);
    },
    getEmojiImgArrayFromEmojiPack(emojiPackArray, twemojiOptions) {
        var _a, _b;
        emojiPackArray = JSON.parse(JSON.stringify(emojiPackArray));
        const emojiPackWithImg = [];
        if (((_a = emojiPackArray) === null || _a === void 0 ? void 0 : _a.length) !== 0) {
            for (let i = 0; i < emojiPackArray.length; i++) {
                emojiPackWithImg[i] = { group: emojiPackArray[i].group, emojiList: [] };
                for (let j = 0; j < emojiPackArray[i].emojiList.length; j++) {
                    const emoji = { unicode: '', img: '', skins: [], tags: [] };
                    const emojiAuxObj = emojiPackArray[i].emojiList[j];
                    if (((_b = emojiAuxObj.skins) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                        emoji.unicode = emojiAuxObj.unicode;
                        emoji.skins = [];
                        for (let k = 0; k < emojiAuxObj.skins.length; k++) {
                            const skinObject = {
                                unicode: emojiAuxObj.skins[k].unicode,
                                img: this.getEmojiImgFromUnicode(emojiAuxObj.skins[k].unicode, twemojiOptions)
                            };
                            emoji.skins.push(skinObject);
                        }
                    }
                    else {
                        emoji.unicode = emojiAuxObj.unicode;
                    }
                    emoji.img = this.getEmojiImgFromUnicode(emoji.unicode, twemojiOptions);
                    emojiPackWithImg[i].emojiList.push(emoji);
                }
            }
        }
        return emojiPackWithImg;
    },
    getEmojiImgArrayFromEmojiPackByTerm(emojiPackArray, twemojiOptions, searchTerm) {
        var _a, _b;
        emojiPackArray = JSON.parse(JSON.stringify(emojiPackArray));
        const emojiPackWithImg = [];
        if (((_a = emojiPackArray) === null || _a === void 0 ? void 0 : _a.length) !== 0) {
            for (let i = 0; i < emojiPackArray.length; i++) {
                for (let j = 0; j < emojiPackArray[i].emojiList.length; j++) {
                    const emoji = { unicode: '', img: '', skins: [], tags: [] };
                    const emojiAuxObj = emojiPackArray[i].emojiList[j];
                    if (((_b = emojiAuxObj.skins) === null || _b === void 0 ? void 0 : _b.length) !== 0) {
                        emoji.unicode = emojiAuxObj.unicode;
                        emoji.skins = [];
                        for (let k = 0; k < emojiAuxObj.skins.length; k++) {
                            const skinObject = {
                                unicode: emojiAuxObj.skins[k].unicode,
                                img: this.getEmojiImgFromUnicode(emojiAuxObj.skins[k].unicode, twemojiOptions)
                            };
                            emoji.skins.push(skinObject);
                        }
                    }
                    else {
                        emoji.unicode = emojiPackArray[i].emojiList[j].unicode;
                    }
                    emoji.img = this.getEmojiImgFromUnicode(emoji.unicode, twemojiOptions);
                    for (let k = 0; k < emojiAuxObj.tags.length; k++) {
                        if (emojiAuxObj.tags[k].includes(searchTerm)) {
                            emojiPackWithImg.push(emoji);
                            break;
                        }
                    }
                }
            }
        }
        return emojiPackWithImg;
    }
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".resize-observer[data-v-b329ee4c]{position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;border:none;background-color:transparent;pointer-events:none;display:block;overflow:hidden;opacity:0}.resize-observer[data-v-b329ee4c] object{display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1}.v-popper--theme-dropdown .v-popper__inner{background:#fff;color:#000;padding:24px;border-radius:6px;-webkit-box-shadow:0 6px 30px rgba(0,0,0,.1);box-shadow:0 6px 30px rgba(0,0,0,.1)}.v-popper--theme-dropdown .v-popper__arrow{border-color:#fff}.v-popper__popper{z-index:10000;visibility:hidden;opacity:0;-webkit-transition:opacity .15s,visibility .15s;transition:opacity .15s,visibility .15s}.v-popper__popper.v-popper__popper--open{visibility:visible;opacity:1;-webkit-transition:opacity .15s;transition:opacity .15s}.v-popper__popper.v-popper__popper--skip-transition{-webkit-transition:none!important;transition:none!important}.v-popper__arrow{width:0;height:0;border-style:solid;position:absolute;margin:5px;z-index:1}.v-popper__popper[x-placement^=top]{margin-bottom:5px}.v-popper__popper[x-placement^=top] .v-popper__arrow{border-width:5px 5px 0 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;bottom:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.v-popper__popper[x-placement^=bottom]{margin-top:5px}.v-popper__popper[x-placement^=bottom] .v-popper__arrow{border-width:0 5px 5px 5px;border-left-color:transparent!important;border-right-color:transparent!important;border-top-color:transparent!important;top:-5px;left:calc(50% - 5px);margin-top:0;margin-bottom:0}.v-popper__popper[x-placement^=right]{margin-left:5px}.v-popper__popper[x-placement^=right] .v-popper__arrow{border-width:5px 5px 5px 0;border-left-color:transparent!important;border-top-color:transparent!important;border-bottom-color:transparent!important;left:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.v-popper__popper[x-placement^=left]{margin-right:5px}.v-popper__popper[x-placement^=left] .v-popper__arrow{border-width:5px 0 5px 5px;border-top-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;right:-5px;top:calc(50% - 5px);margin-left:0;margin-right:0}.v-popper--theme-tooltip .v-popper__inner{background:rgba(0,0,0,.8);color:#fff;border-radius:6px;padding:7px 12px 6px}.v-popper--theme-tooltip .v-popper__arrow{border-color:rgba(0,0,0,.8)}";
styleInject(css);

var script = Vue.extend({
    name: 'TwemojiPicker',
    components: {
        'v-popover': Dropdown
    },
    props: {
        disabled: {
            default: false,
            type: Boolean
        },
        pickerWidth: {
            default: 250,
            type: Number
        },
        pickerMaxHeight: {
            default: 200,
            type: Number
        },
        appendToBody: {
            default: false,
            type: Boolean
        },
        triggerType: {
            default: 'click',
            type: String,
            validator: function (value) {
                if (value !== 'click' && value !== 'hover') {
                    console.error('The value entered for the prop "triggerType" is invalid. ' +
                        'Valid values: "click" and "hover".');
                }
                return true;
            }
        },
        emojiData: {
            default: () => [],
            type: Array
        },
        emojiGroups: {
            default: () => [],
            type: Array
        },
        skinsSelection: {
            default: false,
            type: Boolean
        },
        recentEmojisFeat: {
            default: false,
            type: Boolean
        },
        recentEmojisStorage: {
            default: 'none',
            type: String,
            validator: function (value) {
                if (value !== 'local' && value !== 'session' && value !== 'none') {
                    console.error('The value entered for the prop "recentEmojisStorage" is invalid. ' +
                        'Valid values: "local", "session" and "none".');
                }
                return true;
            }
        },
        recentEmojiStorageName: {
            default: 'vue-recent-twemojis',
            type: String
        },
        recentEmojiLimit: {
            default: 12,
            type: Number
        },
        searchEmojisFeat: {
            default: false,
            type: Boolean
        },
        searchEmojiPlaceholder: {
            default: 'Search emojis.',
            type: String
        },
        searchEmojiNotFound: {
            default: 'No emojis found.',
            type: String
        },
        twemojiPath: {
            default: 'https://twemoji.maxcdn.com/2/',
            type: String
        },
        twemojiExtension: {
            default: '.png',
            type: String,
            validator: function (value) {
                const bolValid = ['.png', '.svg', '.jpg', '.jpeg', '.ico'].indexOf(value) !== -1;
                if (bolValid === false) {
                    console.error('The value entered for the prop "twemojiPath" is invalid. ' +
                        'Valid values: ".png", ".svg", ".jpg", ".jpeg", ".ico".');
                }
                return true;
            }
        },
        twemojiFolder: {
            default: '72x72',
            type: String
        }
    },
    data() {
        return {
            showEmoji: false,
            popperOptions: {
                modifiers: {
                    flip: {
                        enabled: false
                    }
                }
            },
            showSkinsSelector: false,
            skinsListActive: [],
            emojiPack: [],
            emojiListActive: [],
            emojiGroupActive: 0,
            randomEmoji: '😄',
            isPointerOnEmojiBtn: false,
            twemojiOptions: {},
            recentEmojis: [],
            searchTerm: '',
            searchEmojis: [],
            searchTimeout: null
        };
    },
    computed: {
        randomEmojiImg() {
            this.triggerShowEmoji();
            return EmojiServiceImport.getEmojiImgFromUnicode(this.randomEmoji, this.twemojiOptions);
        }
    },
    created() {
        this.twemojiOptions = {
            base: this.twemojiPath,
            ext: this.twemojiExtension,
            size: this.twemojiFolder
        };
        if (this.recentEmojisFeat) {
            this.setRecentEmojis();
        }
        this.buildEmojiPack();
        this.emojiListActive = this.emojiPack[0].emojiList;
        this.setRandomEmoji();
    },
    methods: {
        triggerShowEmoji() {
            this.showEmoji = false;
            setTimeout(() => (this.showEmoji = true));
        },
        buildEmojiPack() {
            this.emojiPack = EmojiServiceImport.getEmojiImgArrayFromEmojiPack(this.emojiData, this.twemojiOptions);
        },
        onMouseEnterEmojiBtn() {
            if (this.isPointerOnEmojiBtn === false) {
                this.isPointerOnEmojiBtn = true;
                this.setRandomEmoji();
            }
        },
        onMouseLeaveEmojiBtn() {
            if (this.isPointerOnEmojiBtn === true) {
                this.isPointerOnEmojiBtn = false;
            }
        },
        setRandomEmoji() {
            let emoji = { unicode: '😄' };
            if (this.emojiPack.length !== 0) {
                emoji = this.emojiPack[0].emojiList[Math.floor(Math.random() * 20)];
            }
            this.randomEmoji = emoji.unicode;
        },
        clickEmoji(emoji) {
            var _a;
            let emojiUnicode;
            if (((_a = emoji.skins) === null || _a === void 0 ? void 0 : _a.length) !== 0 && this.skinsSelection) {
                this.skinsListActive = Array.from(emoji.skins);
                this.skinsListActive.unshift({
                    unicode: emoji.unicode,
                    img: emoji.img
                });
                this.showSkinsSelector = true;
                return;
            }
            else {
                emojiUnicode = emoji.unicode;
            }
            if (this.recentEmojisFeat) {
                this.addEmojiToRecentEmojis(emojiUnicode);
            }
            this.$emit('addTextBlur', emojiUnicode);
            this.$emit('emojiUnicodeAdded', emojiUnicode);
            this.$emit('emojiImgAdded', EmojiServiceImport.getEmojiImgFromUnicode(emojiUnicode, this.twemojiOptions));
        },
        getEmojiGroupDescription(emojiGroup) {
            const emojiGroupFound = this.emojiGroups.find((x) => x.group === emojiGroup);
            if (emojiGroupFound) {
                return EmojiServiceImport.getEmojiImgFromUnicode(emojiGroupFound.description, this.twemojiOptions);
            }
            return 'Group ' + emojiGroup;
        },
        changeEmojiListActive(index) {
            this.showSkinsSelector = false;
            this.searchTerm = '';
            this.emojiGroupActive = index;
            if (index >= 0) {
                this.emojiListActive = this.emojiPack[index].emojiList;
            }
            else if (index === -1) {
                this.emojiListActive = this.recentEmojis;
            }
        },
        getEmojiImgFromUnicode(unicode) {
            return EmojiServiceImport.getEmojiImgFromUnicode(unicode, this.twemojiOptions);
        },
        setRecentEmojis() {
            let recentEmojis = null;
            if (this.recentEmojisStorage === 'local') {
                recentEmojis = JSON.parse(localStorage.getItem(this.recentEmojiStorageName) || '[]');
            }
            else if (this.recentEmojisStorage === 'session') {
                recentEmojis = JSON.parse(sessionStorage.getItem(this.recentEmojiStorageName) || '[]');
            }
            else {
                recentEmojis = [];
            }
            if (recentEmojis !== undefined && recentEmojis !== null) {
                this.recentEmojis = recentEmojis;
            }
        },
        addEmojiToRecentEmojis(emojiUnicode) {
            const indexToRemove = this.recentEmojis.findIndex((x) => x.unicode === emojiUnicode);
            if (indexToRemove !== -1) {
                this.recentEmojis.splice(indexToRemove, 1);
                this.recentEmojis.unshift({
                    unicode: emojiUnicode,
                    img: EmojiServiceImport.getEmojiImgFromUnicode(emojiUnicode, this.twemojiOptions),
                    skins: [],
                    tags: []
                });
            }
            else {
                this.recentEmojis.unshift({
                    unicode: emojiUnicode,
                    img: EmojiServiceImport.getEmojiImgFromUnicode(emojiUnicode, this.twemojiOptions),
                    skins: [],
                    tags: []
                });
            }
            if (this.recentEmojis.length > this.recentEmojiLimit) {
                this.recentEmojis.splice(-1, 1);
            }
            if (this.recentEmojisStorage === 'local') {
                localStorage.setItem(this.recentEmojiStorageName, JSON.stringify(this.recentEmojis));
            }
            else if (this.recentEmojisStorage === 'session') {
                sessionStorage.setItem(this.recentEmojiStorageName, JSON.stringify(this.recentEmojis));
            }
        },
        searchEmojiByTerm() {
            clearTimeout(this.searchTimeout);
            if (this.searchTerm.length > 0) {
                this.searchTimeout = setTimeout(() => {
                    this.searchEmojis = EmojiServiceImport.getEmojiImgArrayFromEmojiPackByTerm(this.emojiData, this.twemojiOptions, this.searchTerm);
                    this.emojiGroupActive = -2;
                    this.emojiListActive = this.searchEmojis;
                }, 300);
            }
            else {
                this.changeEmojiListActive(0);
            }
        }
    }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "v-popover",
    {
      attrs: {
        theme: "dropdown",
        trigger: _vm.disabled ? "manual" : _vm.triggerType,
        placement: "top",
        offset: -12,
        popperOptions: _vm.popperOptions,
        container: _vm.appendToBody ? "body" : "#btn-emoji"
      },
      scopedSlots: _vm._u([
        {
          key: "popper",
          fn: function() {
            return [
              _c(
                "div",
                {
                  style: { width: _vm.pickerWidth + "px" },
                  attrs: { id: "emoji-popup" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "scroll-min",
                      attrs: { id: "emoji-popover-header" }
                    },
                    [
                      _vm.recentEmojisFeat && _vm.recentEmojis.length !== 0
                        ? _c("span", {
                            staticClass: "emoji-tab",
                            class: { active: _vm.emojiGroupActive === -1 },
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.getEmojiImgFromUnicode("⏱️")
                              )
                            },
                            on: {
                              click: function($event) {
                                return _vm.changeEmojiListActive(-1)
                              }
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.emojiPack, function(emojiGroup, index) {
                        return _c("span", {
                          key: emojiGroup.group,
                          staticClass: "emoji-tab",
                          class: { active: _vm.emojiGroupActive === index },
                          attrs: { id: emojiGroup.group },
                          domProps: {
                            innerHTML: _vm._s(
                              _vm.getEmojiGroupDescription(emojiGroup.group)
                            )
                          },
                          on: {
                            click: function($event) {
                              return _vm.changeEmojiListActive(index)
                            }
                          }
                        })
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _vm.searchEmojisFeat
                    ? _c("div", { attrs: { id: "emoji-popover-search" } }, [
                        _c("div", { attrs: { id: "search-header" } }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.searchTerm,
                                expression: "searchTerm"
                              }
                            ],
                            attrs: { placeholder: _vm.searchEmojiPlaceholder },
                            domProps: { value: _vm.searchTerm },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.searchTerm = $event.target.value;
                                },
                                _vm.searchEmojiByTerm
                              ]
                            }
                          }),
                          _vm._v(" "),
                          _c("span", {
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.getEmojiImgFromUnicode("🔍")
                              )
                            }
                          })
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "emoji-popover-inner",
                      style: {
                        width: _vm.pickerWidth + "px",
                        maxHeight: _vm.pickerMaxHeight + "px"
                      }
                    },
                    [
                      _vm.searchTerm.length !== 0 &&
                      _vm.searchEmojis.length === 0
                        ? _c("div", [
                            _c("strong", [
                              _vm._v(_vm._s(_vm.searchEmojiNotFound))
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.emojiListActive.length !== 0
                        ? _c("div", [
                            _c(
                              "p",
                              { staticClass: "emoji-list" },
                              _vm._l(_vm.emojiListActive, function(emoji) {
                                return _c("span", {
                                  key: emoji.unicode,
                                  domProps: { innerHTML: _vm._s(emoji.img) },
                                  on: {
                                    click: function($event) {
                                      return _vm.clickEmoji(emoji)
                                    }
                                  }
                                })
                              }),
                              0
                            )
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _vm.showSkinsSelector
                    ? _c(
                        "div",
                        {
                          style: { width: _vm.pickerWidth + "px" },
                          attrs: { id: "emoji-skins-popup" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "emoji-popover-inner",
                              style: {
                                width: _vm.pickerWidth + "px",
                                maxHeight: _vm.pickerMaxHeight + "px"
                              }
                            },
                            [
                              _vm.emojiListActive.length !== 0
                                ? _c("div", [
                                    _c(
                                      "p",
                                      { staticClass: "emoji-list" },
                                      _vm._l(_vm.skinsListActive, function(
                                        emoji
                                      ) {
                                        return _c("span", {
                                          key: emoji.unicode,
                                          domProps: {
                                            innerHTML: _vm._s(emoji.img)
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.clickEmoji(emoji)
                                            }
                                          }
                                        })
                                      }),
                                      0
                                    )
                                  ])
                                : _vm._e()
                            ]
                          )
                        ]
                      )
                    : _vm._e()
                ]
              )
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c(
        "button",
        {
          attrs: { id: "btn-emoji", disabled: _vm.disabled },
          on: {
            mouseenter: function($event) {
              return _vm.onMouseEnterEmojiBtn()
            },
            mouseleave: function($event) {
              return _vm.onMouseLeaveEmojiBtn()
            }
          }
        },
        [
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showEmoji,
                expression: "showEmoji"
              }
            ],
            staticClass: "fade-in",
            domProps: { innerHTML: _vm._s(_vm.randomEmojiImg) }
          }),
          _vm._v(" "),
          _c("div", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.showEmoji,
                expression: "!showEmoji"
              }
            ],
            attrs: { id: "dummy-el" }
          })
        ]
      )
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-006ce1c6_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* Global */\nimg.emoji {\r\n  height: 1.5rem;\r\n  width: 1.5rem;\r\n  vertical-align: -0.5rem;\n}\r\n\r\n/* Parent Emoji Popover */\n#emoji-popover-header {\r\n  padding: 5px;\r\n  overflow-y: hidden;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\n}\n.emoji-popover-inner {\r\n  border-top: #bdbcbc solid 1px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\n}\r\n\r\n/* Inside Emoji Pack */\n.emoji-tab {\r\n  margin: 3px;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  padding-bottom: 8px;\r\n  cursor: pointer;\r\n  border-top: 3px solid #e6e6e6;\r\n  border-left: 3px solid #e6e6e6;\r\n  border-right: 3px solid #e6e6e6;\n}\n.emoji-tab:hover {\r\n  background-color: #bdbcbc;\r\n  border-color: #bdbcbc;\n}\n.emoji-tab.active {\r\n  background-color: #bdbcbc;\r\n  border-color: #bdbcbc;\n}\n.emoji-list {\r\n  padding: 10px;\r\n  margin: 0px;\r\n  text-align: justify;\n}\n.emoji-list > span {\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n  border-radius: 15px;\n}\n.emoji-list > span > img {\r\n  margin: 5px;\n}\n.emoji-list > span:hover {\r\n  background-color: #cacaca;\n}\r\n\r\n/* Popper Emoji */\n#btn-emoji {\r\n  -webkit-box-flex: 100;\r\n      -ms-flex-positive: 100;\r\n          flex-grow: 100;\r\n  border: none;\r\n  cursor: pointer;\r\n  height: 45px;\r\n  border-radius: 25px;\r\n  margin: 10px;\r\n  background-color: transparent;\n}\n#btn-emoji > div > img.emoji {\r\n  height: 25px;\r\n  width: 25px;\n}\n#btn-emoji > #dummy-el {\r\n  height: 25px;\r\n  width: 25px;\n}\n#btn-emoji:disabled {\r\n  opacity: 0.6;\r\n  pointer-events: none;\n}\r\n\r\n/* Search Bar */\n#emoji-popover-search {\r\n  background-color: #e6e6e6;\r\n  border-radius: 3px;\r\n  margin-bottom: 5px;\n}\n#emoji-popover-search > #search-header {\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\n}\n#emoji-popover-search > #search-header > input {\r\n  -webkit-box-flex: 90;\r\n      -ms-flex-positive: 90;\r\n          flex-grow: 90;\r\n  padding: 5px;\r\n  margin-left: 5px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  background-color: #fafafa;\n}\n#emoji-popover-search > #search-header > span {\r\n  -webkit-box-flex: 10;\r\n      -ms-flex-positive: 10;\r\n          flex-grow: 10;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: transparent;\n}\r\n\r\n/** Cursor */\n.clickable {\r\n  cursor: pointer;\n}\r\n\r\n/*Vue Tooltip / Popover Styles */\n.v-popper__wrapper > .v-popper__inner {\r\n  padding: 0;\r\n  border: 3px #fafafa solid;\n}\r\n\r\n/** Transition - Fade */\n.fade-in {\r\n  opacity: 1;\r\n  -webkit-animation-name: fadeInOpacity;\r\n          animation-name: fadeInOpacity;\r\n  -webkit-animation-iteration-count: 1;\r\n          animation-iteration-count: 1;\r\n  -webkit-animation-timing-function: ease-in;\r\n          animation-timing-function: ease-in;\r\n  -webkit-animation-duration: 0.3s;\r\n          animation-duration: 0.3s;\n}\n@-webkit-keyframes fadeInOpacity {\n0% {\r\n    opacity: 0.4;\n}\n50% {\r\n    opacity: 0.8;\n}\n100% {\r\n    opacity: 1;\n}\n}\n@keyframes fadeInOpacity {\n0% {\r\n    opacity: 0.4;\n}\n50% {\r\n    opacity: 0.8;\n}\n100% {\r\n    opacity: 1;\n}\n}\r\n", map: {"version":3,"sources":["C:\\Users\\kevin\\Desktop\\Projects\\vue-twemoji-picker\\src\\components\\TwemojiPicker.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0GA,WAAA;AACA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;AACA;;AAEA,yBAAA;AACA;EACA,YAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;AACA;AAEA;EACA,6BAAA;EACA,gBAAA;EACA,kBAAA;AACA;;AAEA,sBAAA;AACA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,mBAAA;EACA,eAAA;EACA,6BAAA;EACA,8BAAA;EACA,+BAAA;AACA;AAEA;EACA,yBAAA;EACA,qBAAA;AACA;AAEA;EACA,yBAAA;EACA,qBAAA;AACA;AAEA;EACA,aAAA;EACA,WAAA;EACA,mBAAA;AACA;AAEA;EACA,eAAA;EACA,eAAA;EACA,mBAAA;AACA;AAEA;EACA,WAAA;AACA;AAEA;EACA,yBAAA;AACA;;AAEA,iBAAA;AACA;EACA,qBAAA;MAAA,sBAAA;UAAA,cAAA;EACA,YAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,YAAA;EACA,6BAAA;AACA;AAEA;EACA,YAAA;EACA,WAAA;AACA;AAEA;EACA,YAAA;EACA,WAAA;AACA;AAEA;EACA,YAAA;EACA,oBAAA;AACA;;AAEA,eAAA;AACA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;AACA;AAEA;EACA,gBAAA;EACA,mBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,8BAAA;EAAA,6BAAA;MAAA,uBAAA;UAAA,mBAAA;AACA;AAEA;EACA,oBAAA;MAAA,qBAAA;UAAA,aAAA;EACA,YAAA;EACA,gBAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;AACA;AAEA;EACA,oBAAA;MAAA,qBAAA;UAAA,aAAA;EACA,kBAAA;EACA,YAAA;EACA,6BAAA;AACA;;AAEA,YAAA;AACA;EACA,eAAA;AACA;;AAEA,gCAAA;AACA;EACA,UAAA;EACA,yBAAA;AACA;;AAEA,uBAAA;AACA;EACA,UAAA;EACA,qCAAA;UAAA,6BAAA;EACA,oCAAA;UAAA,4BAAA;EACA,0CAAA;UAAA,kCAAA;EACA,gCAAA;UAAA,wBAAA;AACA;AAEA;AACA;IACA,YAAA;AACA;AACA;IACA,YAAA;AACA;AACA;IACA,UAAA;AACA;AACA;AAVA;AACA;IACA,YAAA;AACA;AACA;IACA,YAAA;AACA;AACA;IACA,UAAA;AACA;AACA","file":"TwemojiPicker.vue","sourcesContent":["<template>\r\n  <v-popover\r\n    theme=\"dropdown\"\r\n    :trigger=\"disabled ? 'manual' : triggerType\"\r\n    placement=\"top\"\r\n    :offset=\"-12\"\r\n    :popperOptions=\"popperOptions\"\r\n    :container=\"appendToBody ? 'body' : '#btn-emoji'\"\r\n  >\r\n    <template #popper>\r\n      <div id=\"emoji-popup\" :style=\"{ width: pickerWidth + 'px' }\">\r\n        <div id=\"emoji-popover-header\" class=\"scroll-min\">\r\n          <span\r\n            v-if=\"recentEmojisFeat && recentEmojis.length !== 0\"\r\n            v-html=\"getEmojiImgFromUnicode('⏱️')\"\r\n            class=\"emoji-tab\"\r\n            @click=\"changeEmojiListActive(-1)\"\r\n            :class=\"{ active: emojiGroupActive === -1 }\"\r\n          ></span>\r\n          <span\r\n            v-for=\"(emojiGroup, index) in emojiPack\"\r\n            :key=\"emojiGroup.group\"\r\n            :id=\"emojiGroup.group\"\r\n            v-html=\"getEmojiGroupDescription(emojiGroup.group)\"\r\n            class=\"emoji-tab\"\r\n            @click=\"changeEmojiListActive(index)\"\r\n            :class=\"{ active: emojiGroupActive === index }\"\r\n          >\r\n          </span>\r\n        </div>\r\n\r\n        <div id=\"emoji-popover-search\" v-if=\"searchEmojisFeat\">\r\n          <div id=\"search-header\">\r\n            <input\r\n              @input=\"searchEmojiByTerm\"\r\n              :placeholder=\"searchEmojiPlaceholder\"\r\n              v-model=\"searchTerm\"\r\n            />\r\n            <span v-html=\"getEmojiImgFromUnicode('🔍')\"></span>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class=\"emoji-popover-inner\"\r\n          :style=\"{\r\n            width: pickerWidth + 'px',\r\n            maxHeight: pickerMaxHeight + 'px'\r\n          }\"\r\n        >\r\n          <div v-if=\"searchTerm.length !== 0 && searchEmojis.length === 0\">\r\n            <strong>{{ searchEmojiNotFound }}</strong>\r\n          </div>\r\n\r\n          <div v-if=\"emojiListActive.length !== 0\">\r\n            <p class=\"emoji-list\">\r\n              <span\r\n                v-for=\"emoji in emojiListActive\"\r\n                :key=\"emoji.unicode\"\r\n                v-html=\"emoji.img\"\r\n                @click=\"clickEmoji(emoji)\"\r\n              >\r\n              </span>\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          id=\"emoji-skins-popup\"\r\n          :style=\"{ width: pickerWidth + 'px' }\"\r\n          v-if=\"showSkinsSelector\"\r\n        >\r\n          <div\r\n            class=\"emoji-popover-inner\"\r\n            :style=\"{\r\n              width: pickerWidth + 'px',\r\n              maxHeight: pickerMaxHeight + 'px'\r\n            }\"\r\n          >\r\n            <div v-if=\"emojiListActive.length !== 0\">\r\n              <p class=\"emoji-list\">\r\n                <span\r\n                  v-for=\"emoji in skinsListActive\"\r\n                  :key=\"emoji.unicode\"\r\n                  v-html=\"emoji.img\"\r\n                  @click=\"clickEmoji(emoji)\"\r\n                >\r\n                </span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </template>\r\n\r\n    <button\r\n      id=\"btn-emoji\"\r\n      @mouseenter=\"onMouseEnterEmojiBtn()\"\r\n      @mouseleave=\"onMouseLeaveEmojiBtn()\"\r\n      :disabled=\"disabled\"\r\n    >\r\n      <div v-show=\"showEmoji\" v-html=\"randomEmojiImg\" class=\"fade-in\"></div>\r\n      <div v-show=\"!showEmoji\" id=\"dummy-el\"></div>\r\n    </button>\r\n  </v-popover>\r\n</template>\r\n<style lang=\"css\">\r\n/* Global */\r\nimg.emoji {\r\n  height: 1.5rem;\r\n  width: 1.5rem;\r\n  vertical-align: -0.5rem;\r\n}\r\n\r\n/* Parent Emoji Popover */\r\n#emoji-popover-header {\r\n  padding: 5px;\r\n  overflow-y: hidden;\r\n  overflow-x: auto;\r\n  white-space: nowrap;\r\n}\r\n\r\n.emoji-popover-inner {\r\n  border-top: #bdbcbc solid 1px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n/* Inside Emoji Pack */\r\n.emoji-tab {\r\n  margin: 3px;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  padding-bottom: 8px;\r\n  cursor: pointer;\r\n  border-top: 3px solid #e6e6e6;\r\n  border-left: 3px solid #e6e6e6;\r\n  border-right: 3px solid #e6e6e6;\r\n}\r\n\r\n.emoji-tab:hover {\r\n  background-color: #bdbcbc;\r\n  border-color: #bdbcbc;\r\n}\r\n\r\n.emoji-tab.active {\r\n  background-color: #bdbcbc;\r\n  border-color: #bdbcbc;\r\n}\r\n\r\n.emoji-list {\r\n  padding: 10px;\r\n  margin: 0px;\r\n  text-align: justify;\r\n}\r\n\r\n.emoji-list > span {\r\n  font-size: 15px;\r\n  cursor: pointer;\r\n  border-radius: 15px;\r\n}\r\n\r\n.emoji-list > span > img {\r\n  margin: 5px;\r\n}\r\n\r\n.emoji-list > span:hover {\r\n  background-color: #cacaca;\r\n}\r\n\r\n/* Popper Emoji */\r\n#btn-emoji {\r\n  flex-grow: 100;\r\n  border: none;\r\n  cursor: pointer;\r\n  height: 45px;\r\n  border-radius: 25px;\r\n  margin: 10px;\r\n  background-color: transparent;\r\n}\r\n\r\n#btn-emoji > div > img.emoji {\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\n#btn-emoji > #dummy-el {\r\n  height: 25px;\r\n  width: 25px;\r\n}\r\n\r\n#btn-emoji:disabled {\r\n  opacity: 0.6;\r\n  pointer-events: none;\r\n}\r\n\r\n/* Search Bar */\r\n#emoji-popover-search {\r\n  background-color: #e6e6e6;\r\n  border-radius: 3px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#emoji-popover-search > #search-header {\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n}\r\n\r\n#emoji-popover-search > #search-header > input {\r\n  flex-grow: 90;\r\n  padding: 5px;\r\n  margin-left: 5px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  background-color: #fafafa;\r\n}\r\n\r\n#emoji-popover-search > #search-header > span {\r\n  flex-grow: 10;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: transparent;\r\n}\r\n\r\n/** Cursor */\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n/*Vue Tooltip / Popover Styles */\r\n.v-popper__wrapper > .v-popper__inner {\r\n  padding: 0;\r\n  border: 3px #fafafa solid;\r\n}\r\n\r\n/** Transition - Fade */\r\n.fade-in {\r\n  opacity: 1;\r\n  animation-name: fadeInOpacity;\r\n  animation-iteration-count: 1;\r\n  animation-timing-function: ease-in;\r\n  animation-duration: 0.3s;\r\n}\r\n\r\n@keyframes fadeInOpacity {\r\n  0% {\r\n    opacity: 0.4;\r\n  }\r\n  50% {\r\n    opacity: 0.8;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n</style>\r\n<script lang=\"ts\">\r\nimport Vue from 'vue';\r\nimport EmojiService from '../services/EmojiService';\r\nimport { Dropdown } from 'v-tooltip';\r\nimport 'v-tooltip/dist/v-tooltip.css';\r\nimport EmojiPack from '../interfaces/EmojiPack';\r\nimport Emoji from '../interfaces/Emoji';\r\nimport TwemojiOptions from '../interfaces/TwemojiOptions';\r\nimport PopperOptions from '../interfaces/PopperOptions';\r\nimport EmojiSkin from '../interfaces/EmojiSkin';\r\nimport EmojiGroup from '../interfaces/EmojiGroup';\r\n\r\nexport default Vue.extend({\r\n  name: 'TwemojiPicker',\r\n\r\n  components: {\r\n    'v-popover': Dropdown\r\n  },\r\n\r\n  props: {\r\n    disabled: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    pickerWidth: {\r\n      default: 250,\r\n      type: Number as () => number\r\n    },\r\n    pickerMaxHeight: {\r\n      default: 200,\r\n      type: Number as () => number\r\n    },\r\n    appendToBody: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    triggerType: {\r\n      default: 'click',\r\n      type: String as () => string,\r\n      validator: function(value) {\r\n        if (value !== 'click' && value !== 'hover') {\r\n          console.error(\r\n            'The value entered for the prop \"triggerType\" is invalid. ' +\r\n              'Valid values: \"click\" and \"hover\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    },\r\n    emojiData: {\r\n      default: () => [],\r\n      type: Array as () => Array<EmojiPack>\r\n    },\r\n    emojiGroups: {\r\n      default: () => [],\r\n      type: Array as () => Array<EmojiGroup>\r\n    },\r\n    skinsSelection: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    recentEmojisFeat: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    recentEmojisStorage: {\r\n      default: 'none',\r\n      type: String as () => string,\r\n      validator: function(value) {\r\n        if (value !== 'local' && value !== 'session' && value !== 'none') {\r\n          console.error(\r\n            'The value entered for the prop \"recentEmojisStorage\" is invalid. ' +\r\n              'Valid values: \"local\", \"session\" and \"none\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    },\r\n    recentEmojiStorageName: {\r\n      default: 'vue-recent-twemojis',\r\n      type: String as () => string\r\n    },\r\n    recentEmojiLimit: {\r\n      default: 12,\r\n      type: Number as () => number\r\n    },\r\n    searchEmojisFeat: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    searchEmojiPlaceholder: {\r\n      default: 'Search emojis.',\r\n      type: String as () => string\r\n    },\r\n    searchEmojiNotFound: {\r\n      default: 'No emojis found.',\r\n      type: String as () => string\r\n    },\r\n    twemojiPath: {\r\n      default: 'https://twemoji.maxcdn.com/2/',\r\n      type: String as () => string\r\n    },\r\n    twemojiExtension: {\r\n      default: '.png',\r\n      type: String as () => string,\r\n      validator: function(value) {\r\n        const bolValid =\r\n          ['.png', '.svg', '.jpg', '.jpeg', '.ico'].indexOf(value) !== -1;\r\n        if (bolValid === false) {\r\n          console.error(\r\n            'The value entered for the prop \"twemojiPath\" is invalid. ' +\r\n              'Valid values: \".png\", \".svg\", \".jpg\", \".jpeg\", \".ico\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    },\r\n    twemojiFolder: {\r\n      default: '72x72',\r\n      type: String as () => string\r\n    }\r\n  },\r\n\r\n  data() {\r\n    return {\r\n      showEmoji: false as boolean,\r\n      popperOptions: {\r\n        modifiers: {\r\n          flip: {\r\n            enabled: false\r\n          }\r\n        }\r\n      } as PopperOptions,\r\n      showSkinsSelector: false as boolean,\r\n      skinsListActive: [] as Array<EmojiSkin>,\r\n\r\n      emojiPack: [] as Array<EmojiPack>,\r\n      emojiListActive: [] as Array<Emoji>,\r\n      emojiGroupActive: 0 as number,\r\n\r\n      randomEmoji: '😄' as string,\r\n\r\n      isPointerOnEmojiBtn: false as boolean,\r\n      twemojiOptions: {} as TwemojiOptions,\r\n\r\n      recentEmojis: [] as Array<Emoji>,\r\n\r\n      searchTerm: '' as string,\r\n      searchEmojis: [] as Array<Emoji>,\r\n      searchTimeout: null as any\r\n    };\r\n  },\r\n\r\n  computed: {\r\n    randomEmojiImg(): string {\r\n      this.triggerShowEmoji();\r\n      return EmojiService.getEmojiImgFromUnicode(\r\n        this.randomEmoji,\r\n        this.twemojiOptions\r\n      );\r\n    }\r\n  },\r\n\r\n  created(): void {\r\n    this.twemojiOptions = {\r\n      base: this.twemojiPath,\r\n      ext: this.twemojiExtension,\r\n      size: this.twemojiFolder\r\n    };\r\n    if (this.recentEmojisFeat) {\r\n      this.setRecentEmojis();\r\n    }\r\n    this.buildEmojiPack();\r\n    this.emojiListActive = this.emojiPack[0].emojiList;\r\n    this.setRandomEmoji();\r\n  },\r\n\r\n  methods: {\r\n    triggerShowEmoji(): void {\r\n      this.showEmoji = false;\r\n      setTimeout(() => (this.showEmoji = true));\r\n    },\r\n    buildEmojiPack(): void {\r\n      this.emojiPack = EmojiService.getEmojiImgArrayFromEmojiPack(\r\n        this.emojiData,\r\n        this.twemojiOptions\r\n      );\r\n    },\r\n    onMouseEnterEmojiBtn(): void {\r\n      if (this.isPointerOnEmojiBtn === false) {\r\n        this.isPointerOnEmojiBtn = true;\r\n        this.setRandomEmoji();\r\n      }\r\n    },\r\n    onMouseLeaveEmojiBtn(): void {\r\n      if (this.isPointerOnEmojiBtn === true) {\r\n        this.isPointerOnEmojiBtn = false;\r\n      }\r\n    },\r\n    setRandomEmoji(): void {\r\n      let emoji = { unicode: '😄' };\r\n      if (this.emojiPack.length !== 0) {\r\n        emoji = this.emojiPack[0].emojiList[Math.floor(Math.random() * 20)];\r\n      }\r\n      this.randomEmoji = emoji.unicode;\r\n    },\r\n\r\n    clickEmoji(emoji: Emoji): void {\r\n      let emojiUnicode;\r\n      if (emoji.skins?.length !== 0 && this.skinsSelection) {\r\n        this.skinsListActive = Array.from(emoji.skins);\r\n        this.skinsListActive.unshift({\r\n          unicode: emoji.unicode,\r\n          img: emoji.img\r\n        });\r\n        this.showSkinsSelector = true;\r\n        return;\r\n      } else {\r\n        emojiUnicode = emoji.unicode;\r\n      }\r\n\r\n      if (this.recentEmojisFeat) {\r\n        this.addEmojiToRecentEmojis(emojiUnicode);\r\n      }\r\n\r\n      this.$emit('addTextBlur', emojiUnicode);\r\n      this.$emit('emojiUnicodeAdded', emojiUnicode);\r\n      this.$emit(\r\n        'emojiImgAdded',\r\n        EmojiService.getEmojiImgFromUnicode(emojiUnicode, this.twemojiOptions)\r\n      );\r\n    },\r\n\r\n    getEmojiGroupDescription(emojiGroup: number): string {\r\n      const emojiGroupFound = this.emojiGroups.find(\r\n        (x: EmojiGroup) => x.group === emojiGroup\r\n      );\r\n      if (emojiGroupFound) {\r\n        return EmojiService.getEmojiImgFromUnicode(\r\n          emojiGroupFound.description,\r\n          this.twemojiOptions\r\n        );\r\n      }\r\n      return 'Group ' + emojiGroup;\r\n    },\r\n\r\n    changeEmojiListActive(index: number): void {\r\n      this.showSkinsSelector = false;\r\n      this.searchTerm = '';\r\n      this.emojiGroupActive = index;\r\n      if (index >= 0) {\r\n        this.emojiListActive = this.emojiPack[index].emojiList;\r\n      } else if (index === -1) {\r\n        this.emojiListActive = this.recentEmojis;\r\n      }\r\n    },\r\n\r\n    getEmojiImgFromUnicode(unicode: string): string {\r\n      return EmojiService.getEmojiImgFromUnicode(unicode, this.twemojiOptions);\r\n    },\r\n\r\n    setRecentEmojis(): void {\r\n      let recentEmojis = null;\r\n      if (this.recentEmojisStorage === 'local') {\r\n        recentEmojis = JSON.parse(\r\n          localStorage.getItem(this.recentEmojiStorageName) || '[]'\r\n        );\r\n      } else if (this.recentEmojisStorage === 'session') {\r\n        recentEmojis = JSON.parse(\r\n          sessionStorage.getItem(this.recentEmojiStorageName) || '[]'\r\n        );\r\n      } else {\r\n        recentEmojis = [];\r\n      }\r\n\r\n      if (recentEmojis !== undefined && recentEmojis !== null) {\r\n        this.recentEmojis = recentEmojis;\r\n      }\r\n    },\r\n    addEmojiToRecentEmojis(emojiUnicode: string): void {\r\n      const indexToRemove = this.recentEmojis.findIndex(\r\n        (x: Emoji) => x.unicode === emojiUnicode\r\n      );\r\n      if (indexToRemove !== -1) {\r\n        this.recentEmojis.splice(indexToRemove, 1);\r\n        this.recentEmojis.unshift({\r\n          unicode: emojiUnicode,\r\n          img: EmojiService.getEmojiImgFromUnicode(\r\n            emojiUnicode,\r\n            this.twemojiOptions\r\n          ),\r\n          skins: [],\r\n          tags: []\r\n        });\r\n      } else {\r\n        this.recentEmojis.unshift({\r\n          unicode: emojiUnicode,\r\n          img: EmojiService.getEmojiImgFromUnicode(\r\n            emojiUnicode,\r\n            this.twemojiOptions\r\n          ),\r\n          skins: [],\r\n          tags: []\r\n        });\r\n      }\r\n\r\n      if (this.recentEmojis.length > this.recentEmojiLimit) {\r\n        this.recentEmojis.splice(-1, 1);\r\n      }\r\n\r\n      if (this.recentEmojisStorage === 'local') {\r\n        localStorage.setItem(\r\n          this.recentEmojiStorageName,\r\n          JSON.stringify(this.recentEmojis)\r\n        );\r\n      } else if (this.recentEmojisStorage === 'session') {\r\n        sessionStorage.setItem(\r\n          this.recentEmojiStorageName,\r\n          JSON.stringify(this.recentEmojis)\r\n        );\r\n      }\r\n    },\r\n\r\n    searchEmojiByTerm() {\r\n      clearTimeout(this.searchTimeout);\r\n      if (this.searchTerm.length > 0) {\r\n        this.searchTimeout = setTimeout(() => {\r\n          this.searchEmojis = EmojiService.getEmojiImgArrayFromEmojiPackByTerm(\r\n            this.emojiData,\r\n            this.twemojiOptions,\r\n            this.searchTerm\r\n          );\r\n          this.emojiGroupActive = -2;\r\n          this.emojiListActive = this.searchEmojis;\r\n        }, 300);\r\n      } else {\r\n        this.changeEmojiListActive(0);\r\n      }\r\n    }\r\n  }\r\n});\r\n</script>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

var TextareaParserImport = {
    replaceEmojiWithAltAttribute(text) {
        return text.replace(/<img class="emoji".*?alt="(.*?)"[^>]+>/g, '$1');
    },
    unescapeHtml(text) {
        return text
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'");
    },
    escapeHTML(text) {
        var _a;
        const divEscapedHtml = document.createElement('div');
        const escapedHtmlTextNode = divEscapedHtml.appendChild(document.createTextNode(text));
        const escapedHtml = escapedHtmlTextNode.parentNode;
        const escapedHtmlContent = escapedHtml.innerHTML;
        escapedHtml.removeChild(escapedHtmlTextNode);
        (_a = divEscapedHtml.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(divEscapedHtml);
        // eslint-disable-next-line
        return escapedHtmlContent;
    }
};

var script$1 = Vue.extend({
    name: 'SendIconImg'
});

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("img", {
    attrs: {
      src:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAflBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCtoPsAAAAKXRSTlMADQ/78CgT7NLzy8WypJaBcV9XUCAXPTva1p2QiGEz4M26qnlmRDYkCH5CaGIAAAEHSURBVFjD7ZdbDoIwEEW1LVhAK1pBFFB82/1v0A9jJjEhVm9N5oOzgJM+bqczo4EBfow3NpDIOZeLQCIn0ziA6EnVwqIXah6DImIWgSIiWaMiUhlUREx3oIjQFhUR+TiEiFKKiIhqgYsopbCIUgqKCOWTUuF8UAYXUUpBEdFZVETkAhMRMiv6TEV0XdSZ9HdtPqR0dTk3x3Tio5p4pXS1bA56r/CUktDoRMr+ZZWjL7iLImq3uiel9Q/l71YuT9vs/QTltAwuwreGH/b6L9ePBxJ/IvijZVRGOsuo1CoT6Dti9EGqecyniZCpYNRoacuoGU0Mp4Z9FjEaaqqW0+CXC07D8cAAEx5sROBoZAawIAAAAABJRU5ErkJggg=="
    }
  })
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

var script$2 = Vue.extend({
    name: 'TwemojiTextarea',
    components: {
        'twemoji-picker': __vue_component__,
        'send-icon-img': __vue_component__$1
    },
    props: {
        // ** Picker Props **/
        pickerWidth: {
            default: 250,
            type: Number
        },
        pickerMaxHeight: {
            default: 200,
            type: Number
        },
        appendToBody: {
            default: false,
            type: Boolean
        },
        triggerType: {
            default: 'click',
            type: String,
            validator: function (value) {
                if (value !== 'click' && value !== 'hover') {
                    console.error('The value entered for the prop "triggerType" is invalid. ' +
                        'Valid values: "click" and "hover".');
                }
                return true;
            }
        },
        emojiData: {
            default: () => [],
            type: Array
        },
        emojiGroups: {
            default: () => [],
            type: Array
        },
        skinsSelection: {
            default: false,
            type: Boolean
        },
        recentEmojisFeat: {
            default: false,
            type: Boolean
        },
        recentEmojisStorage: {
            default: 'none',
            type: String,
            validator: function (value) {
                if (value !== 'local' && value !== 'session' && value !== 'none') {
                    console.error('The value entered for the prop "recentEmojisStorage" is invalid. ' +
                        'Valid values: "local", "session" and "none".');
                }
                return true;
            }
        },
        recentEmojiStorageName: {
            default: 'vue-recent-twemojis',
            type: String
        },
        recentEmojiLimit: {
            default: 12,
            type: Number
        },
        searchEmojisFeat: {
            default: false,
            type: Boolean
        },
        searchEmojiPlaceholder: {
            default: 'Search emojis.',
            type: String
        },
        searchEmojiNotFound: {
            default: 'No emojis found.',
            type: String
        },
        twemojiPath: {
            default: 'https://twemoji.maxcdn.com/2/',
            type: String
        },
        twemojiExtension: {
            default: '.png',
            type: String,
            validator: function (value) {
                const bolValid = ['.png', '.svg', '.jpg', '.jpeg', '.ico'].indexOf(value) !== -1;
                if (bolValid === false) {
                    console.error('The value entered for the prop "twemojiPath" is invalid. ' +
                        'Valid values: ".png", ".svg", ".jpg", ".jpeg", ".ico".');
                }
                return true;
            }
        },
        twemojiFolder: {
            default: '72x72',
            type: String
        },
        // ** Textarea Props **/
        content: {
            default: '',
            type: String
        },
        enableSendBtn: {
            default: false,
            type: Boolean
        },
        disableEmojiPicker: {
            default: false,
            type: Boolean
        },
        disabled: {
            default: false,
            type: Boolean
        },
        componentColor: {
            type: String,
            default: 'cream',
            validator: function (value) {
                const bolValid = ['cream', 'cherry', 'forest', 'ocean', 'sun', 'transparent'].indexOf(value) !== -1;
                if (bolValid === false) {
                    console.error('The value entered for the prop "componentColor" is invalid. ' +
                        'Valid values: "cream", "cherry", "forest", "ocean", "sun".');
                }
                return true;
            }
        }
    },
    data() {
        return {
            savedRange: null,
            twemojiOptions: {}
        };
    },
    computed: {
        twemojiTextarea() {
            return this.$refs.twemojiTextarea;
        }
    },
    created() {
        this.twemojiOptions = {
            base: this.twemojiPath,
            ext: this.twemojiExtension,
            size: this.twemojiFolder
        };
    },
    mounted() {
        this.addText(this.content);
    },
    methods: {
        updateContent(event) {
            const targetedElement = event.target;
            let content = targetedElement.innerHTML;
            content = TextareaParserImport.replaceEmojiWithAltAttribute(content);
            content = TextareaParserImport.unescapeHtml(content);
            if (content.length !== 0 && content[content.length - 1] === '\n') {
                content = content.slice(0, -1);
            }
            this.$emit('update:content', content);
            this.$emit('contentChanged');
        },
        emitEnterKeyEvent(event) {
            this.$emit('enterKey', event);
        },
        enterKey(event) {
            if (event.shiftKey === false)
                this.emitEnterKeyEvent(event);
        },
        shiftEnterKey(event) {
            event.stopPropagation();
            event.preventDefault();
            if (this.twemojiTextarea.innerHTML === '' ||
                this.twemojiTextarea.innerHTML[this.twemojiTextarea.innerHTML.length - 1] !== '\n') {
                this.addText('\n');
                this.addText('\n');
            }
            else {
                this.addText('\n');
            }
            this.twemojiTextarea.scrollTop = this.twemojiTextarea.scrollHeight;
        },
        onPaste(pasteEvent) {
            var _a;
            let pastedData;
            pasteEvent.stopPropagation();
            pasteEvent.preventDefault();
            const clipboardData = pasteEvent.clipboardData;
            pastedData = ((_a = clipboardData) === null || _a === void 0 ? void 0 : _a.getData('Text')) || '';
            pastedData = TextareaParserImport.escapeHTML(pastedData);
            pastedData = EmojiServiceImport.getEmojiImgFromUnicode(pastedData, this.twemojiOptions);
            window.document.execCommand('insertHTML', false, pastedData);
            this.twemojiTextarea.scrollTop = this.twemojiTextarea.scrollHeight;
        },
        focus() {
            var _a, _b;
            const doc = this.twemojiTextarea;
            const childNode = doc.childNodes[0];
            doc.focus();
            if (childNode === undefined) {
                const textNode = document.createTextNode('');
                doc.appendChild(textNode);
                const range = document.createRange();
                const sel = window.getSelection();
                range.setStart(doc.childNodes[0], 0);
                range.collapse(true);
                (_a = sel) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
                (_b = sel) === null || _b === void 0 ? void 0 : _b.addRange(range);
                this.saveSelection();
            }
        },
        blur() {
            const doc = this.twemojiTextarea;
            doc.blur();
        },
        saveSelection() {
            var _a;
            if (window.getSelection) {
                this.savedRange = (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.getRangeAt(0);
            }
        },
        restoreSelection() {
            var _a, _b, _c;
            const doc = this.twemojiTextarea;
            doc.focus();
            if (this.savedRange != null) {
                if (window.getSelection) {
                    const s = window.getSelection();
                    if (((_a = s) === null || _a === void 0 ? void 0 : _a.rangeCount) || 0 > 0) {
                        (_b = s) === null || _b === void 0 ? void 0 : _b.removeAllRanges();
                    }
                    (_c = s) === null || _c === void 0 ? void 0 : _c.addRange(this.savedRange);
                }
            }
        },
        addTextBlur(text) {
            this.focus();
            text = TextareaParserImport.escapeHTML(text);
            text = EmojiServiceImport.getEmojiImgFromUnicode(text, this.twemojiOptions);
            window.document.execCommand('insertHTML', false, text);
            this.saveSelection();
            this.blur();
        },
        addText(text) {
            this.focus();
            text = TextareaParserImport.escapeHTML(text);
            text = EmojiServiceImport.getEmojiImgFromUnicode(text, this.twemojiOptions);
            window.document.execCommand('insertHTML', false, text);
            this.saveSelection();
        },
        cleanText() {
            this.twemojiTextarea.innerHTML = '';
            this.$emit('update:content', '');
        },
        emojiUnicodeAdded(unicode) {
            this.$emit('emojiUnicodeAdded', unicode);
        },
        emojiImgAdded(img) {
            this.$emit('emojiImgAdded', img);
        }
    }
});

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "twemoji-textarea-outer",
      class: "bg-" + _vm.componentColor
    },
    [
      _c("twemoji-picker", {
        attrs: {
          pickerWidth: _vm.pickerWidth,
          pickerMaxHeight: _vm.pickerMaxHeight,
          appendToBody: _vm.appendToBody,
          triggerType: _vm.triggerType,
          emojiData: _vm.emojiData,
          emojiGroups: _vm.emojiGroups,
          skinsSelection: _vm.skinsSelection,
          recentEmojisFeat: _vm.recentEmojisFeat,
          recentEmojisStorage: _vm.recentEmojisStorage,
          recentEmojiStorageName: _vm.recentEmojiStorageName,
          recentEmojiLimit: _vm.recentEmojiLimit,
          searchEmojisFeat: _vm.searchEmojisFeat,
          searchEmojiPlaceholder: _vm.searchEmojiPlaceholder,
          searchEmojiNotFound: _vm.searchEmojiNotFound,
          twemojiPath: _vm.twemojiPath,
          twemojiExtension: _vm.twemojiExtension,
          twemojiFolder: _vm.twemojiFolder,
          disabled: _vm.disableEmojiPicker
        },
        on: {
          addTextBlur: _vm.addTextBlur,
          emojiUnicodeAdded: _vm.emojiUnicodeAdded,
          emojiImgAdded: _vm.emojiImgAdded
        }
      }),
      _vm._v(" "),
      _c("div", {
        ref: "twemojiTextarea",
        staticClass: "twemojiTextarea",
        attrs: {
          id: "twemoji-textarea",
          contenteditable: _vm.disabled ? false : true
        },
        on: {
          input: _vm.updateContent,
          paste: _vm.onPaste,
          keydown: [
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              if (
                $event.ctrlKey ||
                $event.shiftKey ||
                $event.altKey ||
                $event.metaKey
              ) {
                return null
              }
              return _vm.enterKey($event)
            },
            function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              if (!$event.shiftKey) {
                return null
              }
              return _vm.shiftEnterKey($event)
            }
          ],
          mouseup: _vm.saveSelection,
          keyup: _vm.saveSelection,
          focus: _vm.restoreSelection
        }
      }),
      _vm._v(" "),
      _vm.enableSendBtn
        ? _c(
            "div",
            { attrs: { id: "send-btn" }, on: { click: _vm.emitEnterKeyEvent } },
            [_c("send-icon-img")],
            1
          )
        : _vm._e()
    ],
    1
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-6fd01612_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* Global */\n#send-btn {\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.twemoji-textarea-outer {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\r\n  border-radius: 25px;\n}\nimg.emoji {\r\n  height: 1.5rem;\r\n  width: 1.5rem;\r\n  vertical-align: -0.5rem;\n}\r\n\r\n/* Textarea */\n.twemojiTextarea {\r\n  -webkit-box-flex: 95;\r\n      -ms-flex-positive: 95;\r\n          flex-grow: 95;\r\n  -ms-flex-preferred-size: 0;\r\n      flex-basis: 0;\r\n  background-color: #fafafa;\r\n  font-size: 14px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  white-space: pre-wrap;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  border-radius: 25px;\r\n  text-align: left;\n}\n#send-btn {\r\n  cursor: pointer;\r\n  -webkit-box-flex: 5;\r\n      -ms-flex-positive: 5;\r\n          flex-grow: 5;\r\n  -ms-flex-preferred-size: 0;\r\n      flex-basis: 0;\r\n  height: 40px;\r\n  border-radius: 25px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  margin-right: 5px;\r\n  padding: 5px;\n}\n#send-btn > img {\r\n  width: 25px;\r\n  height: 25px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\n}\r\n\r\n/* Component Colors */\n.bg-cream {\r\n  background-color: #ece7e7;\n}\n.btn-cream {\r\n  background-color: #ece7e7;\n}\n.btn-cream:hover {\r\n  background-color: #ded3d3;\n}\n.bg-cherry {\r\n  background-color: #dd7e91;\n}\n.btn-cherry {\r\n  background-color: #dd7e91;\n}\n.btn-cherry:hover {\r\n  background-color: #d45e76;\n}\n.bg-forest {\r\n  background-color: #84caaf;\n}\n.btn-forest {\r\n  background-color: #84caaf;\n}\n.btn-forest:hover {\r\n  background-color: #5eba97;\n}\n.bg-ocean {\r\n  background-color: #93b8e9;\n}\n.btn-ocean {\r\n  background-color: #93b8e9;\n}\n.btn-ocean:hover {\r\n  background-color: #6b9ee1;\n}\n.bg-sun {\r\n  background-color: #d6dfb0;\n}\n.btn-sun {\r\n  background-color: #d6dfb0;\n}\n.btn-sun:hover {\r\n  background-color: #c7d392;\n}\n.btn-transparent {\r\n  background-color: transparent;\n}\n.btn-transparent:hover {\r\n  background-color: transparent;\n}\r\n", map: {"version":3,"sources":["C:\\Users\\kevin\\Desktop\\Projects\\vue-twemoji-picker\\src\\components\\TwemojiTextarea.vue"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA8CA,WAAA;AACA;EACA,6CAAA;AACA;AAEA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,8BAAA;EAAA,6BAAA;MAAA,uBAAA;UAAA,mBAAA;EACA,mBAAA;AACA;AAEA;EACA,cAAA;EACA,aAAA;EACA,uBAAA;AACA;;AAEA,aAAA;AACA;EACA,oBAAA;MAAA,qBAAA;UAAA,aAAA;EACA,0BAAA;MAAA,aAAA;EACA,yBAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,qBAAA;EACA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;AACA;AAEA;EACA,eAAA;EACA,mBAAA;MAAA,oBAAA;UAAA,YAAA;EACA,0BAAA;MAAA,aAAA;EACA,YAAA;EACA,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;AACA;AAEA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,mBAAA;AACA;;AAEA,qBAAA;AACA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,yBAAA;AACA;AAEA;EACA,6BAAA;AACA;AAEA;EACA,6BAAA;AACA","file":"TwemojiTextarea.vue","sourcesContent":["<template>\r\n  <div class=\"twemoji-textarea-outer\" :class=\"'bg-' + componentColor\">\r\n    <twemoji-picker\r\n      :pickerWidth=\"pickerWidth\"\r\n      :pickerMaxHeight=\"pickerMaxHeight\"\r\n      :appendToBody=\"appendToBody\"\r\n      :triggerType=\"triggerType\"\r\n      :emojiData=\"emojiData\"\r\n      :emojiGroups=\"emojiGroups\"\r\n      :skinsSelection=\"skinsSelection\"\r\n      :recentEmojisFeat=\"recentEmojisFeat\"\r\n      :recentEmojisStorage=\"recentEmojisStorage\"\r\n      :recentEmojiStorageName=\"recentEmojiStorageName\"\r\n      :recentEmojiLimit=\"recentEmojiLimit\"\r\n      :searchEmojisFeat=\"searchEmojisFeat\"\r\n      :searchEmojiPlaceholder=\"searchEmojiPlaceholder\"\r\n      :searchEmojiNotFound=\"searchEmojiNotFound\"\r\n      :twemojiPath=\"twemojiPath\"\r\n      :twemojiExtension=\"twemojiExtension\"\r\n      :twemojiFolder=\"twemojiFolder\"\r\n      :disabled=\"disableEmojiPicker\"\r\n      @addTextBlur=\"addTextBlur\"\r\n      @emojiUnicodeAdded=\"emojiUnicodeAdded\"\r\n      @emojiImgAdded=\"emojiImgAdded\"\r\n    ></twemoji-picker>\r\n\r\n    <div\r\n      ref=\"twemojiTextarea\"\r\n      id=\"twemoji-textarea\"\r\n      class=\"twemojiTextarea\"\r\n      :contenteditable=\"disabled ? false : true\"\r\n      @input=\"updateContent\"\r\n      @paste=\"onPaste\"\r\n      @keydown.exact.enter=\"enterKey\"\r\n      @keydown.shift.enter=\"shiftEnterKey\"\r\n      @mouseup=\"saveSelection\"\r\n      @keyup=\"saveSelection\"\r\n      @focus=\"restoreSelection\"\r\n    ></div>\r\n\r\n    <div id=\"send-btn\" @click=\"emitEnterKeyEvent\" v-if=\"enableSendBtn\">\r\n      <send-icon-img />\r\n    </div>\r\n  </div>\r\n</template>\r\n<style lang=\"css\">\r\n/* Global */\r\n#send-btn {\r\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.twemoji-textarea-outer {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  border-radius: 25px;\r\n}\r\n\r\nimg.emoji {\r\n  height: 1.5rem;\r\n  width: 1.5rem;\r\n  vertical-align: -0.5rem;\r\n}\r\n\r\n/* Textarea */\r\n.twemojiTextarea {\r\n  flex-grow: 95;\r\n  flex-basis: 0;\r\n  background-color: #fafafa;\r\n  font-size: 14px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  white-space: pre-wrap;\r\n  padding: 10px;\r\n  margin: 10px;\r\n  border-radius: 25px;\r\n  text-align: left;\r\n}\r\n\r\n#send-btn {\r\n  cursor: pointer;\r\n  flex-grow: 5;\r\n  flex-basis: 0;\r\n  height: 40px;\r\n  border-radius: 25px;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n  margin-right: 5px;\r\n  padding: 5px;\r\n}\r\n\r\n#send-btn > img {\r\n  width: 25px;\r\n  height: 25px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* Component Colors */\r\n.bg-cream {\r\n  background-color: #ece7e7;\r\n}\r\n\r\n.btn-cream {\r\n  background-color: #ece7e7;\r\n}\r\n\r\n.btn-cream:hover {\r\n  background-color: #ded3d3;\r\n}\r\n\r\n.bg-cherry {\r\n  background-color: #dd7e91;\r\n}\r\n\r\n.btn-cherry {\r\n  background-color: #dd7e91;\r\n}\r\n\r\n.btn-cherry:hover {\r\n  background-color: #d45e76;\r\n}\r\n\r\n.bg-forest {\r\n  background-color: #84caaf;\r\n}\r\n\r\n.btn-forest {\r\n  background-color: #84caaf;\r\n}\r\n\r\n.btn-forest:hover {\r\n  background-color: #5eba97;\r\n}\r\n\r\n.bg-ocean {\r\n  background-color: #93b8e9;\r\n}\r\n\r\n.btn-ocean {\r\n  background-color: #93b8e9;\r\n}\r\n\r\n.btn-ocean:hover {\r\n  background-color: #6b9ee1;\r\n}\r\n\r\n.bg-sun {\r\n  background-color: #d6dfb0;\r\n}\r\n\r\n.btn-sun {\r\n  background-color: #d6dfb0;\r\n}\r\n\r\n.btn-sun:hover {\r\n  background-color: #c7d392;\r\n}\r\n\r\n.btn-transparent {\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-transparent:hover {\r\n  background-color: transparent;\r\n}\r\n</style>\r\n<script lang=\"ts\">\r\nimport Vue from 'vue';\r\nimport TextareaParser from '../services/TextareaParser';\r\nimport EmojiService from '../services/EmojiService';\r\nimport TwemojiPicker from './TwemojiPicker.vue';\r\nimport SendIconImg from './SendIconImg.vue';\r\nimport EmojiPack from '../interfaces/EmojiPack';\r\nimport EmojiGroup from '../interfaces/EmojiGroup';\r\nimport TwemojiOptions from '../interfaces/TwemojiOptions';\r\n\r\nexport default Vue.extend({\r\n  name: 'TwemojiTextarea',\r\n\r\n  components: {\r\n    'twemoji-picker': TwemojiPicker,\r\n    'send-icon-img': SendIconImg\r\n  },\r\n\r\n  props: {\r\n    // ** Picker Props **/\r\n    pickerWidth: {\r\n      default: 250,\r\n      type: Number as () => number\r\n    },\r\n    pickerMaxHeight: {\r\n      default: 200,\r\n      type: Number as () => number\r\n    },\r\n    appendToBody: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    triggerType: {\r\n      default: 'click',\r\n      type: String as () => string,\r\n      validator: function(value) {\r\n        if (value !== 'click' && value !== 'hover') {\r\n          console.error(\r\n            'The value entered for the prop \"triggerType\" is invalid. ' +\r\n              'Valid values: \"click\" and \"hover\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    },\r\n    emojiData: {\r\n      default: () => [],\r\n      type: Array as () => Array<EmojiPack>\r\n    },\r\n    emojiGroups: {\r\n      default: () => [],\r\n      type: Array as () => Array<EmojiGroup>\r\n    },\r\n    skinsSelection: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    recentEmojisFeat: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    recentEmojisStorage: {\r\n      default: 'none',\r\n      type: String as () => string,\r\n      validator: function(value) {\r\n        if (value !== 'local' && value !== 'session' && value !== 'none') {\r\n          console.error(\r\n            'The value entered for the prop \"recentEmojisStorage\" is invalid. ' +\r\n              'Valid values: \"local\", \"session\" and \"none\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    },\r\n    recentEmojiStorageName: {\r\n      default: 'vue-recent-twemojis',\r\n      type: String as () => string\r\n    },\r\n    recentEmojiLimit: {\r\n      default: 12,\r\n      type: Number as () => number\r\n    },\r\n    searchEmojisFeat: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    searchEmojiPlaceholder: {\r\n      default: 'Search emojis.',\r\n      type: String as () => string\r\n    },\r\n    searchEmojiNotFound: {\r\n      default: 'No emojis found.',\r\n      type: String as () => string\r\n    },\r\n    twemojiPath: {\r\n      default: 'https://twemoji.maxcdn.com/2/',\r\n      type: String as () => string\r\n    },\r\n    twemojiExtension: {\r\n      default: '.png',\r\n      type: String as () => string,\r\n      validator: function(value) {\r\n        const bolValid =\r\n          ['.png', '.svg', '.jpg', '.jpeg', '.ico'].indexOf(value) !== -1;\r\n        if (bolValid === false) {\r\n          console.error(\r\n            'The value entered for the prop \"twemojiPath\" is invalid. ' +\r\n              'Valid values: \".png\", \".svg\", \".jpg\", \".jpeg\", \".ico\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    },\r\n    twemojiFolder: {\r\n      default: '72x72',\r\n      type: String as () => string\r\n    },\r\n\r\n    // ** Textarea Props **/\r\n    content: {\r\n      default: '',\r\n      type: String as () => string\r\n    },\r\n    enableSendBtn: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    disableEmojiPicker: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    disabled: {\r\n      default: false,\r\n      type: Boolean as () => boolean\r\n    },\r\n    componentColor: {\r\n      type: String as () => string,\r\n      default: 'cream',\r\n      validator: function(value) {\r\n        const bolValid =\r\n          ['cream', 'cherry', 'forest', 'ocean', 'sun', 'transparent'].indexOf(\r\n            value\r\n          ) !== -1;\r\n        if (bolValid === false) {\r\n          console.error(\r\n            'The value entered for the prop \"componentColor\" is invalid. ' +\r\n              'Valid values: \"cream\", \"cherry\", \"forest\", \"ocean\", \"sun\".'\r\n          );\r\n        }\r\n        return true;\r\n      }\r\n    }\r\n  },\r\n\r\n  data() {\r\n    return {\r\n      savedRange: null as any,\r\n      twemojiOptions: {} as TwemojiOptions\r\n    };\r\n  },\r\n\r\n  computed: {\r\n    twemojiTextarea(): HTMLElement {\r\n      return this.$refs.twemojiTextarea as HTMLElement;\r\n    }\r\n  },\r\n\r\n  created(): void {\r\n    this.twemojiOptions = {\r\n      base: this.twemojiPath,\r\n      ext: this.twemojiExtension,\r\n      size: this.twemojiFolder\r\n    };\r\n  },\r\n\r\n  mounted(): void {\r\n    this.addText(this.content);\r\n  },\r\n\r\n  methods: {\r\n    updateContent(event: Event): void {\r\n      const targetedElement = event.target as HTMLElement;\r\n      let content = targetedElement.innerHTML;\r\n      content = TextareaParser.replaceEmojiWithAltAttribute(content);\r\n      content = TextareaParser.unescapeHtml(content);\r\n      if (content.length !== 0 && content[content.length - 1] === '\\n') {\r\n        content = content.slice(0, -1);\r\n      }\r\n      this.$emit('update:content', content);\r\n      this.$emit('contentChanged');\r\n    },\r\n    emitEnterKeyEvent(event: Event): void {\r\n      this.$emit('enterKey', event);\r\n    },\r\n    enterKey(event: MouseEvent): void {\r\n      if (event.shiftKey === false) this.emitEnterKeyEvent(event);\r\n    },\r\n    shiftEnterKey(event: MouseEvent): void {\r\n      event.stopPropagation();\r\n      event.preventDefault();\r\n\r\n      if (\r\n        this.twemojiTextarea.innerHTML === '' ||\r\n        this.twemojiTextarea.innerHTML[\r\n          this.twemojiTextarea.innerHTML.length - 1\r\n        ] !== '\\n'\r\n      ) {\r\n        this.addText('\\n');\r\n        this.addText('\\n');\r\n      } else {\r\n        this.addText('\\n');\r\n      }\r\n\r\n      this.twemojiTextarea.scrollTop = this.twemojiTextarea.scrollHeight;\r\n    },\r\n    onPaste(pasteEvent: ClipboardEvent): void {\r\n      let pastedData;\r\n\r\n      pasteEvent.stopPropagation();\r\n      pasteEvent.preventDefault();\r\n      const clipboardData = pasteEvent.clipboardData;\r\n      pastedData = clipboardData?.getData('Text') || '';\r\n      pastedData = TextareaParser.escapeHTML(pastedData);\r\n      pastedData = EmojiService.getEmojiImgFromUnicode(\r\n        pastedData,\r\n        this.twemojiOptions\r\n      );\r\n\r\n      window.document.execCommand('insertHTML', false, pastedData);\r\n\r\n      this.twemojiTextarea.scrollTop = this.twemojiTextarea.scrollHeight;\r\n    },\r\n    focus(): void {\r\n      const doc = this.twemojiTextarea;\r\n      const childNode = doc.childNodes[0];\r\n      doc.focus();\r\n\r\n      if (childNode === undefined) {\r\n        const textNode = document.createTextNode('');\r\n        doc.appendChild(textNode);\r\n        const range = document.createRange();\r\n        const sel = window.getSelection();\r\n        range.setStart(doc.childNodes[0], 0);\r\n        range.collapse(true);\r\n        sel?.removeAllRanges();\r\n        sel?.addRange(range);\r\n        this.saveSelection();\r\n      }\r\n    },\r\n    blur(): void {\r\n      const doc = this.twemojiTextarea;\r\n      doc.blur();\r\n    },\r\n    saveSelection(): void {\r\n      if (window.getSelection) {\r\n        this.savedRange = window.getSelection()?.getRangeAt(0);\r\n      }\r\n    },\r\n    restoreSelection(): void {\r\n      const doc = this.twemojiTextarea;\r\n      doc.focus();\r\n      if (this.savedRange != null) {\r\n        if (window.getSelection) {\r\n          const s = window.getSelection();\r\n          if (s?.rangeCount || 0 > 0) {\r\n            s?.removeAllRanges();\r\n          }\r\n          s?.addRange(this.savedRange);\r\n        }\r\n      }\r\n    },\r\n\r\n    addTextBlur(text: string): void {\r\n      this.focus();\r\n\r\n      text = TextareaParser.escapeHTML(text);\r\n      text = EmojiService.getEmojiImgFromUnicode(text, this.twemojiOptions);\r\n\r\n      window.document.execCommand('insertHTML', false, text);\r\n      this.saveSelection();\r\n      this.blur();\r\n    },\r\n    addText(text: string): void {\r\n      this.focus();\r\n\r\n      text = TextareaParser.escapeHTML(text);\r\n      text = EmojiService.getEmojiImgFromUnicode(text, this.twemojiOptions);\r\n\r\n      window.document.execCommand('insertHTML', false, text);\r\n      this.saveSelection();\r\n    },\r\n    cleanText(): void {\r\n      this.twemojiTextarea.innerHTML = '';\r\n      this.$emit('update:content', '');\r\n    },\r\n    emojiUnicodeAdded(unicode: string): void {\r\n      this.$emit('emojiUnicodeAdded', unicode);\r\n    },\r\n    emojiImgAdded(img: string): void {\r\n      this.$emit('emojiImgAdded', img);\r\n    }\r\n  }\r\n});\r\n</script>\r\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    createInjector,
    undefined,
    undefined
  );

const TwemojiPicker = __vue_component__;
const TwemojiTextarea = __vue_component__$2;
const EmojiService = EmojiServiceImport;
const TextareaParser = TextareaParserImport;

export { EmojiService, TextareaParser, TwemojiPicker, TwemojiTextarea };
