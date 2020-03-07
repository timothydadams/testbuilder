/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   // it('Throws an error so it fails', function() {
//   //   throw new Error('Delete me!');
//   // });

//   // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//   //   // This test doesn't really test anything at all! It will pass no matter what.
//   //   var even = function(num){
//   //     return num/2 === 0;
//   //   }
//   //   return even(10) === true;
//   // });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!''Mastercard'}
//   });
// });
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') !== 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') !== 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.expect;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 54 and length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 

/*  
  var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  }) */
 
}); 

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011333355558888')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011333355558888777')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6446499998765345')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6446499998765345999')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6456499998765345')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6456499998765345999')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6466499998765345')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6466499998765345999')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6476499998765345')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6476499998765345999')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6486499998765345')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6486499998765345999')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6496499998765345')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6496499998765345999')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6546499998765345')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6546499998765345999')).to.equal('Discover');
  });

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

  var prefixes = ['5018', '5020','5038','6304'];

  for (var i = 0; i <prefixes.length; i++) {
    (function(i) {
      it(`has a prefix of ${prefixes[i]} and a length of 12`, function() {
        expect(detectNetwork(`${prefixes[i]}00001111`)).to.equal('Maestro');
      });
    
      it(`has a prefix of ${prefixes[i]} and a length of 13`, function() {
        expect(detectNetwork(`${prefixes[i]}000011112`)).to.equal('Maestro');
      });
    
      it(`has a prefix of ${prefixes[i]} and a length of 14`, function() {
        expect(detectNetwork(`${prefixes[i]}0000111123`)).to.equal('Maestro');
      });
    
      it(`has a prefix of ${prefixes[i]} and a length of 15`, function() {
        expect(detectNetwork(`${prefixes[i]}00001111234`)).to.equal('Maestro');
      });
    
      it(`has a prefix of ${prefixes[i]} and a length of 16`, function() {
        expect(detectNetwork(`${prefixes[i]}000011112345`)).to.equal('Maestro');
      });
    
      it(`has a prefix of ${prefixes[i]} and a length of 17`, function() {
        expect(detectNetwork(`${prefixes[i]}0000111123456`)).to.equal('Maestro');
      });
    
      it(`has a prefix of ${prefixes[i]} and a length of 18`, function() {
        expect(detectNetwork(`${prefixes[i]}00001111234567`)).to.equal('Maestro');
      });
    
      it(`has a prefix of ${prefixes[i]} and a length of 19`, function() {
        expect(detectNetwork(`${prefixes[i]}000011112345678`)).to.equal('Maestro');
      });

    })(i);
  }
});

describe('China', function() {
  //prefixs 622126-622925, 624-626, or 6282-6288 and have length of 16 to 19 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  
  //prefixs 622126-622925
  for (var i = 126; i < 926; i++) {
    (function(i) {
      it('has a prefix of 622' + i + ' and length of 16', function() {
        expect(detectNetwork(`622${i}9876543234`)).to.equal('China UnionPay');
      });
  
      it('has a prefix of 622' + i + ' and length of 17', function() {
        expect(detectNetwork(`622${i}98765432341`)).to.equal('China UnionPay');
      });
  
      it('has a prefix of 622' + i + ' and length of 18', function() {
        expect(detectNetwork(`622${i}987654323412`)).to.equal('China UnionPay');
      });
  
      it('has a prefix of 622' + i + ' and length of 19', function() {
        expect(detectNetwork(`622${i}9876543234123`)).to.equal('China UnionPay');
      });
    })(i);
  }

  //prefixes 624-626
  for (var j = 24; j < 27; j++) {
    (function(j) {
      it('has a prefix of 6' + j + ' and length of 16', function() {
        expect(detectNetwork(`6${j}9876543234111`)).to.equal('China UnionPay');
      });
  
      it('has a prefix of 6' + j + ' and length of 17', function() {
        expect(detectNetwork(`6${j}98765432341111`)).to.equal('China UnionPay');
      });
  
      it('has a prefix of 6' + j + ' and length of 18', function() {
        expect(detectNetwork(`6${j}987654323412111`)).to.equal('China UnionPay');
      });
  
      it('has a prefix of 6' + j + ' and length of 19', function() {
        expect(detectNetwork(`6${j}9876543234123111`)).to.equal('China UnionPay');
      });
    })(j);
  }

  //prefixes 6282-6288
  for (var k = 2; k < 9; k++) {
    (function(k) {
      it('has a prefix of 628' + k + ' and length of 16', function() {
        expect(detectNetwork(`628${k}987654323411`)).to.equal('China UnionPay');
      });

      it('has a prefix of 628' + k + ' and length of 17', function() {
        expect(detectNetwork(`628${k}9876543234111`)).to.equal('China UnionPay');
      });

      it('has a prefix of 628' + k + ' and length of 18', function() {
        expect(detectNetwork(`628${k}98765432341211`)).to.equal('China UnionPay');
      });

      it('has a prefix of 628' + k + ' and length of 19', function() {
        expect(detectNetwork(`628${k}987654323412311`)).to.equal('China UnionPay');
      });
    })(k);
  }
 
}); 

describe('Switch', function() {
  //prefixes 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and have a length of 16, 18 or 19
  // If you want to know more, check out the documentation.
  var prefixes = ['4903','4905','4911','4936','6333','6759','564182','633110'];

  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  
  for (var i = 0; i < prefixes.length; i++) {
    if (prefixes[i].length === 4) {
      (function(i) {
        it('has a prefix of ' + prefixes[i] + ' and length of 16', function() {
          expect(detectNetwork(`${prefixes[i]}123456789876`)).to.equal('Switch');
        });
    
        it('has a prefix of ' + prefixes[i] + ' and length of 18', function() {
          expect(detectNetwork(`${prefixes[i]}12345678987611`)).to.equal('Switch');
        });
        
        it('has a prefix of ' + prefixes[i] + ' and length of 19', function() {
          expect(detectNetwork(`${prefixes[i]}123456789876111`)).to.equal('Switch');
        });
      })(i);
    } else {
      (function(i) {
        it('has a prefix of ' + prefixes[i] + ' and length of 16', function() {
          expect(detectNetwork(`${prefixes[i]}0000011111`)).to.equal('Switch');
        });
    
        it('has a prefix of ' + prefixes[i] + ' and length of 18', function() {
          expect(detectNetwork(`${prefixes[i]}000001111122`)).to.equal('Switch');
        });
        
        it('has a prefix of ' + prefixes[i] + ' and length of 19', function() {
          expect(detectNetwork(`${prefixes[i]}0000011111224`)).to.equal('Switch');
        });
      })(i);
    }
  }
});

describe('Card is not recognized/supported', function() {
  //  should return 'Your card number is not supported'
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  
  it('the card number is not supported', function() {
    expect(detectNetwork(`1234567898765432`)).to.equal('Card not supported');
  });
 
});
