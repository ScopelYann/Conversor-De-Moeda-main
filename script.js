let input = document.querySelector('#txtmail')
let selectone = document.querySelector('#campo-one')
let selecttwo = document.querySelector('#campo-second')
let button = document.querySelector('.convertbutton')
let img = document.querySelectorAll(".paises")
let moneyConvertPrime = document.querySelector(".money-convert-prime")
let moneyConvertSecond = document.querySelector(".money-convert-second")
let moneyConvertThird = document.querySelector(".money-convert-third")
let nomeMoeda = document.querySelectorAll(".name-money")



const url = 'https://economia.awesomeapi.com.br/json/last/'
const coins = 'USD-BRL,GBP-BRL,EUR-BRL,BRL-GBP,BRL-USD,BRL-EUR,GBP-USD,EUR-USD,BTC-USD,USD-GBP,EUR-GBP,BRL-EUR,USD-EUR,GBP-EUR,BRL-GBP,BTC-EUR,BTC-BRL'
fetch(url + coins)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        const USDBRL = data.USDBRL
        const GBPBRL = data.GBPBRL
        const USDGBP = data.USDGBP
        const EURBRL = data.EURBRL
        const BRLUSD = data.BRLUSD
        const EURUSD = data.EURUSD
        const GBPUSD = data.GBPUSD
        const BTCUSD = data.BTCUSD
        const EURGBP = data.EURGBP
        const BRLEUR = data.BRLEUR
        const USDEUR = data.USDEUR
        const GBPEUR = data.GBPEUR
        const BTCBRL = data.BTCBRL
        const BTCEUR = data.BTCEUR
        const BRLGBP = data.BRLGBP




        let USD = new Intl.NumberFormat('pt-br', {
            style: "currency",
            currency: "USD"
        })
        let BRL = new Intl.NumberFormat("pt-br", {
            style: 'currency',
            currency: 'BRL'
        })
        let EUR = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'EUR'
        })
        let LB = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'GBP'
        })
        let BTC = new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BTC'

        })
        function convert() {
            ConvertDe = selectone.options[selectone.selectedIndex].text;
            ConvertPara = selecttwo.options[selecttwo.selectedIndex].text;

            //REAL BRASILEIRO
            //Conversão de Real Para outras moedas
            if (ConvertDe === "R$ Real Brasileiro") {
                    img[0].src = 'assets/brasil 2.svg'
                    nomeMoeda[0].innerHTML = 'Real'
                if (ConvertPara === "US$ Dólar Americano") {
                    img[1].src = 'assets/estados-unidos (1) 1.svg'
                    nomeMoeda[1].innerHTML = 'Dólar Americano'
                    let convert = input.value / USDBRL.low
                    moneyConvertPrime.innerHTML = BRL.format(input.value)
                    moneyConvertSecond.innerHTML = USD.format(convert)
                    moneyConvertThird.innerHTML = USD.format(input.value / USDBRL.high).replace(/US/, 'Min: ')
                } else if (ConvertPara === "£ Libra") {
                    img[1].src = 'assets/libra 1.svg'
                    nomeMoeda[1].innerHTML = 'Libra'
                    let convert = input.value / GBPBRL.low
                    moneyConvertPrime.innerHTML = BRL.format(input.value)
                    moneyConvertSecond.innerHTML = LB.format(convert)
                    moneyConvertThird.innerHTML = LB.format(input.value / GBPBRL.high).replace(/£/, 'Min: £')
                } else if (ConvertPara === "€ Euro") {
                    img[1].src = 'assets/Design sem nome 3.svg'
                    nomeMoeda[1].innerHTML = 'Euro'
                    let convert = input.value / EURBRL.low
                    moneyConvertPrime.innerHTML = BRL.format(input.value)
                    moneyConvertSecond.innerHTML = EUR.format(convert)
                    moneyConvertThird.innerHTML = EUR.format(input.value / EURBRL.high).replace(/€/, 'Min: €')
                } else if (ConvertPara === "₿ Bitcoin") {
                    img[1].src = 'assets/bitcoin 1.svg'
                    nomeMoeda[1].innerHTML = 'Bitcoin'
                    let convert = input.value * 0.0000030
                    moneyConvertPrime.innerHTML = BRL.format(input.value)
                    moneyConvertSecond.innerHTML = BTC.format(convert).replace(/BTC/, '₿')
                    moneyConvertThird.innerHTML = BTC.format(input.value * 0.0000027).replace(/BTC/, 'Min: ₿')
                }else if (ConvertPara === "R$ Real Brasileiro"){
                    img[1].src = 'assets/brasil 2.svg'
                    nomeMoeda[1].innerHTML = 'Real'
                    moneyConvertPrime.innerHTML = BRL.format(input.value)
                    moneyConvertSecond.innerHTML = BRL.format(input.value)
                    moneyConvertThird.innerHTML = ''
                }
            }
            //DÓLAR AMERICANO
            //Conversão de dolar americano para outras moedas
            if (ConvertDe === "US$ Dólar Americano") {
                    img[0].src = 'assets/estados-unidos (1) 1.svg'
                    nomeMoeda[0].innerHTML = 'Dólar Americano'
                if (ConvertPara === "R$ Real Brasileiro") {
                    img[1].src = 'assets/brasil 2.svg'
                    nomeMoeda[1].innerHTML = 'Real'
                    let convert = input.value / BRLUSD.low
                    moneyConvertPrime.innerHTML = USD.format(input.value)
                    moneyConvertSecond.innerHTML = BRL.format(convert)
                    moneyConvertThird.innerHTML = BRL.format(input.value / BRLUSD.high).replace(/R/, 'Min: R')

                } else if (ConvertPara === "£ Libra") {
                    img[1].src = 'assets/libra 1.svg'
                    nomeMoeda[1].innerHTML = 'Libra'
                    let convert = input.value / GBPUSD.low
                    moneyConvertPrime.innerHTML = USD.format(input.value)
                    moneyConvertSecond.innerHTML = LB.format(convert)
                    moneyConvertThird.innerHTML = LB.format(input.value / GBPUSD.high).replace(/£/, 'Min: £')

                } else if (ConvertPara === "€ Euro") {
                    img[1].src = 'assets/Design sem nome 3.svg'
                    nomeMoeda[1].innerHTML = 'Euro'
                    let convert = input.value / EURUSD.low
                    moneyConvertPrime.innerHTML = USD.format(input.value)
                    moneyConvertSecond.innerHTML = EUR.format(convert)
                    moneyConvertThird.innerHTML = EUR.format(input.value / EURUSD.high).replace(/€/, 'Min: €')

                } else if (ConvertPara === "₿ Bitcoin") {
                    img[1].src = 'assets/bitcoin 1.svg'
                    nomeMoeda[1].innerHTML = 'Bitcoin'
                    let convert = input.value / BTCUSD.low
                    moneyConvertPrime.innerHTML = USD.format(input.value)
                    moneyConvertSecond.innerHTML = BTC.format(convert).replace(/BTC/, '₿')
                    moneyConvertThird.innerHTML = BTC.format(input.value / BTCUSD.high).replace(/BTC/, 'Min: ₿')

                } else if (ConvertPara === "US$ Dólar Americano") {
                    img[1].src = 'assets/estados-unidos (1) 1.svg'
                    nomeMoeda[1].innerHTML = 'Dólar Americano'
                    moneyConvertPrime.innerHTML = USD.format(input.value)
                    moneyConvertSecond.innerHTML = USD.format(input.value)
                    moneyConvertThird.innerHTML = ''
                }
            }
            //LIBRA
            // Conversão de LIBRA para outras Moedas
            if (ConvertDe === "£ Libra") {
                    img[0].src = 'assets/libra 1.svg'
                    nomeMoeda[0].innerHTML = 'Libra'
                if (ConvertPara === "R$ Real Brasileiro") {
                    img[1].src = 'assets/brasil 2.svg'
                    nomeMoeda[1].innerHTML = 'Real'
                    let convert = input.value / BRLGBP.low
                    moneyConvertPrime.innerHTML = LB.format(input.value)
                    moneyConvertSecond.innerHTML = BRL.format(convert)
                    moneyConvertThird.innerHTML = BRL.format(input.value / BRLGBP.high).replace(/R/, 'Min: R')

                } else if (ConvertPara === "US$ Dólar Americano") {
                    img[1].src = 'assets/estados-unidos (1) 1.svg'
                    nomeMoeda[1].innerHTML = 'Dólar Americano'
                    let convert = input.value / USDGBP.low
                    moneyConvertPrime.innerHTML = LB.format(input.value)
                    moneyConvertSecond.innerHTML = USD.format(convert)
                    moneyConvertThird.innerHTML = USD.format(input.value / USDGBP.high).replace(/US/, 'Min: $')

                } else if (ConvertPara === "€ Euro") {
                    img[1].src = 'assets/Design sem nome 3.svg'
                    nomeMoeda[1].innerHTML = 'Euro'
                    let convert = input.value / EURGBP.low
                    moneyConvertPrime.innerHTML = LB.format(input.value)
                    moneyConvertSecond.innerHTML = EUR.format(convert)
                    moneyConvertThird.innerHTML = EUR.format(input.value / EURGBP.high).replace(/€/, 'Min: €')

                } else if (ConvertPara === "₿ Bitcoin") {
                    img[1].src = 'assets/bitcoin 1.svg'
                    nomeMoeda[1].innerHTML = 'Bitcoin'
                    let convert = input.value * 0.000019
                    moneyConvertPrime.innerHTML = LB.format(input.value)
                    moneyConvertSecond.innerHTML = BTC.format(convert).replace(/BTC/, '₿')
                    moneyConvertThird.innerHTML = BTC.format(input.value * 0.000016).replace(/BTC/, 'Min: ₿')

                } else if (ConvertPara === "£ Libra") {
                    img[1].src = 'assets/libra 1.svg'
                    nomeMoeda[1].innerHTML = 'Libra'
                    moneyConvertPrime.innerHTML = LB.format(input.value)
                    moneyConvertSecond.innerHTML = LB.format(input.value)
                    moneyConvertThird.innerHTML = ''
                }
            }
            //EURO
            //Conversão de EURO para outras Moedas
            if (ConvertDe === "€ Euro") {
                    img[0].src = 'assets/Design sem nome 3.svg'
                    nomeMoeda[0].innerHTML = 'Euro'
                if (ConvertPara === "R$ Real Brasileiro") {
                    img[1].src = 'assets/brasil 2.svg'
                    nomeMoeda[1].innerHTML = 'Real'
                    let convert = input.value / BRLEUR.low
                    moneyConvertPrime.innerHTML = EUR.format(input.value)
                    moneyConvertSecond.innerHTML = BRL.format(convert)
                    moneyConvertThird.innerHTML = BRL.format(input.value / BRLEUR.high).replace(/R/, 'Min: R')
                } else if (ConvertPara === "US$ Dólar Americano") {
                    img[1].src = 'assets/estados-unidos (1) 1.svg'
                    nomeMoeda[1].innerHTML = 'Dólar Americano'
                    let convert = input.value / USDEUR.low
                    moneyConvertPrime.innerHTML = EUR.format(input.value)
                    moneyConvertSecond.innerHTML = USD.format(convert)
                    moneyConvertThird.innerHTML = USD.format(input.value / USDEUR.high).replace(/US/, 'Min: US')
                } else if (ConvertPara === "€ Euro") {
                    img[1].src = 'assets/Design sem nome 3.svg'
                    nomeMoeda[1].innerHTML = 'Euro'
                    moneyConvertPrime.innerHTML = EUR.format(input.value)
                    moneyConvertSecond.innerHTML = EUR.format(input.value)
                    moneyConvertThird.innerHTML = ''
                } else if (ConvertPara === "₿ Bitcoin") {
                    img[1].src = 'assets/bitcoin 1.svg'
                    nomeMoeda[1].innerHTML = 'Bitcoin'
                    let convert = input.value * 0.000016
                    moneyConvertPrime.innerHTML = EUR.format(input.value)
                    moneyConvertSecond.innerHTML = BTC.format(convert).replace(/BTC/, '₿')
                    moneyConvertThird.innerHTML = BTC.format(input.value * 0.000015).replace(/BTC/, 'Min: ₿')
                } else if (ConvertPara === "£ Libra") {
                    img[1].src = 'assets/libra 1.svg'
                    nomeMoeda[1].innerHTML = 'Libra'
                    let convert = input.value / GBPEUR.low
                    moneyConvertPrime.innerHTML = EUR.format(input.value)
                    moneyConvertSecond.innerHTML = LB.format(convert)
                    moneyConvertThird.innerHTML = LB.format(input.value / GBPEUR.high)
                }
            }
            if (ConvertDe === "₿ Bitcoin") {
                    img[0].src = 'assets/bitcoin 1.svg'
                    nomeMoeda[0].innerHTML = 'Bitcoin'
                if (ConvertPara === "R$ Real Brasileiro") {
                    img[1].src = 'assets/brasil 2.svg'
                    nomeMoeda[1].innerHTML = 'Real'
                    let convert = input.value * BTCBRL.high
                    moneyConvertPrime.innerHTML = BTC.format(input.value).replace(/BTC/, '₿')
                    moneyConvertSecond.innerHTML = BRL.format(convert)
                    moneyConvertThird.innerHTML = BRL.format(input.value * BTCBRL.low).replace(/R/, 'Min: R')

                } else if (ConvertPara === "US$ Dólar Americano") {
                    img[1].src = 'assets/estados-unidos (1) 1.svg'
                    nomeMoeda[1].innerHTML = 'Dólar Americano'
                    let convert = input.value * BTCUSD.high
                    moneyConvertPrime.innerHTML = BTC.format(input.value).replace(/BTC/, '₿')
                    moneyConvertSecond.innerHTML = USD.format(convert)
                    moneyConvertThird.innerHTML = USD.format(input.value * BTCUSD.low).replace(/US/, 'Min: US')
                } else if (ConvertPara === "€ Euro") {
                    img[1].src = 'assets/Design sem nome 3.svg'
                    nomeMoeda[1].innerHTML = 'Euro'
                    let convert = input.value * BTCEUR.high
                    moneyConvertPrime.innerHTML = BTC.format(input.value).replace(/BTC/, '₿')
                    moneyConvertSecond.innerHTML = EUR.format(convert)
                    moneyConvertThird.innerHTML = EUR.format(input.value * BTCEUR.low).replace(/€/, 'Min: €')
                } else if (ConvertPara === "₿ Bitcoin") {
                    img[1].src = 'assets/bitcoin 1.svg'
                    nomeMoeda[1].innerHTML = 'Bitcoin'
                    moneyConvertPrime.innerHTML = BTC.format(input.value).replace(/BTC/, '₿')
                    moneyConvertSecond.innerHTML = BTC.format(input.value).replace(/BTC/, '₿')
                    moneyConvertThird.innerHTML = ''
                } else if (ConvertPara === "£ Libra") {
                    img[1].src = 'assets/libra 1.svg'
                    nomeMoeda[1].innerHTML = 'Libra'
                    let convert = input.value * 5246133
                    moneyConvertPrime.innerHTML = BTC.format(input.value).replace(/BTC/, '₿')
                    moneyConvertSecond.innerHTML = LB.format(convert)
                    moneyConvertThird.innerHTML = LB.format(input.value * 5246123).replace(/£/, 'Min: £')
                }
            }
        }
        function changeConvert(){
            ConvertDe = selectone.options[selectone.selectedIndex].text;
            ConvertPara = selecttwo.options[selecttwo.selectedIndex].text;
            if (ConvertDe === "R$ Real Brasileiro") {
                img[0].src = 'assets/brasil 2.svg'
                nomeMoeda[0].innerHTML = 'Real'
            }
            else if (ConvertDe === "US$ Dólar Americano") {
                img[0].src = 'assets/estados-unidos (1) 1.svg'
                nomeMoeda[0].innerHTML = 'Dólar Americano'
            }
            else if (ConvertDe === "£ Libra"){
                img[0].src = 'assets/libra 1.svg'
                nomeMoeda[0].innerHTML = 'Libra'
            }
            else if (ConvertDe === "€ Euro"){
                img[0].src = 'assets/Design sem nome 3.svg'
                nomeMoeda[0].innerHTML = 'Euro'
            }
            else if (ConvertDe === "₿ Bitcoin"){
                img[0].src = 'assets/bitcoin 1.svg'
                nomeMoeda[0].innerHTML = 'Bitcoin'
            }
            if (ConvertPara === "R$ Real Brasileiro"){
                img[1].src = 'assets/brasil 1.svg'
                nomeMoeda[1].innerHTML = 'Real'
            }
            else if (ConvertPara === "US$ Dólar Americano"){
                img[1].src = 'assets/estados-unidos (1) 1.svg'
                nomeMoeda[1].innerHTML = 'Dólar Americano'
            }
            else if (ConvertPara === "£ Libra"){
                img[1].src = 'assets/libra 1.svg'
                nomeMoeda[1].innerHTML = 'Libra'
            }
            else if (ConvertPara === "€ Euro"){
                img[1].src = 'assets/Design sem nome 3.svg'
                nomeMoeda[1].innerHTML = 'Dólar Americano'
            }
            else if (ConvertPara === "₿ Bitcoin") {
                img[1].src = 'assets/bitcoin 1.svg'
                nomeMoeda[1].innerHTML = 'Bitcoin'
            }
            convert()
        }
        selectone.addEventListener('change', changeConvert)
        selecttwo.addEventListener('change', changeConvert)
        button.addEventListener('click', convert)
    })



