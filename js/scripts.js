$(document).ready(function(){
    $("form#orderFormm").submit(function(event){
        event.preventDefault();

        let inputtedFullName = $("#yourName").val();
        let inputtedEmail = $("#yourEmail").val();

        $("#infoDisplay").html("Hello " +inputtedFullName+ " the cost of your Pizza is " /*+pizzaCost+*/ + ". When you have placed your Order, we will also send email Notification to " +inputtedEmail);

        $("#yourName").val();
        $("#yourEmail").val();
    });
});