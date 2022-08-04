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
// recommend_content_view
function jcard_onclick(jcard) {
    let a = jcard.classList;
    console.log(a)
}


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