///<reference types="cypress"/>

import RegisterPage from "./PageObject/RegisterPage"
import HomePage from "./PageObject/HomePage"

describe('Registration', function () {
    let userDatas = []
    before(function () {
        cy.fixture("userData").then(user => { //all data unmanaged
            //    user.array.forEach(element => {
            var datas = user.split('\r\n')
            //data split per lines
            var firstLine = true
            datas.forEach(line => { //for loop in data

                if (!firstLine) {
                    var data = new Object()
                    var lines = line.split(",") //data of each line again split as per comma
                    data.gender = lines[0]
                    data.firstname = lines[1] //value stored in name variable of object data 
                    data.lastname = lines[2] //value stored in lastname variable of object data 
                    data.day=lines[3]
                    data.month=lines[4]
                    data.year=lines[5]
                    data.email=lines[6]
                    data.companyName=lines[7]
                    data.password=lines[8]
                    data.confirmPassword=lines[9]
                    userDatas.push(data) //data pushed in array
                }

                if (firstLine) {
                    firstLine = false
                }
            });

        })
    })

    it("register", function () {
        var rp= new RegisterPage()
        var hp= new HomePage()
        rp.enterNullValues()        
        
        userDatas.forEach(userData=>{
            rp.register()
            rp.checkTitle()
            rp.enterUserValues(userData)
            rp.registerUser()  
            hp.logout()
        })


 
    })
})
