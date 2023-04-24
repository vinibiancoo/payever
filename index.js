const { Builder, By, Key, until } = require("selenium-webdriver");

async function testcase1() {

  let driver = await new Builder().forBrowser("firefox").build();
  await driver.get("https://commerceos.staging.devpayever.com/registration/fashion");
  await driver.wait(until.elementLocated(By.xpath('//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/button[1]')), 30000);

  const loc = await driver.findElement(By.xpath("//*[@class='label-container ng-tns-c170-1 form-label']"));
  await loc.click();

  const firstNameField = await driver.wait(until.elementLocated(By.name("firstName")), 30000);
  await firstNameField.sendKeys("João");
  await driver.sleep(1000);

  //const btnlogin = await driver.findElement(By.xpath('//*[@id="layout-container"]/div/entry-create-personal-form/form/div[2]/button[1]'));
  //btnlogin.click();

}

testcase1();
