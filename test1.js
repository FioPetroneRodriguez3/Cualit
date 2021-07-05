module.exports = {
 "Demo Fiorella" : function (browser) {
 browser
 .url("http://www.facturasimple.uy/")

 .waitForElementVisible('a[title=INGRESAR]', 1000)
 .click('button[name=btnG]')

 .pause(1000)

 .waitForElementVisible('input[type=email]', 1000)
 .setValue('input[type=email]', 'demo@cualit.com')

 .waitForElementVisible('input[name=password]', 1000)
 .click('input[name=password]')

 .pause(1000)
 .assert.containsText('(//span[@class=hidden-sm hidden-md ng-binding])[2]', 'Sucursal Demo')
 .end();
 }
}