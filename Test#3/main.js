( function ( $ ) {
    $(".w-template .filter li").each(function (index, elem) {
    $(elem).click(function (e) {
        console.log("hihi")
        $("w-template .filter li.active ").removeClass("active");
        $("w-template.list.active ").removeClass("active");
        $(elem).addClass("active");
        $("w-template .list")[index].classList.add("active");
});
});
}( jQuery ) );