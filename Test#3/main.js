// w-template tab
(function ($) {
    $(".w-template .filter li").each(function (index, elem) {
        $(elem).click(function (e) {
            console.log("hihi")
            $(".w-template .filter li.tab ").removeClass("tab");
            $(".w-template .list.tab ").removeClass("tab");
            $(elem).addClass("tab");
            $(".w-template .list")[index].classList.add("tab");
        });
    });
}(jQuery));