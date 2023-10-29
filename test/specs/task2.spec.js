describe('task2, custom click', () => {
    before(() => {
      browser.url('https://the-internet.herokuapp.com');
    });
  
    it('Scenario 1: Navigate to the A/B Testing page', () => {
      const abTesting = $('a[href="/abtest"]');
      customClick(abTesting, 6500);
      expect(browser).toHaveTitle('A/B Test Control');
    });
  
    it('Scenario 2: Fill out a form', () => {
      const formLink = $('a[href="/login"]');
      customClick(formLink, 4000);
  
      const usernameInput = $('#username');
      const passwordInput = $('#password');
      const loginButton = $('button[type="submit"]');
  
      usernameInput.setValue('tomsmith');
      passwordInput.setValue('SuperSecretPassword!');
      customClick(loginButton, 3000);
      const successMessage = $('.flash.success');
      expect(successMessage).toHaveTextContaining('You logged into a secure area');
    });
  
    it('Scenario 3: Ad section', () => {
        browser.url('https://the-internet.herokuapp.com/entry_ad');
      
        const modalCloseButton = $('.modal-footer p');
        if (modalCloseButton.isDisplayed()) {
          customClick(modalCloseButton);
        }
        const entryAdLink = $('a[href="/entry_ad"]');
        customClick(entryAdLink);
      
        const modalTitle = $('.modal-title');
        modalTitle.waitForDisplayed({ timeout: 10000 });
        expect(modalTitle).toHaveText('This is a modal window');
    
        customClick(modalCloseButton);
      
        modalTitle.waitForDisplayed({ timeout: 10000, reverse: true });
      });
  
      it('Scenario 4: JavaScript alerts', () => {
        const jsAlertLink = $('a[href="/javascript_alerts"]');
        customClick(jsAlertLink, 5000);
        
        const jsAlertButton = $('button=Click for JS Alert');
        customClick(jsAlertButton, 3000);
        browser.acceptAlert();
        const resultMessage = $('#result');
        expect(resultMessage).toHaveText('You successfuly clicked an alert');
    
    });
    function customClick(element, timeout) {
      element.waitForClickable({ timeout });
      element.click();
    }
  });