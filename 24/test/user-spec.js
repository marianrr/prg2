import { expect } from 'chai';
import User from "../class/user.js"
describe("User class", function() {
    let user
    beforeEach(() =>  {
user = new User("john_doe")
    })
    it("should create successfully", function() {
    expect(user).to.exist
})
it("should set username on creation", function(){
    expect(user.username).to.equal("john_doe")
})
})