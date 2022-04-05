it("sanity check", ()=> {
    expect(8+5).to.equal(13)
})

describe("pizza website", () => { 
    cy.visit("http://localhost:3000/")
})
it("can visit the home page", () => {
    cy.contains("Bloomtech Eats!")
})