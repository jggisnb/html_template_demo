/********************** global varibles ****************************/
const eContent_view = document.getElementById("content_view");
let nContent_view_width = eContent_view.offsetWidth;
let nBody_width = document.body.clientWidth;

/********************** guide_sidebar ****************************/
const eWindow_expandable_menu_btn = document.querySelector("#window_expandable_menu_btn");
const eGuide_sidebar = document.querySelector(".guide_sidebar");
const nGuide_sidebar_max_width = 198;
const nGuide_sidebar_min_width = 81;
const nMin_client_width = 768;
const eGuide_a_game_item = document.getElementById("guide_a_game_item");
let eGuide_a_item = eGuide_a_game_item;
eGuide_a_item.classList.add("selected");

function set_guide_a_selected(a_item) {
    if (a_item != eGuide_a_item) {
        eGuide_a_item.classList.remove("selected");
        eGuide_a_item = a_item;
        eGuide_a_item.classList.add("selected");
    }
}

function guide_a_game_item_click(a_item) {
    set_guide_a_selected(a_item)
}

function guide_a_collection_item_click(a_item) {
    set_guide_a_selected(a_item)
}

function guide_a_history_item_click(a_item) {
    set_guide_a_selected(a_item)
}

function guide_a_publish_item_click(a_item) {
    set_guide_a_selected(a_item)
}

function guide_a_follow_item_click(a_item) {
    set_guide_a_selected(a_item)
}

eWindow_expandable_menu_btn.addEventListener("click", () => {
    eGuide_sidebar.classList.toggle("expand");
    guide_sidebar_expand();
});

function guide_sidebar_expand() {
    if (eGuide_sidebar.classList.contains("expand")) {
        eWindow_expandable_menu_btn.classList.replace("bx-menu", "bx-menu-alt-left");
        if (nBody_width > nMin_client_width) {
            eContent_view.style.left = nGuide_sidebar_max_width + "px";
        }
    } else {
        eWindow_expandable_menu_btn.classList.replace("bx-menu-alt-left", "bx-menu");
        eContent_view.style.left = nGuide_sidebar_min_width + "px";

    }
}

function adjust_guide_sideba_onresize(_width) {
    if (_width <= nMin_client_width) {
        eGuide_sidebar.classList.remove("expand");
        eContent_view.style.left = nGuide_sidebar_min_width + "px";
    }
}

function adjust_guide_sideba_onload(_width) {
    if (_width <= nMin_client_width) {
        eGuide_sidebar.classList.remove("expand");
        eContent_view.style.left = nGuide_sidebar_min_width + "px";

    } else {
        eGuide_sidebar.classList.add("expand");
        eContent_view.style.left = nGuide_sidebar_max_width + "px";

    }
}


