(function() {
// 			var rent = 450;
// 				elect = 180;
// 				gas = 75;
// 				cable = 150;
// 				perPerson = rent + ((elect + gas + cable) / 3);
// 	function calcRentMatt() {
// 			return perPerson;
// 	};
// 	function calcRentAsh() {
// 			var electPaid = ((elect / 3) * 2);
// 				insurance = 160;
// 				perPerson = (rent + ((-electPaid + gas + cable) / 3)) - insurance;
// 			return perPerson;
// 	};

// var doc = document,
//     Matt = doc.getElementById("matt");
//     Ashley = doc.getElementById("ashley");
    




// Matt.innerHTML = calcRentMatt();
// Ashley.innerHTML = calcRentAsh();

 $(".input").keyup(function(){
          var rent = +$(".rent").val();
          var elect = +$(".elect").val();
          var gas = +$(".gas").val();
          var cable = +$(".cable").val();
          var insurance = +$(".insurance").val();
          var billsPerPerson = ((elect + gas + cable) / 3);
          var rentTotal = billsPerPerson + rent;
          	function calcRentMatt() {
          			var mattTotal = rentTotal.toFixed(2);
          			return mattTotal;
          	};
          	function calcRentAsh() {
          			var electPaid = ((elect / 3) * 2);
          				perPerson = (rent + ((-electPaid + gas + cable) / 3)) - insurance;
          			var ashTotal = perPerson.toFixed(2);
          			return ashTotal;
          	};
          $("#resultMatt").val(calcRentMatt());
          $("#resultAsh").val(calcRentAsh());

   });

    
}());



