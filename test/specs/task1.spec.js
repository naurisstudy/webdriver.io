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

  it("Scenario 3, should show an error message", () => {
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
      console.log("Dropdown is correct.");
    } else {
      console.error("Dropdown is incorrect.");
    }
  });
  it("Scenario 5: dynamic content", () => {
    browser.url("https://the-internet.herokuapp.com/dynamic_content");

    const dynamicItems = $$(".large-10 p");

    if (dynamicItems.length > 0) {
      console.log("Dynamic items are present.");
      dynamicItems.forEach((item) => {
        const itemText = item.getText();  
        if (itemText) {
          console.log("It has text.");
        } else {
          console.error("It is empty.");
        }
      });
    } else {
      console.error("No dynamic items found.");
    }
  });
});
