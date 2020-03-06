// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  //test regex patterns for each card against cardNumber (stores true/false)
  //prefix is 38 or 39 and length is 14
  var isDiner = /^3[8-9][0-9]{12}$/g.test(cardNumber);
  //prefix is 34 or 37 and length is 15
  var isAmex = /^3[47][0-9]{13}$/g.test(cardNumber);
  //prefix is 4 and length is 13, 16 or 19
  var isVisa = /^4[0-9]{9}(\d{3}){1,3}$/g.test(cardNumber);
  //prefix is 51, 52, 53, 54, or 55 and length is 16
  var isMastercard = /^5[1-5][0-9]{14}$/g.test(cardNumber);
  //prefix is 6011, 644649 or 65 and length is 16 or 19
  var isDiscover = /^6(?:011|4[4-9]\d|5\d{2})\d{12}(\d{3}){0,1}$/g.test(cardNumber);
  //prefix is 5018, 5020 or 5038 6304 and length of 12 to 19
  var isMaestro = /(?:50(18|20|38)|6304)\d{8,15}$/g.test(cardNumber);

  //prefixs 622126-622925, 624-626, or 6282-6288 and have length of 16 to 19
  //the regex for ChinaUnionPay is way too complicated for me to figure out for the range 126-925
  var isChinaUnionPay = checkChina(cardNumber);

  //prefixes 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and have a length of 16, 18 or 19
  var isSwitch = /(?:49(03|05|11|36)\d{2}|564182|63(3110|33\d{2})|6759\d{2})\d{10}(\d{2,3})?/g.test(cardNumber);


  function checkChina(cardNumber) {
  	let start = Number(cardNumber.substring(0,2));
  	let prefix1 = Number(cardNumber.substring(2,6));
  	let prefix2 = Number(cardNumber.substring(2,3));
  	let prefix3 = Number(cardNumber.substring(2,4));
  	if (((start === 62) && ((prefix1 >= 2126 && prefix1 <= 2925) || (prefix2 >= 4 && prefix2 <= 6) || (prefix3 >= 82 && prefix3 <= 88))) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
  		return true;
  	} else {
  		return false;
  	}
  }

  //Switch & visa numbers overlap, use network with longer prefix (Switch)
  if (isSwitch && isVisa) {
  	isVisa = false;
  }


  //store all card names as key with boolean val from regex test
  var cardObj = {
  	'Diner\'s Club': isDiner,
  	'American Express': isAmex,
  	'Visa': isVisa,
  	'MasterCard': isMastercard,
  	'Discover': isDiscover,
    'Maestro': isMaestro,
    'China UnionPay': isChinaUnionPay,
    'Switch': isSwitch
  };

  //iterate over the cardObj and look for the true value, return key (card name)
  for (var card in cardObj) {
    if (cardObj[card] === true) {
      return card;
    }
  }
  
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};