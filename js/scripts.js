$(document).ready(function(){
    $("form#orderFormm").submit(function(event){
        event.preventDefault();

        $("#infoDisplay").show();

        let inputtedFullName = $("#yourName").val();
        let inputtedMobile = $("#yourMobile").val();
        let inputtedEmail = $("#yourEmail").val();
        let selectedPizzaSize =$("#pizzaSize optgroup option:selected").val();
        let selectedpizzaCrust =$("#pizzaCrust optgroup option:selected").val();
        let selectedpizzaTopping =$("#pizzaTopping optgroup option:selected").val();
        let inputtedQuantity = $("#addQuantity").val();

        let pizzaSizePr = parseInt($("#pizzaSize optgroup option:selected").text());
        let pizzaCrustPr = parseInt($("#pizzaCrust optgroup option:selected").text());
        let pizzaToppingPr = parseInt($("#pizzaTopping optgroup option:selected").text());
        let addQuantityNr = parseInt($("#addQuantity").val());

        let pizzaPrice = pizzaSizePr + pizzaCrustPr + pizzaToppingPr;
        let pizzaCost = pizzaPrice * addQuantityNr
        
        

        $("#lblName").html(inputtedFullName);
        $("#lblMobile").html(inputtedMobile);
        $("#lblEmail").html(inputtedEmail);
        $("#lblPizzaSize").html(selectedPizzaSize);
        $("#lblPizzaCrust").html(selectedpizzaCrust);
        $("#lblPizzaTopping").html(selectedpizzaTopping);
        $("#lblPizzaQuantity").html(inputtedQuantity);
        $("#lblPizzaCost").html(pizzaCost);

        $("#yourName").val();
        $("#yourMobile").val();
        $("#yourEmail").val();
        $("#pizzaSize optgroup option:selected").val();
        $("#pizzaCrust optgroup option:selected").val();
        $("#pizzaTopping optgroup option:selected").val();
        $("#addQuantity").val();


        $("#pizzaSize optgroup option:selected").text();
        $("#pizzaCrust optgroup option:selected").text();
        $("#pizzaTopping optgroup option:selected").text();
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