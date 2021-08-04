$(document).ready(function(){
    $("form#orderFormm").submit(function(event){
        event.preventDefault();

        // SEE PIZZA COST SHOW
        $("#infoDisplay").show();

        // DELIVERY PART SHOW
        $("#infoDelivery").show();
        

        // DECLARING CUSTOMER INPUTS AND SELECTIONS
        let inputtedFullName = $("#yourName").val();
        let inputtedMobile = $("#yourMobile").val();
        let inputtedEmail = $("#yourEmail").val();
        let selectedPizzaFlavour =$("#pizzaFlavour option:selected").val();
        let selectedPizzaSize =$("#pizzaSize optgroup option:selected").val();
        let selectedpizzaCrust =$("#pizzaCrust optgroup option:selected").val();
        let selectedpizzaTopping =$("#pizzaTopping optgroup option:selected").val();
        let inputtedQuantity = $("#addQuantity").val();
        
        

        // DISPLAYING CUSTOMER INPUT AND SELECTION
        $("#lblName").html(inputtedFullName);
        $("#lblMobile").html(inputtedMobile);
        $("#lblEmail").html(inputtedEmail);
        $("#lblPizzaFlavour").html(selectedPizzaFlavour);
        $("#lblPizzaSize").html(selectedPizzaSize);
        $("#lblPizzaCrust").html(selectedpizzaCrust);
        $("#lblPizzaTopping").html(selectedpizzaTopping);
        $("#lblPizzaQuantity").html(inputtedQuantity);


        // COLLECTING CUSTOMER INPUTS AND SELECTIONS
        $("#yourName").val();
        $("#yourMobile").val();
        $("#yourEmail").val();
        $("#pizzaFlavour option:selected").val();
        $("#pizzaSize optgroup option:selected").val();
        $("#pizzaCrust optgroup option:selected").val();
        $("#pizzaTopping optgroup option:selected").val();
        $("#addQuantity").val();
    });
});



// START FUNCTION THAT PRINTS ORDER
function orderPrint(){
    let print_div = document.getElementById("infoDisplay"); //$("#infoDisplay");
    let print_area = window.open();
    print_area.document.write(print_div.innerHTML);
    print_area.document.close();
    print_area.focus();
    print_area.print();
    print_area.close();
}
// END FUNCTION THAT PRINTS ORDER



// START FUNCTION FOR DELIVERY
function orderDeliver(){
    let location = prompt("Enter your location");
    let total = (pizzaFlavour() + pizzaCrust() + pizzaTopping())*getQuantity();
    alert("Your order will be delivered to " +location+ " at an Extra cost of Ksh. 200/= \n " + " Your Overall cost: Ksh. " + (total+200) + "/=");
    alert("Our Delivery Agent will contact you in the next 5 Minutes and Delivery to be done within the next 30 Minutes. \n  Thank you for shopping with us!!!");
}

function orderNoDeliver(){
    let total = (pizzaFlavour() + pizzaCrust() + pizzaTopping())*getQuantity();
    alert("You are welcomed to pick your order at Colossal Pizza, Korogocho. From 8:00AM to 10:30PM ! \n" + "Please come with Ksh. " +total+ "/=")
    alert("Thank you for shopping with us!!!");
}
// END FUNCTION FOR DELIVERY



// START  COST CALCULATION
function pizzaFlavour(){
    let selectedPizzaSize =$("#pizzaSize optgroup option:selected").val();
    return parseInt(selectedPizzaSize);
}

function pizzaCrust(){
    let selectedpizzaCrust =$("#pizzaCrust optgroup option:selected").val();
    return parseInt(selectedpizzaCrust);
}

function pizzaTopping(){
    let selectedpizzaTopping =$("#pizzaTopping optgroup option:selected").val();
    return parseInt(selectedpizzaTopping);
}

function getQuantity(){
    let inputtedQuantity = $("#addQuantity").val();
    return parseInt(inputtedQuantity);
}

function totalAmount(){
    let total = (pizzaFlavour() + pizzaCrust() + pizzaTopping())*getQuantity();
    $("#lblPizzaCost").html(total);
}
// END  COST CALCULATION