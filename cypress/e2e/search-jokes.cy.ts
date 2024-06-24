describe("Search Jokes page", () => {
  it("should have a search input, a search button, and feeling lucky button", () => {
    cy.visit("/search");

    cy.get("input[name=q]").should("be.visible");
    cy.get("button").contains("Joke Search").should("be.visible");
    cy.get("button").contains("I'm feeling lucky").should("be.visible");
  });

  it("should go to the results page when the search button is clicked", () => {
    cy.visit("/search");

    cy.get("input[name=q]").should("be.visible").type("test");
    cy.get("button").contains("Joke Search").should("be.visible").click();

    cy.url().should("include", "/search/results?q=test");
  });

  it("should go to a page containing only the first joke result when the feeling lucky button is clicked", () => {
    cy.visit("/search");

    cy.get("input[name=q]").should("be.visible").type("test");
    cy.get("button").contains("I'm feeling lucky").should("be.visible").click();

    cy.url().should("include", "/search/joke/");

    cy.get("p").should("be.visible").contains("test");
  });
});
