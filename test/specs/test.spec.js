describe("4 SCENARIOS - first tasks", () => {
  it("Scenario 1: verify page title", () => {
    browser.url("https://the-internet.herokuapp.com/");

    const pageTitle = $("//h3");
    const expectedTitle = "Welcome to the Internet";

    expect(pageTitle).toHaveText(expectedTitle);
  });
  it("Scenario 2, log in with valid credentials", () => {
    browser.url("https://the-internet.herokuapp.com/login");
    const username = $("#username");
    const password = $("#password");
    const loginButton = $('//button[contains(text(), "Login")]');

    username.setValue("tomsmith");
    password.setValue("SuperSecretPassword!");
    loginButton.click();

    const successMessage = $(".flash.success");
    expect(successMessage).toHaveTextContaining(
      "You logged into a secure area."
    );
  });

  it("Scenario - 3, should show an error message", () => {
    browser.url("https://the-internet.herokuapp.com/login");
    const username = $("#username");
    const password = $("#password");
    const loginButton = $("button.radius");

    username.setValue("notreal");
    password.setValue("easypassword");
    loginButton.click();

    const errorMessage = $(".flash.error");
    expect(errorMessage).toHaveTextContaining("Your username is invalid!");
  });
  it("Scenario 4: interact with dropdown", () => {
    browser.url("https://the-internet.herokuapp.com/dropdown");

    const dropdown = $("select#dropdown");

    dropdown.selectByVisibleText("Option 2");
    const selectedOption = dropdown.getValue();

    if (selectedOption === "2") {
      console.log("dropdown selection is correct.");
    } else {
      console.error("dropdown selection is incorrect.");
    }
  });
});
