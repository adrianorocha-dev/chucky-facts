describe("Search Results page", () => {
  it("should have a search input that starts with the search query value, and a search button", () => {
    cy.visit("/search/results?q=test");

    cy.get("input[name=q]").should("be.visible").should("have.value", "test");
    cy.get("button").contains("Search").should("be.visible");
  });

  it("should show the number of results and the query time", () => {
    cy.visit("/search/results?q=test");

    cy.get("p")
      .contains("Found")
      .should("exist")
      .and("contain", "results in")
      .should("be.visible");
  });

  it("should show a list of results", () => {
    cy.visit("/search/results?q=test");

    cy.get("ul")
      .should("have.descendants", "li")
      .contains("p")
      .contains("test");
  });

  it("should update the search when the search button is clicked", () => {
    cy.visit("/search/results?q=test");

    cy.get("input[name=q]").should("be.visible").clear().type("test 2");
    cy.get("button").contains("Search").should("be.visible").click();

    cy.url().should("include", "/search/results?q=test+2");
  });

  it("should show a 'no results found' text if the search does not find results", () => {
    cy.visit("/search/results?q=some+query+that+will+not+have+results");

    cy.contains("No results found");
  });
});
