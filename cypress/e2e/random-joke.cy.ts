describe("Random Joke page", () => {
  it("should show a random joke when the reveal button is clicked", () => {
    cy.visit("/");
    cy.get("button").contains("Reveal").should("be.visible").click();

    cy.get("#random-joke").should("be.visible");
    cy.get("button").contains("Show another one").should("be.visible");
  });

  it("should show a different joke when the show another one button is clicked", () => {
    cy.intercept("POST", "/").as("refetch-joke");

    cy.visit("/");

    cy.get("button").contains("Reveal").should("be.visible").click();

    cy.get("button").contains("Show another one").should("be.visible").click();
    cy.wait("@refetch-joke");
    cy.get("#random-joke").should("be.visible");

    cy.get("button").contains("Show another one").should("be.visible").click();
    cy.wait("@refetch-joke");
    cy.get("#random-joke").should("be.visible");
  });

  it("should set the category search param when a category is selected", () => {
    cy.visit("/");
    cy.get('button[role="combobox"][aria-controls^="radix-"]')
      .should("be.visible")
      .click();

    cy.get("span").contains("movie").click();

    cy.url().should("include", "?category=movie");
  });

  it("changing the selected category should hide the joke if it was already revealed", () => {
    cy.visit("/");

    cy.get("button").contains("Reveal").should("be.visible").click();
    cy.get("#random-joke").should("be.visible");

    cy.get('button[role="combobox"][aria-controls^="radix-"]')
      .should("be.visible")
      .click();
    cy.get("span").contains("dev").click();
    cy.url().should("include", "?category=dev");

    cy.get("#random-joke").should("not.exist");

    cy.get("button").contains("Reveal").should("be.visible").click();
    cy.get("#random-joke").should("be.visible");
  });
});