// function convertUS$() {
//     let val = parseFloat(input.value)
//     let format = val.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
//     moneyConvert[0].innerHTML = "R$ " + format
//     conceptName2 = selecttwo.options[selecttwo.selectedIndex].text;
//     if (input.value === "") {
//         moneyConvert[0].innerHTML = "R$ 0,00"
//     }

//     if (conceptName2 === "$ Dólar Americano") {
//         let convercao = parseFloat(input.value / 4.94)
//         let format = convercao.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
//         moneyConvert[1].innerHTML = "$ " + format

//     } else if (conceptName2 === "£ Libra") {
//         let convercao = parseFloat(input.value / 6.27)
//         let format = convercao.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
//         moneyConvert[1].innerHTML = "£ " + format

//     } else if (conceptName2 === "€ Euro") {
//         let convercao = parseFloat(input.value / 5.37)
//         let format = convercao.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
//         moneyConvert[1].innerHTML = "€ " + format

//     } else if (conceptName2 === "₿ Bitcoin") {
//         let convercao = parseFloat(input.value / 312295.73)
//         let format = convercao.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
//         moneyConvert[1].innerHTML = "₿ " + format
//         if (input.value < 2000) {
//             let format = convercao.toLocaleString('pt-br', { minimumFractionDigits: 5, maximumFractionDigits: 5 })
//             moneyConvert[1].innerHTML = "₿ " + format
//         }

//     } else if (conceptName2 == "R$ Real Brasileiro") {
//         if (conceptName1 == "R$ Real Brasileiro") {
//             let convercao = Number(input.value * 1)
//             let fomat = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" })
//             moneyConvert[1].innerHTML = fomat.format(convercao)
//         }
//     }

// }
