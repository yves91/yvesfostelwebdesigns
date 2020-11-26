
var product = {
		product1:{
			item_cost: 2,
			item_currency: "GBP",
			item_name: "Chicken Wing(s)",
		},
		product2:{
			item_cost_2: 2,
			item_currency_2: "GBP",
			item_name_2: "Muffin(s)",
		}
		,
		product3:{
			item_cost_3: 10,
			item_currency_3: "GBP",
			item_name_3: "Beer(s)",
		}
	}	


//Function to store all data. This data will all be displayed in modal box on "Cart" button click.

function setData(){
	
	//Set quantity value of items to session storage
	sessionStorage.setItem("item_quantity", document.getElementById("quantity").value);
	sessionStorage.setItem("item_quantity_2", document.getElementById("quantity2").value);
	sessionStorage.setItem("item_quantity_3", document.getElementById("quantity3").value);
	

	//Set currency of items to session storage
	sessionStorage.setItem("item_currency", product.product1.item_currency);
	sessionStorage.setItem("item_currency_2", product.product2.item_currency_2);
	sessionStorage.setItem("item_currency_3", product.product3.item_currency_3);

	
	//Set total cost of items to session storage
	sessionStorage.setItem("item_total_cost", document.getElementById("itemTotal").value);
	sessionStorage.setItem("item_total_cost_2", document.getElementById("itemTotal2").value);
	sessionStorage.setItem("item_total_cost_3", document.getElementById("itemTotal3").value);
	
	
	//Prod 1
	var prodCost1 =	product.product1.item_cost;
	var prodQuantity1 = document.getElementById("quantity").value;
	var prodTotalValue1 = prodCost1 * prodQuantity1;
	
	document.getElementById("itemTotal").value = prodTotalValue1;
	sessionStorage.setItem("item_name", product.product1.item_name);
	//Prod 1 END

	
	//Prod 2
	var prodCost2 =	product.product2.item_cost_2;
	var prodQuantity2 = document.getElementById("quantity2").value;
	var prodTotalValue2 = prodCost2 * prodQuantity2;		

	document.getElementById("itemTotal2").value = prodTotalValue2;
	sessionStorage.setItem("item_name_2", product.product2.item_name_2);
	//Prod 2 END


	//Prod 3
	var prodCost3 =	product.product3.item_cost_3;
	var prodQuantity3 = document.getElementById("quantity3").value;
	var prodTotalValue3 = prodCost3 * prodQuantity3;		

	document.getElementById("itemTotal3").value = prodTotalValue3;
	sessionStorage.setItem("item_name_3", product.product3.item_name_3);
	//Prod 3 END
	
}


//Function open cart. Get all values and display all info.. If item value is not zero, display in shopping cart.

function openCart(){
		
	if (document.getElementById("quantity").value == 0){
		document.getElementById("cart1").style.display = "none";
		document.getElementById("userInfo").style.display = "none";
		document.getElementById("emptyCartText").style.display = "block";
		document.getElementById("submitButton").style.display = "none";
			} else if (document.getElementById("quantity").value != 0){
		document.getElementById("cart1").style.display = "block";
	}
	
	if (document.getElementById("quantity2").value == 0){
		document.getElementById("cart2").style.display = "none";
		document.getElementById("userInfo").style.display = "none";
		document.getElementById("emptyCartText").style.display = "block";
		document.getElementById("submitButton").style.display = "none";
			} else if (document.getElementById("quantity2").value != 0){
		document.getElementById("cart2").style.display = "block";
	}
	
	if (document.getElementById("quantity3").value == 0){
		document.getElementById("cart3").style.display = "none";
		document.getElementById("userInfo").style.display = "none";
		document.getElementById("emptyCartText").style.display = "block";
		document.getElementById("submitButton").style.display = "none";
			} else if (document.getElementById("quantity3").value != 0){
		document.getElementById("cart3").style.display = "block";
	}
	
	
	//If the quantity value is not equal to 0, then do not display empty cart text, but do display input details and submit button. Submit button hidden if cart is empty.
	
	if (document.getElementById("quantity").value != 0 || document.getElementById("quantity2").value != 0 || document.getElementById("quantity3").value != 0){
		document.getElementById("emptyCartText").style.display = "none";
		document.getElementById("userInfo").style.display = "block";
		document.getElementById("submitButton").style.display = "block";
	}
	
	
	//Open cart
	
	if (document.getElementById("quantity").value != 0 || document.getElementById("quantity2").value != 0 || document.getElementById("quantity3").value != 0){
	document.getElementById("goToCart").style.display = "block";
	
	document.getElementById("cart-item").innerHTML = product.product1.item_name;
	document.getElementById("cart-quantity").innerHTML = "x" + document.getElementById("quantity").value;
	document.getElementById("cart-currency").innerHTML = product.product1.item_currency + " " + Math.round(product.product1.item_cost * document.getElementById("quantity").value *100) / 100;
	
	document.getElementById("cart-item-2").innerHTML = product.product2.item_name_2;
	document.getElementById("cart-quantity-2").innerHTML = "x" + document.getElementById("quantity2").value;
	document.getElementById("cart-currency-2").innerHTML = product.product2.item_currency_2 + " " + Math.round(product.product2.item_cost_2 * document.getElementById("quantity2").value*100) / 100;
	
	document.getElementById("cart-item-3").innerHTML = product.product3.item_name_3;
	document.getElementById("cart-quantity-3").innerHTML = "x" + document.getElementById("quantity3").value;
	document.getElementById("cart-currency-3").innerHTML = product.product3.item_currency_3 + " " + Math.round(product.product3.item_cost_3 * document.getElementById("quantity3").value*100) / 100;
	}	
}
	
		
	//Pull data object price, store in HTML
	document.getElementById("unitCost").innerHTML = product.product1.item_currency + " " + Math.round(product.product1.item_cost * 100) / 100;
	document.getElementById("unitCost2").innerHTML = product.product2.item_currency_2 + " " + Math.round(product.product2.item_cost_2 * 100) / 100;
	document.getElementById("unitCost3").innerHTML = product.product3.item_currency_3 + " " + Math.round(product.product3.item_cost_3 * 100) / 100;
		

	
	function confirmPurchase(){
		if (document.getElementById("fname").value == "" && document.getElementById("lname").value == "" && document.getElementById("cardnumber").value == "" && document.getElementById("cardholder").value == "" && document.getElementById("cvvnumber").value == "" && document.getElementById("address1").value == "" && document.getElementById("address2").value == "" && document.getElementById("emailaddress").value == ""){
			alert("Please fill in all details")	
		} else if (document.getElementById("fname").value !== "" && document.getElementById("lname").value !== "" && document.getElementById("cardnumber").value !== "" && document.getElementById("cardholder").value !== "" && document.getElementById("cvvnumber").value !== "" && document.getElementById("address1").value !== "" && document.getElementById("address2").value !== "" && document.getElementById("emailaddress").value !== ""){
	
		document.getElementById("userInfo").style.display="none";
		document.getElementById("confirmationMessage").style.display="block";
		document.getElementById("cartSummary").style.display="none";	
		}
	}
	
	

	function closeCart(){
		document.getElementById("goToCart").style.display="none";
	}