// Api = https://restcountries.com/v3.1/name/
// flags => png
// name common => ad
// population => nufus

const input = document.querySelector("#input")
const btnAra = document.querySelector(".ulke-btn")
const bayrak = document.querySelector(".resim")
const ulkeAdi = document.querySelector(".ad-ulke")
const ulkeBaskent = document.querySelector(".baskent")
const ulkeNufus = document.querySelector(".nufus")
const hataErr = document.querySelector(".ulke-err")
const kart = document.querySelector(".sonuc")

async function ulkeBul(){
    
    let inputDeger = input.value.trim();
    try{
        if(inputDeger === "" || inputDeger.length < 3){
            input.innerHTML = ""
            alert("En az üç deger almalı")
        }

        input.value = ""
        kart.innerHTML = ""

        const res = await fetch(`https://restcountries.com/v3.1/name/${inputDeger}`)
        const data = await res.json()  
        
        Array.from(data).forEach((item)=>{
            kart.insertAdjacentHTML("beforeend",`
            <div class="kart">
                <img src="${item.flags.png}" class="resim">
                <h2 class="ad-ulke">${item.name.common} 🌍</h2>
                <h2 class="baskent">${item.capital[0]} 🚩</h2>
                <h2 class="nufus">${(item.population / 1000000).toFixed(2)} Mn👪</h2>
                </div>
                `)
        })
        console.log(data)
    }
    catch(err){
        alert("Bir şeyler ters gitti yeniden deneyelim")
    }
}

btnAra.addEventListener("click", ulkeBul)

window.addEventListener("keydown", function(event){
    if(event.keyCode === 13){
        ulkeBul()
        input.value = ""
    }
})