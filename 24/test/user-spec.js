import { expect } from 'chai';
import User from "../class/user.js"
describe("User class", function() {
    it("should create successfully", function() {
    let user = new User()
    expect(user).to.exist
})
it("should set username on creation", function(){
    let user = new User("john_doe")
    expect(user.username).to.equal("john_doe")
})
})