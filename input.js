$(document).ready(function() {
	
	var phoneNumHome = $("#phone-home"),
		phoneNumCell = $("#phone-cell"),
		phoneNum = $(".phone-entry"),
		zipCode = $(".zipcode-entry"),
		numberOnly = $(".number-only");
	
	phoneNum.attr("maxlength", 10);
	zipCode.attr("maxlength", 9);
	
	numberOnly.keydown(function (e) {
		// Allow backspace, delete, tab, escape, enter
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
			//Allow Ctrl+A, Ctrl+C, Ctrl+X
			(e.keyCode == 65 && e.ctrlKey === true) ||
			(e.keyCode == 67 && e.ctrlKey === true) ||
			(e.keyCode == 88 && e.ctrlKey === true) ||
			//Allow home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
				return;
			}
			
		// Stop keypress if it is not a number
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
		
		// Insert hyphens into home phone number
		var tempStr = phoneNumHome.val();
		if (tempStr.length == 10 && (parseInt(tempStr) != NaN)) {
			var standardized = tempStr.substring(0, 3) + "-" + tempStr.substring(3, 6) + "-" + tempStr.substring(6, 10);
			phoneNumHome.val(standardized);
		};
		
		// Insert hyphens into cell phone number
		var tempStr = phoneNumCell.val();
		if (tempStr.length == 10 && (parseInt(tempStr) != NaN)) {
			var standardized = tempStr.substring(0, 3) + "-" + tempStr.substring(3, 6) + "-" + tempStr.substring(6, 10);
			phoneNumCell.val(standardized);
		};
		
		//Insert hyphens into ZIP Code
		var tempStr = zipCode.val();
		if (tempStr.length == 9 && !(tempStr.indexOf("-") > 0)) {
			var standardized = tempStr.substring(0, 5) + "-" + tempStr.substring(5, 9);
			zipCode.val(standardized);
		};	
				
	});
	
});
