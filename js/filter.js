$(function () {
    var filters = [
        {
            name: "1977",
            class: "_1977"
        },
        {
            name: "Aden",
            class: "aden"
        },
        {
            name: "Brannan",
            class: "brannan"
        },
        {
            name: "Brooklyn",
            class: "brooklyn"
        },
        {
            name: "Clarendon",
            class: "clarendon"
        },
        {
            name: "Earlybird",
            class: "earlybird"
        },
        {
            name: "Gingham",
            class: "gingham"
        },
        {
            name: "Hudson",
            class: "hudson"
        },
        {
            name: "Inkwell",
            class: "inkwell"
        },
        {
            name: "Kelvin",
            class: "kelvin"
        },
        {
            name: "Lark",
            class: "lark"
        },
        {
            name: "Lo-Fi",
            class: "lofi"
        },
        {
            name: "Maven",
            class: "maven"
        },
        {
            name: "Mayfair",
            class: "mayfair"
        },
        {
            name: "Moon",
            class: "moon"
        },
        {
            name: "Nashville",
            class: "nashville"
        },
        {
            name: "Perpetua",
            class: "perpetua"
        },
        {
            name: "Reyes",
            class: "reyes"
        }
    ];

    // Rise: class="rise"
    // Slumber: class="slumber"
    // Stinson: class="stinson"
    // Toaster: class="toaster"
    // Valencia: class="valencia"
    // Walden: class="walden"
    // Willow: class="willow"
    // X-pro II: class="xpro2"}

    /* Initialise le menu déroulant des filtres */
    var $filterContainer = $("#filter-container");
    for(i in filters){
        var $figure = $("<figure/>", {
            class: "filter-container-box " + filters[i].class,
        }).appendTo($filterContainer);

        $("<img/>", {
            src: "photo.jpg"
        }).appendTo($figure);
    }

    $(".filter-container-box").click(function(){
        var filterClass = $(this).attr('class').substring(21, $(this).attr('class').length);
        $("#filter-preview-container figure").removeClass().addClass(filterClass);
    });

});
