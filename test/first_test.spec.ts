import assert from "assert";


describe("Testing Math functions",function(){
    describe("Testing Root function", function(){
        it("should return 6 for sqaureRoot of 36", function(){
            assert.equal(Math.sqrt(36),6);
        })
        it("should return 6 for sqaureRoot of 25", function(){
            assert.equal(Math.sqrt(25),4);
        })
    })

    describe("Testing pow function", function(){
        it("should return 100  for pow of 10", function(){
            assert.equal(Math.pow(10,2),100);
        })
    })
})