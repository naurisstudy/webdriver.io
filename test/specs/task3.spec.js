describe("task 3 ", () => {
  it("Scenario 1: Change bg color to red", () => {
    browser.url("https://the-internet.herokuapp.com");

    browser.execute(() => {
      document.body.style.backgroundColor = "red";
    });
    browser.pause(3000);
  });
  it("Scenario 2: Wait for checkbox to be enabled", () => {
    browser.url("https://the-internet.herokuapp.com/dynamic_controls");

    $("button=Enable").click();

    const checkbox = $('#checkbox-example input[type="checkbox"]');
    checkbox.waitUntil(() => checkbox.isEnabled(), {
      timeout: 5000,
      timeoutMsg: "Checkbox is not enabled",
    });
  });
  it("Scenario 3: mouse actions", () => {
    browser.url("https://the-internet.herokuapp.com/drag_and_drop");

    const elementA = $("#column-a");
    const elementB = $("#column-b");
    elementA.dragAndDrop(elementB);

    expect(elementB).toHaveText("A");
  });

  it("Scenario 4: Check how many cookies", () => {
    browser.url("https://the-internet.herokuapp.com");

    const cookies = browser.getCookies();
    const numberOfCookies = cookies.length;

    console.log(`There are: ${numberOfCookies}` + "cookies");

    if (numberOfCookies > 0) {
      console.log("There are more than 1");
    } else {
      console.log("There are no cookies");
    }
  });
});
