function get_common_jcarousel_template_string(value) {
    value = value.replace(/<style>/i, "");
    value = value.replace(/<\/style>/i, "");
    return `
        <style>
            .jcarousel_container {
                display: inline-flex;
            }
            .jcarousel_container .jcarousel_inner {
                margin-right: auto;
                margin-left: auto;
                overflow: hidden;
                width: 752px;
            }
            .jcarousel_container .jcarousel_inner .track{
                display: inline-flex;
                transition: all 0.3s ease;
            }
            .jcarousel_container button {
                align-items: center;
                background: none;
                border: none;
            }
        
            .jcarousel_container .prev {
                display: none;
            }
        
            .jcarousel_container .prev.show {
                display: block;
                box-shadow: -3px 0 0px var(--recommend_option_view-button-shadow-rgba) inset;
            }
        
            .jcarousel_container .next {
                display: block;
                box-shadow: 3px 0 0 var(--recommend_option_view-button-shadow-rgba) inset;
            }
        
            .jcarousel_container .next.hide {
                display: none;
            } 
            
            
            
            ${value}
        </style>
        <div class="jcarousel_container">
            <button class="prev">
                <slot name="prev_img"></slot>
            </button>
            <div class="jcarousel_inner">
                <div class="track">
                </div>
            </div>
            <button class="next">
                <slot name="next_img"></slot>
            </button>
        </div>
    `;
}


const jcarousel_label_template = document.createElement('template');

let template_string = get_common_jcarousel_template_string(`
        <style>
            .jcarousel_container .item {
                margin-right: 10px;
                background: var(--main-dark-inside);
                color: var(--main-light);
                margin-top: 6px;
                display: block;
                white-space: nowrap;
                max-width: 180px;
                overflow: hidden;
                margin-bottom: 6px;
                border-radius: 3px;
            }
            
           .jcarousel_container .item span {
                text-align: center;
                padding: 6px;
           }
           
           slot[name="prev_img"],slot[name="next_img"]{
                text-align: center;
                height: 24px;
                width: 24px;
                font-size: 21px;
                color: var(--main-dark-inside);
           }
           
        </style>
`
);
jcarousel_label_template.innerHTML = template_string;

let template_string1 = get_common_jcarousel_template_string(`
        <style>
            .jcarousel_container .item {
                width: 162px;
                flex-shrink: 0;
                height: 216px;
                margin-right: 10px;
                box-sizing: border-box;
            }
            
           .jcarousel_container .card {
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
            }
            
            .jcarousel_container .card > * {
                flex: 1;
            }
            
            .jcarousel_container .card .bottom_label {
                flex-basis: 40px;
                background-color: var(--main-dark-inside);
                background-repeat: repeat-x;
                color: var(--main-light);
                flex-grow: 0;
                padding: 10px;
                box-sizing: border-box;
            }
            
            .hovereffect {
                width: 100%;
                height: 100%;
                float: left;
                overflow: hidden;
                position: relative;
                text-align: center;
                cursor: default;
            }
            
            .hovereffect .overlay {
                width: 100%;
                height: 100%;
                position: absolute;
                overflow: hidden;
                top: 0;
                left: 0;
                opacity: 0;
                background-color: rgba(0, 0, 0, 0.5);
                -webkit-transition: var(--main-transition);
                transition: var(--main-transition);
        
            }
            
            .hovereffect img {
                width: 100%;
                height: 100%;
                display: block;
                position: relative;
                -webkit-transition: var(--main-transition);
                transition: var(--main-transition);
            }
            
            .hovereffect .top_message {
                left: 9px;
                top: 9px;
                display: block;
                position: absolute;
                z-index: 2;
            }
            
            .hovereffect .top_message span{
                background: var(--main-light);
                border-radius: 6px;
                padding-top: 3px;
                font-size: 12px;
                padding-bottom: 3px;
                padding-right: 6px;
                padding-left: 6px;
            }
            
            .hovereffect .card_collection {
                width: 33px;
                height: 33px;
                position: absolute;
                right: 6px;
                top: 9px;
            }
            
            .hovereffect a.open {
                text-decoration: none;
                display: inline-block;
                text-transform: uppercase;
                color: #fff;
                border: 1px solid #fff;
                background-color: transparent;
                opacity: 0;
                filter: alpha(opacity=0);
                -webkit-transition: var(--main-transition);
                transition: var(--main-transition);
                padding: 6px 9px;
                top: 81px;
                left: 57px;
                /*margin: 12%;*/
                /*padding: 2% 5%;*/
                position: absolute;
                /*top: 10%;*/
            }
            
            .hovereffect a.open:hover {
                box-shadow: 0 0 5px #fff;
            }
            
            .hovereffect .collection_heart:hover {
                -ms-transform: scale(1.2);
                -webkit-transform: scale(1.2);
                transform: scale(1.2);
            }
            
            .hovereffect:hover img {
                -ms-transform: scale(1.2);
                -webkit-transform: scale(1.2);
                transform: scale(1.2);
            }
            
            .hovereffect:hover .overlay {
                opacity: 1;
                filter: alpha(opacity=100);
            }
            
            .hovereffect:hover .top_message {
                opacity: 0;
                filter: alpha(opacity=0);
            }
            
            .hovereffect:hover a.open {
                opacity: 1;
                filter: alpha(opacity=100);
                -ms-transform: translatey(0);
                -webkit-transform: translatey(0);
                transform: translatey(0);
                -webkit-transition-delay: .2s;
                transition-delay: .2s;
            }
            
            slot[name="prev_img"],slot[name="next_img"] {
                text-align: center;
                height: 36px;
                width: 36px;
                font-size: 27px;
                color: var(--main-dark-inside);
            }
        </style>
`);

