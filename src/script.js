$(document).ready(function(){
   
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
    var bg2 = $(".bg2");
    
    
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
    
    bg2.show();
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
       
   })
        
    

   

    
});