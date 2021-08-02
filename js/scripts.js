$(document).ready(function(){
    $("form#orderFormm").submit(function(event){
        event.preventDefault();

        $("#infoDisplay").show();

        let inputtedFullName = $("#yourName").val();
        let inputtedMobile = $("#yourMobile").val();
        let inputtedEmail = $("#yourEmail").val();
        

        $("#lblName").html(inputtedFullName);
        $("#lblMobile").html(inputtedMobile);
        $("#lblEmail").html(inputtedEmail);
        $("#lblPizzaSize").html();
        $("#lblPizzaCrust").html();
        $("#lblPizzaTopping").html();
        $("#lblPizzaQuantity").html();
        $("#lblPizzaCost").html();

        $("#yourName").val();
        $("#yourMobile").val();
        $("#yourEmail").val();
    });
});