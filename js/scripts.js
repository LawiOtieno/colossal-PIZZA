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

function orderPrint(){
    let print_div = document.getElementById("infoDisplay"); //$("#infoDisplay");
    let print_area = window.open();
    print_area.document.write(print_div.innerHTML);
    print_area.document.close();
    print_area.focus();
    print_area.print();
    print_area.close();
}