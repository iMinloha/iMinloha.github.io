console.log('Hi welcome to minloha.cn');
$(document).ready(function(){
    $(".list_right").hide();
    $("#right_list").click(function(){
        $(".list_right").fadeToggle("slow");
    });
});