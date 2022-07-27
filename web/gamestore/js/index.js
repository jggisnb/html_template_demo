// $(document).ready(function () {
// $(".carousel").carousel();
// $(".carousel_img").click(function() {
//     // alert($this).attr('src')
//     console.log($(this).attr("id"));
//     const t1 = $(this).children();
//     for(let i=0;i<t1.length;i++){
//         const child = t1[i];
//         console.log(child["src"]);
//     }
//
// });
// $(document).ready(function () {
//     $('.cardcol').hover(
//         function () {
//             $(this).animate({
//                 marginTop:"-=1%"
//             },200);-->
//         },-->
//         function () {
//             $(this).animate({
//                 marginTop:"0%"
//             },200);-->
//         }-->
//     )-->
// })-->
//     $(document).ready(function () {
//         $('.collection_heart').
//
//     })
// });


function hide_carousel_next_in_unfit_width(_useful_offset_width, _carousel_next) {
    if (_useful_offset_width < 0) {
        console.log("1",_useful_offset_width);
        _carousel_next.classList.add("hide");
    } else {
        _carousel_next.classList.remove("hide");
        console.log("2",_useful_offset_width);
    }
}

function get_max_visible_offset(_carouselWidth,_carousel_item_width) {
    let max_visible_offset = _carouselWidth % _carousel_item_width;
    console.log(max_visible_offset,parseInt((3 * _carousel_item_width / 4)));
    if (max_visible_offset <= parseInt((3 * _carousel_item_width / 4))) {
        max_visible_offset = parseInt(_carouselWidth / _carousel_item_width) * _carousel_item_width;
    } else {
        max_visible_offset = _carouselWidth;
    }
    return max_visible_offset
}

const carousel_prev = document.querySelector(".prev");
const carousel_next = document.querySelector(".next");
const carousel_track = document.querySelector(".track");
const carousel_track_width = carousel_track.offsetWidth;
const carousel_item_width = document.querySelector(".card-container").offsetWidth;
let carouselWidth = document.querySelector(".carousel-container").offsetWidth;
console.log(carousel_track_width);
console.log(carouselWidth);
let useful_offset_width = carousel_track_width - carouselWidth;

hide_carousel_next_in_unfit_width(useful_offset_width, carousel_next);

const rank_track = document.querySelector(".rank-track");
let rank_track_width = document.querySelector(".rank-container").offsetWidth;
let rank_index = 0;
function translateRankX(arg) {
    if(rank_index === arg){
        return;
    }
    rank_index = arg;
    console.log(`translateX(-${arg*rank_track_width}px)`);
    rank_track.style.transform = `translateX(-${arg*rank_track_width}px)`;
}

window.addEventListener("resize", () => {
    rank_track_width = document.querySelector(".rank-container").offsetWidth;
    carouselWidth = document.querySelector(".carousel-container").offsetWidth;
    useful_offset_width = carousel_track_width - carouselWidth;
    hide_carousel_next_in_unfit_width(useful_offset_width, carousel_next);
});

let total_carousel_offset = 0;

carousel_next.addEventListener("click", () => {
    max_visible_offset = get_max_visible_offset(carouselWidth,carousel_item_width);
    rest_offset = useful_offset_width - total_carousel_offset;
    if (rest_offset > max_visible_offset) {
        carousel_prev.classList.add("show");
        total_carousel_offset += max_visible_offset;
    } else {
        carousel_next.classList.add("hide");
        total_carousel_offset = useful_offset_width;
    }
    carousel_track.style.transform = `translateX(-${total_carousel_offset}px)`;

});

carousel_prev.addEventListener("click", () => {
    max_visible_offset = get_max_visible_offset(carouselWidth,carousel_item_width);
    carousel_next.classList.remove("hide");
    rest_offset = total_carousel_offset - max_visible_offset;
    if (rest_offset > 0) {
        total_carousel_offset = rest_offset;
    } else {
        total_carousel_offset = 0;
        carousel_prev.classList.remove("show");
    }
    carousel_track.style.transform = `translateX(-${total_carousel_offset}px)`;
});

// let index = 0;
// carousel_next.addEventListener("click",() => {
//     index ++;
//     carousel_prev.classList.add("show");
//     carousel_track.style.transform = `translateX(-${index * carouselWidth}px)`;
//     // total_carousel_offset = - index * carouselWidth;
//     if (carousel_track.offsetWidth - (index * carouselWidth) < carouselWidth){
//         carousel_next.classList.add("hide")
//     }
// });
// carousel_prev.addEventListener("click",() => {
//     index --;
//     carousel_next.classList.remove("hide");
//     if (index === 0){
//         carousel_prev.classList.remove("show")
//     }
//     carousel_track.style.transform = `translateX(-${index * carouselWidth}px)`;
//     // total_carousel_offset = - index * carouselWidth;
// });


let pages = 25;

document.getElementById('mypagination').innerHTML = createPagination(pages, 12);

function createPagination(pages, page) {
    let str = '<ul>';
    let active;
    let pageCutLow = page - 1;
    let pageCutHigh = page + 1;
    // Show the Previous button only if you are on a page other than the first
    if (page > 1) {
        str += '<li class="page-item previous no"><a onclick="createPagination(pages, ' + (page - 1) + ')">&laquo;</a></li>';
    }
    // Show all the pagination elements if there are less than 6 pages total
    if (pages < 6) {
        for (let p = 1; p <= pages; p++) {
            active = page == p ? "active" : "no";
            str += '<li class="' + active + '"><a onclick="createPagination(pages, ' + p + ')">' + p + '</a></li>';
        }
    }
    // Use "..." to collapse pages outside of a certain range
    else {
        // Show the very first page followed by a "..." at the beginning of the
        // pagination section (after the Previous button)
        if (page > 2) {
            str += '<li class="no page-item"><a onclick="createPagination(pages, 1)">1</a></li>';
            if (page > 3) {
                str += '<li class="out-of-range"><a onclick="createPagination(pages,' + (page - 2) + ')">...</a></li>';
            }
        }
        // Determine how many pages to show after the current page index
        if (page === 1) {
            pageCutHigh += 2;
        } else if (page === 2) {
            pageCutHigh += 1;
        }
        // Determine how many pages to show before the current page index
        if (page === pages) {
            pageCutLow -= 2;
        } else if (page === pages - 1) {
            pageCutLow -= 1;
        }
        // Output the indexes for pages that fall inside the range of pageCutLow
        // and pageCutHigh
        for (let p = pageCutLow; p <= pageCutHigh; p++) {
            if (p === 0) {
                p += 1;
            }
            if (p > pages) {
                continue
            }
            active = page == p ? "active" : "no";
            str += '<li class="page-item ' + active + '"><a onclick="createPagination(pages, ' + p + ')">' + p + '</a></li>';
        }
        // Show the very last page preceded by a "..." at the end of the pagination
        // section (before the Next button)
        if (page < pages - 1) {
            if (page < pages - 2) {
                str += '<li class="out-of-range"><a onclick="createPagination(pages,' + (page + 2) + ')">...</a></li>';
            }
            str += '<li class="page-item no"><a onclick="createPagination(pages, pages)">' + pages + '</a></li>';
        }
    }
    // Show the Next button only if you are on a page other than the last
    if (page < pages) {
        str += '<li class="page-item next no"><a onclick="createPagination(pages, ' + (page + 1) + ')">&raquo;</a></li>';
    }
    str += '</ul>';
    // Return the pagination string to be outputted in the pug templates
    document.getElementById('mypagination').innerHTML = str;
    return str;
}



