///<reference types="cypress"/>

import RegisterPage from "./PageObject/RegisterPage"
import LoginPage from "./PageObject/LoginPage"
import HomePage from "./PageObject/HomePage"

describe('Registration', function () { 
    let userDatas = []
    before(function () {
        cy.fixture("userData").then(user => {           
            var datas = user.split('\r\n') //data split per lines            
            var firstLine = true
            datas.forEach(line => { 
                if (!firstLine) {
                    var data = new Object()
                    var lines = line.split(",") //data of each line again split as per comma
                    data.gender = lines[0]
                    data.firstname = lines[1] //value stored in firstname variable of object data 
                    data.lastname = lines[2] 
                    data.day = lines[3]
                    data.month = lines[4]
                    data.year = lines[5]
                    data.email = lines[6]
                    data.companyName = lines[7]
                    data.password = lines[8]
                    data.confirmPassword = lines[9]
                    userDatas.push(data) //data pushed in array
                }

                if (firstLine) {
                    firstLine = false
                }
            });

        })
    })

    it("register", function () {
        var rp = new RegisterPage()
        var hp = new HomePage()
        rp.enterNullValues()

        userDatas.forEach(userData => {
            rp.register()
            rp.enterUserValues(userData)                      
            hp.logout()
        })
       
    })
    it("login", function () {
        var lp = new LoginPage()
        var hp = new HomePage()
        lp.enterNullData()
        lp.enterInvalidEmail()
        lp.enterInvalidCredentials()

        userDatas.forEach(userData => {
            lp.enterValidCredentials(userData)
            hp.logout()
        })

    })


})
