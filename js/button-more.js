function slHienitem(soItem, name_type_box) {
    $("." + name_type_box).hide();
    var arr = document.getElementsByClassName(name_type_box);
    for (i = 0; i < soItem; i++) {
        arr[i].style.display = "block";
    }
}

function reponsive_item_hien(name_box) {
    var width = $(window).width();

    if (width > 1580) {
        slHienitem(9, name_box);
    }
    else if (width < 1580 && width >= 1280) {
        slHienitem(9, name_box);
    }
    else if (width < 1280 && width >= 768) {
        slHienitem(8, name_box);
    }
    else {
        slHienitem(9, name_box);
    }
}

$(window).resize(function () {
    reponsive_item_hien('moreBox');
    reponsive_item_hien('moreBox-Popular');
    reponsive_item_hien('moreBox-Recommend');
    reponsive_item_hien('moreBox-Video');
});


function GetMyEle(id) {
    return document.getElementById(id);
}


function Slice(id, id_box) {

    reponsive_item_hien(id);

    

    var box = GetMyEle(id_box);
    box.lastElementChild.style.display = "none";
    var count = 1;
    GetMyEle(id_box).addEventListener("click", function () {
        if (count > 0) {
            count--;
            $("." + id + ":hidden").slice().show();
            box.firstElementChild.style.display= "none";
            box.lastElementChild.style.display = "block";
        }
        else {
            count++;
            box.firstElementChild.style.display = "block";
            box.lastElementChild.style.display = "none";
            reponsive_item_hien(id);
        }
    });

}


$(document).ready(function (d) {

    Slice('moreBox', 'loadMore-New');
    Slice('moreBox-Popular', 'loadMore-Popular');
    Slice('moreBox-Recommend', 'loadMore-Recommend');
    Slice('moreBox-Video', 'loadMore-Video');



});