/********************** content_view ****************************/
// recommend_option_view
// const eRecommend_option_prev = document.querySelector("#recommend_option_container .prev");
// const eRecommend_option_next = document.querySelector("#recommend_option_container .next");
// const eRecommend_option_inner = document.querySelector("#recommend_option_container .recommend_option_inner");
// const eRecommend_option_track = document.querySelector("#recommend_option_container .track");
// const eRecommend_labels = document.getElementsByClassName("recommend_label");
// const nRecommend_labels_length = eRecommend_labels.length;
//
// const nRecommend_option_spacing = 10;
//
// let nRecommend_option_index = 0;
// let nRecommend_options_offset = 0;
// let nRecommend_options_width = get_recommend_options_rest_width(nRecommend_option_index);
// let nContent_view_width72 = parseInt(nContent_view_width * 0.72);
// let nRest_recommend_options_offset = nRecommend_options_width - nContent_view_width72 - nRecommend_option_spacing;
// if(nRest_recommend_options_offset < 0) {
//     eRecommend_option_next.classList.add("hide");
// }
//
// function get_recommend_options_rest_width(start) {
//     let nRest_width = 0;
//     for (let i = start; i < nRecommend_labels_length; i++) {
//         let eLabel = eRecommend_labels[i];
//         nRest_width += eLabel.offsetWidth + nRecommend_option_spacing;
//     }
//     return nRest_width
// }
//
// function adjust_recommend_option_inner_width_onload(content_view_width) {
//     nContent_view_width72 = parseInt(content_view_width * 0.72);
//     eRecommend_option_inner.style.width = nContent_view_width72 + "px";
//     eRecommend_option_track.style.width = nRecommend_options_width + "px";
// }
//
// function adjust_recommend_option_inner_width_onresize(content_view_width) {
//     nContent_view_width72 = parseInt(content_view_width * 0.72);
//     eRecommend_option_inner.style.width = nContent_view_width72 + "px";
//     if ((nContent_view_width72 < nRecommend_options_width - nRecommend_options_offset) &&
//         (nRecommend_labels_length - 1 > nRecommend_option_index)) {
//         nRest_recommend_options_offset = nRecommend_options_width - nRecommend_options_offset - nContent_view_width72 - nRecommend_option_spacing;
//         if(nRest_recommend_options_offset > 0) {
//             eRecommend_option_next.classList.remove("hide");
//         }
//     } else {
//         eRecommend_option_next.classList.add("hide");
//         let nOffset = nRecommend_options_width - nContent_view_width72 - nRecommend_option_spacing;
//         if (nOffset > 0) {
//             nRecommend_options_offset = nOffset;
//         } else {
//             nRecommend_option_index = 0;
//             nRecommend_options_offset = 0;
//             eRecommend_option_prev.classList.remove("show");
//         }
//         eRecommend_option_track.style.transform = `translateX(-${nRecommend_options_offset}px)`;
//     }
// }
//
// function find_leftmost_recommend_option(recommend_option_index) {
//     let nTempWidth = 0;
//     let nIndex = 0;
//     for (let i = recommend_option_index; i >= 0; i--) {
//         let eLabel = eRecommend_labels[i];
//         let nTemp = nTempWidth + eLabel.offsetWidth;
//         if(i > 0){
//             nTemp += nRecommend_option_spacing;
//         }
//         if (nTemp < nContent_view_width72) {
//             nTempWidth = nTemp;
//         } else {
//             nIndex = i;
//             break;
//         }
//     }
//     return {
//         nWidth: nTempWidth,
//         nIndex: nIndex
//     };
// }
//
// function find_rightmost_recommend_option(recommend_option_index) {
//     let nTempWidth = 0;
//     let nIndex = 0;
//     for (let i = recommend_option_index; i < nRecommend_labels_length; i++) {
//         let eLabel = eRecommend_labels[i];
//         let nTemp = nTempWidth + eLabel.offsetWidth;
//         if (i < nRecommend_labels_length - 1) {
//             nTemp += nRecommend_option_spacing;
//         }
//         if (nTemp < nContent_view_width72) {
//             nTempWidth = nTemp;
//         } else {
//             nIndex = i;
//             break;
//         }
//     }
//     return {
//         nWidth: nTempWidth,
//         nIndex: nIndex
//     };
// }

// eRecommend_option_prev.addEventListener("click", () => {
//     eRecommend_option_next.classList.remove("hide");
//     let values = find_leftmost_recommend_option(nRecommend_option_index);
//     let nTempWidth = values.nWidth;
//     nRecommend_option_index = values.nIndex;
//
//     if (nRecommend_options_offset > 0) {
//         if (nRecommend_options_offset > nTempWidth && ((nRecommend_option_index > 0))) {
//             nRecommend_options_offset -= nTempWidth;
//             nRest_recommend_options_offset += nTempWidth;
//         } else {
//             nRecommend_options_offset = 0;
//             nRest_recommend_options_offset = nRecommend_options_width - nContent_view_width72 - nRecommend_option_spacing;
//             nRecommend_option_index = 0;
//             eRecommend_option_prev.classList.remove("show");
//         }
//         eRecommend_option_track.style.transform = `translateX(-${nRecommend_options_offset}px)`;
//     }
// });
//
// eRecommend_option_next.addEventListener("click", () => {
//     eRecommend_option_prev.classList.add("show");
//     let values = find_rightmost_recommend_option(nRecommend_option_index);
//     let nTempWidth = values.nWidth;
//     nRecommend_option_index = values.nIndex;
//
//     if (nTempWidth > 0) {
//         if ((nRest_recommend_options_offset > nTempWidth) && (nRecommend_option_index < nRecommend_labels_length - 1)) {
//             nRest_recommend_options_offset -= nTempWidth;
//             nRecommend_options_offset += nTempWidth;
//         } else {
//             nRecommend_options_offset += nRest_recommend_options_offset;
//             nRest_recommend_options_offset = 0;
//             nRecommend_option_index = nRecommend_labels_length - 1;
//             eRecommend_option_next.classList.add("hide");
//         }
//         eRecommend_option_track.style.transform = `translateX(-${nRecommend_options_offset}px)`;
//     }
// });

/********************** rank_container ****************************/
/* select-box */
const default_selected = document.querySelector(".default_selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

default_selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    default_selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
/********************** window ****************************/
window.addEventListener("resize", () => {
    nBody_width = document.body.clientWidth;
    nContent_view_width = eContent_view.offsetWidth;
    adjust_guide_sideba_onresize(nBody_width);
    // adjust_recommend_option_inner_width_onresize(nContent_view_width);
});

window.addEventListener("load", () => {
    nBody_width = document.body.clientWidth;
    nContent_view_width = eContent_view.offsetWidth;
    adjust_guide_sideba_onload(nBody_width);
    // adjust_recommend_option_inner_width_onload(nContent_view_width);
});