describe("UI Automation - MUI Demos", () => {

  it("Text Field Form Interaction", () => {
    cy.visit("https://mui.com/material-ui/react-text-field/");

    cy.get("input").eq(0).clear().type("Mrunali");
    cy.get("input").eq(1).clear().type("test@example.com");
    cy.get("input").eq(2).clear().type("12345");

    cy.get("input").eq(0).should("have.value", "Mrunali");
    cy.get("input").eq(1).should("have.value", "test@example.com");
    cy.get("input").eq(2).should("have.value", "12345");
  });


  it("Dropdown Selection (MUI Select)", () => {
    cy.visit("https://mui.com/material-ui/react-select/");

    cy.get("#demo-simple-select").should("exist").click({ force: true });

    cy.get("ul[role='listbox'] li")
      .contains("Twenty")
      .click({ force: true });

    cy.get("#demo-simple-select").should("contain.text", "Twenty");
  });

  it("Autocomplete / Auto-suggest", () => {
    cy.visit("https://mui.com/material-ui/react-autocomplete/");

    cy.get('input[role="combobox"]').first().as("ac");

    cy.get("@ac").type("Br", { delay: 200 });

    cy.get("ul[role='listbox'] li")
      .contains("Braveheart")
      .click({ force: true });

    cy.get("@ac").should("have.value", "Braveheart");
  });

  it("Table Interaction", () => {
    cy.visit("https://mui.com/material-ui/react-table/");

    cy.get("tbody tr").should("have.length.greaterThan", 0);

    cy.get("tbody tr").first().as("row");

    cy.get("@row").find("td").eq(0).invoke("text").should((txt) => {
      expect(txt.trim().length).to.be.greaterThan(0);
    });

    cy.get("@row").find("td").eq(1).invoke("text").then((num) => {
      expect(Number(num)).to.be.greaterThan(0);
    });
  });

});