describe("Fundamentals test", () => {
  // beforeEach(() => cy.visit("/fundamentals"));

  it("Should open and close the first accordion & Contains correct header text", () => {
    cy.visit("/fundamentals");
    cy.get('[data-test="fundamentals-header"]').should(
      "contain.text",
      "Testing Fundamentals"
    );
    cy.get('[data-test="testing-btn"]').should("be.visible");
    cy.get('[data-test="testing-btn"]').should("be.visible").click();
    cy.contains(/Cypress gives you various commands to help you test/i).should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-item-3"] > div[role="button"]')
      .should("be.visible")
      .focus()
      .click();
    cy.contains(/Cypress gives you various commands to help you test/i).should(
      "be.visible"
    );
  });
});
