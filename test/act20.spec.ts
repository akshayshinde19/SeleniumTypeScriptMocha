import assert from "assert"

describe("Testing wallet", function(){
    const tests=[
        {earned:30, spent:10, expected: 20},
        {earned:20, spent:2, expected: 18}     

    ];
    
    console.log(`My wallet initially has 0`);

    tests.forEach(({earned, spent, expected}) => {

        it(`Perform this test`, function(){
            console.log(`I had earned ${earned}`);
            console.log(`I  spent ${spent}`);
            let remaining = earned-spent;
            console.log(`I have  ${remaining}`);

            assert.equal(remaining,expected);
        });
    });


});


// Solution

// import assert from "assert";

// describe("Activity 20", function () {
//   const tests = [
//     { earned: 30, spent: 10, expected: 20 },
//     { earned: 20, spent: 2, expected: 18 },
//   ];

//   tests.forEach(({ earned, spent, expected }) => {
//     it(`should have ${expected} after I add ${earned} and spend ${spent}`, function () {
//       let wallet = 0;
//       wallet += earned;
//       wallet -= spent;
//       assert.equal(wallet, expected);
//     });
//   });
// });
