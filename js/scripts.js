$(document).ready(function(){
    $(".about").hide();
    $(".contact").hide();
    $(".services").hide();

    $(".aboutBtn").click(function(){//about
        $(".main").fadeOut(500);
        $(".about").fadeIn(500);
        $(".contact").hide();
        $(".services").hide();
        $(".footerR").hide();
      });

    $(".homeBtn").click(function(){//home
        $(".main").fadeIn(500);
        $(".about").fadeOut(500);
        $(".contact").hide();
        $(".services").hide();
        $(".footerR").show();
    });

    $(".contactBtn").click(function(){//contact
        $(".contact").fadeIn(500);
        $(".main").fadeOut(500);
        $(".about").fadeOut(500);
        $(".services").hide();
        $(".footerR").hide();
    });
    $(".servicesBtn").click(function(){//services
        $(".services").fadeIn(500);
        $(".about").fadeOut(500);
        $(".main").fadeOut(500);
        $(".contact").hide();
    });
});
