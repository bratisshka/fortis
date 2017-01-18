$(function () {
    function initSize() {
        $(".till-item .tc").each(function () {
            var parh = $(this).parent().height();
            $(this).height(parh);
        });
        $(".box_mnu .panel-heading").each(function () {
            var h = $(this).height() - 3;
            var pdt = $(this).find(".dropdown-toggle");
            pdt.height(h);
        });
    }

    initSize();
    $(window).resize(function () {
        initSize();
    });
    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function () {
            return $(this).attr("src").replace(".svg", ".png");
        });
    }


    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

