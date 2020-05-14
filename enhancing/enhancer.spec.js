const enhancer = require('./enhancer.js');
// test away!

const item = {
    name:"april",
    enhancement: 20,
    durability: 100
}


describe("enhance unit tests", () => {
    describe("repair()", ()=> {
        it("returns new item with durability restored to 100", () => {
            expect(enhancer.repair(item).durability).toEqual(100)
        })
    })


    describe("succeed()", () => {
        it("return item's enhancement increases by 1 and if lvl is 20, lvl is not changed", () => {
            if(item.enhancement === 20){
                expect(enhancer.succeed(item).enhancement).toEqual(item.enhancement)
            } else {
                expect(enhancer.succeed(item).enhancement).toEqual(item.enhancement + 1)
            }
            
        })
        it("durability of the item is not changed", () => {
            expect(enhancer.succeed(item).durability).toEqual(item.durability)
        })
    })

    describe("fail()", () => {
        it("if the items enhancement is less than 15 then durability is decreased by 5. if enhancement lvl is 15 ormore, durability is decreased by 10", () => {
            if(item.enhancement < 15){
                expect(enhancer.fail(item).durability).toEqual(item.durability - 5)
            } else if (item.enhancement >= 15){
                expect(enhancer.fail(item).durability).toEqual(item.durability - 10)
            }
        })

        it("if the items enhancement lvl is greater than 16, enhancement lvl decreases by 1", () => {
            if(item.enhancement < 17){
                expect(enhancer.fail(item).enhancement).toEqual(item.enhancement - 1)
            }
        })
    })
})