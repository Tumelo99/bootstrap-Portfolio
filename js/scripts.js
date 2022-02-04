/*!
* Start Bootstrap - Small Business v5.0.4 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
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