const filterByWord = (arr, word = []) => {
    result = {};
    for (let i = 0; i < arr.length; i++) {
        let v = arr[i]
        for (let j = 0; j < word.length; j++) {
            let w = word[j]
            if (v.search(w) != -1) {
                if (!result[w]) {
                    result[w] = []
                }
                result[w].push(v)
            }
        }
    }
    return result
    // return arr.filter(s => {
    //   return s.toLocaleLowerCase().includes(word.toLocaleLowerCase());
    // });
};

const jcarousel_hovereffectImage_simpleLabel_template = document.createElement('template');
jcarousel_hovereffectImage_simpleLabel_template.innerHTML = template_string1;
window.customElements.define('j-carousel', class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        const sMode = this.getAttribute('mode');
        if (sMode === "label") {
            this.shadowRoot.appendChild(jcarousel_label_template.content.cloneNode(true));
            let aLabel_texts = filterByWord(this.getAttributeNames(), [sMode])[sMode];
            this.shadowRoot.querySelector(".track").innerHTML = `
                ${
                aLabel_texts.map(l => `
                        <div class="item">
                            <span>${this.getAttribute(l)}</span>
                        </div>
                    `).join('')
            }
            `;
        } else if (sMode === "hovereffectImage_label_card") {
            this.shadowRoot.appendChild(jcarousel_hovereffectImage_simpleLabel_template.content.cloneNode(true));
            let keys = [(sMode + "_top_img_src").toLocaleLowerCase(),
                        (sMode + "_top_message_text").toLocaleLowerCase(),
                        (sMode + "_bottom_label_text").toLocaleLowerCase()];
            let acard_dict = filterByWord(this.getAttributeNames(), keys);
            let top_img_srcs = acard_dict[keys[0]];
            let top_message_texts = acard_dict[keys[1]];
            let bottom_label_texts = acard_dict[keys[2]];
            let srcLength = top_img_srcs.length;
            let track_innerHtml = ""
            for (let i = 0; i < srcLength; i++) {
                let top_img_src = this.getAttribute(top_img_srcs[i])
                let top_message_text = this.getAttribute(top_message_texts[i])
                let bottom_label_text = this.getAttribute(bottom_label_texts[i])
                track_innerHtml += `
                    <div class='item'> 
                        <div class="card">
                            <div class="hovereffect">
                                <img src="${top_img_src}" alt="">
                                <div class="top_message">
                                    <span>${top_message_text}</span>
                                </div>
                                <div class="overlay">
                                    <div class="card_collection">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" color="#ffffff"
                                             height="20"
                                             fill="currentColor"
                                             class="bi bi-suit-heart-fill float-end collection_heart"
                                             viewBox="0 0 16 16">
                                            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                                        </svg>
                                    </div>
                                    <a class="open" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                             fill="currentColor"
                                             class="bi bi-download" viewBox="0 0 16 16">
                                            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                                            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="bottom_label">
                                ${bottom_label_text}
                            </div>
                        </div>
                    </div>
                `
            }
            this.shadowRoot.querySelector(".track").innerHTML = track_innerHtml;
            console.log(1);
        }
    }

    connectedCallback() {
        this.ePrev = this.shadowRoot.querySelector(".jcarousel_container .prev");
        this.eNext = this.shadowRoot.querySelector(".jcarousel_container .next");
        this.eInner = this.shadowRoot.querySelector(".jcarousel_container .jcarousel_inner");
        this.eTrack = this.shadowRoot.querySelector(".jcarousel_container .track");
        this.aeItems = this.shadowRoot.querySelectorAll(".jcarousel_container .item");
        this.nItems_length = this.aeItems.length;
        this.nItem_spacing = 10;
        this.nItem_index = 0;
        this.nItems_offset = 0;
        this.nItems_width = get_items_rest_width(this);
        this.fResponsive_width_scale = parseFloat(this.getAttribute("responsive_width_scale"));
        this.eNext.addEventListener("click", () => {
            this.ePrev.classList.add("show");
            let values = find_rightmost_item(this, this.nItem_index);
            let nTempWidth = values.nWidth;
            this.nItem_index = values.nIndex;
            if (nTempWidth > 0) {
                if ((this.nRest_items_offset > nTempWidth) && (this.nItem_index < this.nItems_length - 1)) {
                    this.nRest_items_offset -= nTempWidth;
                    this.nItems_offset += nTempWidth;
                } else {
                    this.nItems_offset += this.nRest_items_offset;
                    this.nRest_items_offset = 0;
                    this.nItem_index = this.nItems_length - 1;
                    this.eNext.classList.add("hide");
                }
                this.eTrack.style.transform = `translateX(-${this.nItems_offset}px)`;
            }
        });

        this.ePrev.addEventListener("click", () => {
            this.eNext.classList.remove("hide");
            let values = find_leftmost_item(this, this.nItem_index);
            let nTempWidth = values.nWidth;
            this.nItem_index = values.nIndex;
            if (this.nItems_offset > 0) {
                if (this.nItems_offset > nTempWidth && ((this.nItem_index > 0))) {
                    this.nItems_offset -= nTempWidth;
                    this.nRest_items_offset += nTempWidth;
                } else {
                    this.nItems_offset = 0;
                    this.nRest_items_offset = this.nItems_width - this.nParentElement_scaled_width - this.nItem_spacing;
                    this.nItem_index = 0;
                    this.ePrev.classList.remove("show");
                }
                this.eTrack.style.transform = `translateX(-${this.nItems_offset}px)`;
            }
        });

        this.resizeObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                let nContent_width = entry.contentRect.width;
                run_once(this, nContent_width);
                console.log('width', nContent_view_width);
            });
        });

        this.resizeObserver.observe(this.parentElement);

        function run_once(self, content_width) {
            if (!self.nParentElement_scaled_width) {
                self.nParentElement_scaled_width = parseInt(content_width * self.fResponsive_width_scale);
                self.nRest_items_offset = self.nItems_width - self.nParentElement_scaled_width - self.nItem_spacing;
                if (self.nRest_items_offset < 0) {
                    self.eNext.classList.add("hide");
                }
                self.eInner.style.width = self.nParentElement_scaled_width + "px";
                self.eTrack.style.width = self.nItems_width + "px";
            } else {
                adjust_inner_width_onresize(self, content_width)
            }
        }

        function find_leftmost_item(self, item_index) {
            let nTempWidth = 0;
            let nIndex = 0;
            for (let i = item_index; i >= 0; i--) {
                let eItem = self.aeItems[i];
                let nTemp = nTempWidth + eItem.offsetWidth;
                if (i > 0) {
                    nTemp += self.nItem_spacing;
                }
                if (nTemp < self.nParentElement_scaled_width) {
                    nTempWidth = nTemp;
                } else {
                    nIndex = i;
                    break;
                }
            }
            return {
                nWidth: nTempWidth,
                nIndex: nIndex
            };
        }

        function find_rightmost_item(self, item_index) {
            let nTempWidth = 0;
            let nIndex = 0;
            for (let i = item_index; i < self.nItems_length; i++) {
                let eItem = self.aeItems[i];
                let nTemp = nTempWidth + eItem.offsetWidth;
                if (i < self.nItems_length - 1) {
                    nTemp += self.nItem_spacing;
                }
                if (nTemp < self.nParentElement_scaled_width) {
                    nTempWidth = nTemp;
                } else {
                    nIndex = i;
                    break;
                }
            }
            return {
                nWidth: nTempWidth,
                nIndex: nIndex
            };
        }

        function adjust_inner_width_onresize(self, content_width) {
            self.nParentElement_scaled_width = parseInt(content_width * self.fResponsive_width_scale);
            self.eInner.style.width = self.nParentElement_scaled_width + "px";
            if ((self.nParentElement_scaled_width < self.nItems_width - self.nItems_offset) &&
                (self.nItems_length - 1 > self.nItem_index)) {
                self.nRest_items_offset = self.nItems_width - self.nItems_offset - self.nParentElement_scaled_width - self.nItem_spacing;
                if (self.nRest_items_offset > 0) {
                    self.eNext.classList.remove("hide");
                }
            } else {
                self.eNext.classList.add("hide");
                let nOffset = self.nItems_width - self.nParentElement_scaled_width - self.nItem_spacing;
                if (nOffset > 0) {
                    self.nItems_offset = nOffset;
                } else {
                    self.nItem_index = 0;
                    self.nItems_offset = 0;
                    self.ePrev.classList.remove("show");
                }
                self.eTrack.style.transform = `translateX(-${self.nItems_offset}px)`;
            }
        }

        function get_items_rest_width(self) {
            let nRest_width = 0;
            for (let i = self.nItem_index; i < self.nItems_length; i++) {
                let eItem = self.aeItems[i];
                nRest_width += eItem.offsetWidth + self.nItem_spacing;
            }
            return nRest_width
        }
    }

});


