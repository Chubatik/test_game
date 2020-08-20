$(document).ready(function(){
   //Final_scene
    var bg = $(".bg");
    var logo = $("#logo");
    var table = $("#table");
    var roll = $("#roll");
    var tools = $("#tools");
    var candace = $("#candace");
    var blitzyLol = $("#blitzyLollypop");
    var btn = $("#btn");
    var spanFinal = $("#final");
    var btnReset = $("#reset");
    var shadow = $("#shadow");
//
    //Main_scene
    var bg2 = $(".bg2");
   var imgD3 = [
    '<img src="../src/main_scene/lose.png" id="dish_3"/>',
    '<img src="../src/main_scene/win_1.png" id="dish_3"/>',
    '<img src="../src/main_scene/win_2.png" id="dish_3"/>'
   ];
   var imgD2 = [
    '<img src="../src/main_scene/lose.png" id="dish_2"/>',
    '<img src="../src/main_scene/win_1.png" id="dish_2"/>',
    '<img src="../src/main_scene/win_2.png" id="dish_2"/>'
   ];
    var imgD1 = [
        '<img src="../src/main_scene/lose.png" id="dish_1"/>',
        '<img src="../src/main_scene/win_1.png" id="dish_1"/>',
        '<img src="../src/main_scene/win_2.png" id="dish_1"/>',
    ]
   
    function random(){
        return Math.floor(Math.random() * (3 - 0) + 0);
    }
    $("#led_1").click(function(){
        var img = imgD1[random()];
        $(".dish_1").append(img);
        $(this).css({"animation-duration": "2s", "animation-name":"ledAnimate"})
    });
    $("#led_2").click(function(){
       
        var img2 = imgD2[random()];
        $(".dish_2").append(img2);
        $(this).css({"animation-duration": "2s", "animation-name":"ledAnimate"})
    });
    $("#led_3").click(function(){
        var img3 = imgD3[random()];
        $(".dish_3").append(img3);
        $(this).css({"animation-duration": "2s", "animation-name":"ledAnimate"})
    });
   
    //

    //Hide final_scene elements for appearing main_scene
    /*
    bg.hide();
    logo.hide();
    table.hide();
    roll.hide();
    tools.hide();
    candace.hide();
    blitzyLol.hide();
    btn.hide();
    spanFinal.hide();
    btnReset.hide();
    shadow.hide();
    ////
    */
    //apearing main_scene
   
    bg2.show();

    ////

    //Go to main_scene
    /*btnReset.click(function(){
        $("body").fadeOut("slow");
    });*/
    ///
    //Come back to final_scene
   /*
    $("body").click(function(){
       bg2.fadeOut("slow", function(){
           bg.fadeIn(1500, function(){
               logo.fadeIn("fast");
               table.fadeIn("fast");
               roll.fadeIn("fast");
               tools.fadeIn("fast", function(){
                   candace.fadeIn("slow");
                   blitzyLol.fadeIn("slow");
                   btn.fadeIn("slow");
                   spanFinal.fadeIn("slow");
                   shadow.fadeIn("slow", function(){
                       btnReset.fadeIn("slow");
                   });
               });
           });
       });
       
   });
      ////  
    */

   

    
});