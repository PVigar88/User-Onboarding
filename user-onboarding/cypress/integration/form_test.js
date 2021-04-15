describe("User Form App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("sanity checks", () => {
    expect(10).to.equal(10);
    expect(1 + 2).to.equal(3);
    expect({}).to.eql({}); //deep equals, comparing porperties (===)
    expect(1 + 2).to.equal(4 - 1);
  });

  const firstNameInput = () => cy.get('input[name="first_name"]');
  const lastNameInput = () => cy.get('input[name="last_name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const termsCheckbox = () => cy.get('input[name="terms_of_service"]');
  const submitButton = () => cy.get("button");

  it("type a name in the name inputs", () => {
    firstNameInput().type("Paul");
    lastNameInput().type("Vigar");
    firstNameInput().should("have.value", "Paul");
    lastNameInput().should("have.value", "Vigar");
  });
  it("type an email address in", () => {
    emailInput().type("pvigar@gmail.com");
    emailInput().should("have.value", "pvigar@gmail.com");
  });
  it("enter a password", () => {
    passwordInput().type("password");
    passwordInput().should("have.value", "password");
  });
  it("check the terms of service", () => {
    termsCheckbox().click();
    termsCheckbox().should("have.value", "on");
  });
  it("can submit form?", () => {
    firstNameInput().type("Paul");
    lastNameInput().type("Vigar");
    emailInput().type("pvigar@gmail.com");
    passwordInput().type("password");
    termsCheckbox().click();
    submitButton().click();
  });
  it("form validation when field is left empty", () => {
    firstNameInput().type("Paul");
    lastNameInput().type("Vigar");
    emailInput().type("pvigar@gmail.com");
    passwordInput().type("password");
    submitButton().should("be.disabled");
  });
});
