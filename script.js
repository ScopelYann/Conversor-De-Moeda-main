let input = document.querySelector('#txtmail');
let selectone = document.querySelector('#campo-one')
let selecttwo = document.querySelector('#campo-second')
let img = document.querySelectorAll(".paises")
let moneyConvert = document.querySelectorAll(".money-convert")
let nomeMoeda = document.querySelectorAll(".name-money")

function changeconvert(){
    conceptName2 = selecttwo.options[selecttwo.selectedIndex].text;
        
    if(conceptName2 === "US$ Dólar Americano"){
        img[1].src = "imgs/estados-unidos (1) 1.svg"
        moneyConvert[1].innerHTML = "US$ 00,00"
        nomeMoeda[1].innerHTML = "Dólar Americano"
        let convercao = parseFloat(input.value / 4.97)
        let format = convercao.toLocaleString('en-US', { minimumFractionDigits:2, maximumFractionDigits:2})
        moneyConvert[1].innerHTML = "US$ " + format
        

    }else if(conceptName2 === "£ Libra"){
        img[1].src = "imgs/libra 1.svg"
        moneyConvert[1].innerHTML = "£ 00,00"
        nomeMoeda[1].innerHTML = "Libra"
        let convercao = parseFloat(input.value / 6.27)
        let format = convercao.toLocaleString('en-US', { minimumFractionDigits:2, maximumFractionDigits:2})
        moneyConvert[1].innerHTML = "£ " + format

    }else if (conceptName2 === "₿ Bitcoin"){
        img[1].src = "imgs/bitcoin 1.svg"
        moneyConvert[1].innerHTML = "₿ 00,00"
        nomeMoeda[1].innerHTML = "Bitcoin"
        let convercao = parseFloat(input.value * 0.0000033)
        let format = convercao.toLocaleString('en-US', { minimumFractionDigits:2, maximumFractionDigits:2})
        moneyConvert[1].innerHTML = "₿ " + format

    }else if (conceptName2 === "€ Euro"){
        img[1].src = "imgs/Design sem nome 3.svg"
        moneyConvert[1].innerHTML = "€ 00,00"
        nomeMoeda[1].innerHTML = "Euro"
        let convercao = parseFloat(input.value / 5.37)
        let format = convercao.toLocaleString('pt-br', { minimumFractionDigits:2, maximumFractionDigits:2})
        moneyConvert[1].innerHTML = "€ " + format
    }
}

function convertUS$(){
    let val = parseFloat(input.value)
    let format = val.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    moneyConvert[0].innerHTML = "R$ " + format
    conceptName2 = selecttwo.options[selecttwo.selectedIndex].text;
    if (input.value === ""){
        moneyConvert[0].innerHTML = "R$ 0,00"
    }

    if (conceptName2 === "US$ Dólar Americano"){
        let convercao = parseFloat(input.value / 4.97)
        let format = convercao.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        moneyConvert[1].innerHTML = "US$ " + format  

    }else if (conceptName2 === "£ Libra"){
        let convercao = parseFloat(input.value / 6.27)
        let format = convercao.toLocaleString('en-US', { minimumFractionDigits:2, maximumFractionDigits:2})
        moneyConvert[1].innerHTML = "£ " + format

    }else if (conceptName2 === "€ Euro"){
        let convercao = parseFloat(input.value / 5.37)
        let format = convercao.toLocaleString('pt-br', { minimumFractionDigits:2, maximumFractionDigits:2})
        moneyConvert[1].innerHTML = "€ " + format

    }else if(conceptName2 === "₿ Bitcoin"){
        let convercao = parseFloat(input.value / 312295.73 )
        let format = convercao.toLocaleString('pt-br', { minimumFractionDigits:2, maximumFractionDigits:2})
        moneyConvert[1].innerHTML = "₿ " + format
        if (input.value < 2000){
            let format = convercao.toLocaleString('pt-br', { minimumFractionDigits:5, maximumFractionDigits:5})
            moneyConvert[1].innerHTML = "₿ " + format
        }
    }

}
//  input.addEventListener('keypress', function (event) {
//    if (event.which >= 37 && event.which <= 40) return;

//    this.value = this.value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
//  });
