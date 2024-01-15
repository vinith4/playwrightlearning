const {test, expect} = require('@playwright/test')


test('verify application title', async ({page})=>{

    //goto application
    await page.goto('https://www.amazon.in/')

    //Check the Title 
   await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
    
   //Type the input in search box
   await page.fill('#twotabsearchtextbox','iphone')
   //Click the search button
   await page.click('#nav-search-submit-button')

   //Check the Title
   await expect(page).toHaveTitle("Amazon.in : iphone")

})
