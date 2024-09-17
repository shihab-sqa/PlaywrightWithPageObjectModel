const {test,expect}= require("@playwright/test");

const {LoginPage}=   require("../Page_Object/LoginPage");

const dataset=  JSON.parse(JSON.stringify(require("../utility/credentials.json")));

for(const data of dataset){

test(`Login Test for ${data.username}`,async({page})=>{


const loginpage=new LoginPage(page);

await loginpage.url();

await loginpage.Login(data.username,data.password);


});

}