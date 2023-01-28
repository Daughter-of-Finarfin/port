let points = document.getElementById("point")

let firstCard = 0
let secondCard =0
let cards = []
let sum = firstCard + secondCard
let messageEl = document.getElementById("message")
let message= ""
let isAlive = false
let hasBlackJack = false
let Points = Money()

document.getElementById("start").addEventListener("click", () => {
 if (Points > 0 || isAlive == true) {
   isAlive = true
   let firstCard = getrandomCard()
   let secondCard = getrandomCard()
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
   renderGame()
   cashOut()
   rendering()
 }
})

function renderGame() { 

   document.getElementById("sum").textContent = "Sum: " + sum
   document.getElementById("cards").textContent = "Cards: " 
   
   for (let i=0; i < cards.length; i++){
      document.getElementById("cards").textContent += cards[i] + " "
   }


   if (sum < 21) {
      messageEl.textContent = "Draw a new card"
      hasBlackJack = false
      isAlive = true
      messageEl.style.color = "black"
   } else if (sum === 21) {
      messageEl.textContent = "You've got BlackJack!"
      hasBlackJack = true
      Points += 10
      messageEl.style.color = "green"
   } else {
      messageEl.textContent = "You're out of the game!"
      isAlive = false
      messageEl.style.color = "#af3f3f"
      if(Points >= 10) {
         Points -= 10
         messageEl.textContent = "You've lost this round!"
      } else if(Points = 0) {
         messageEl.textContent = "You're out of the game!"
         isAlive = false
      }else {
         Points = Points
      }
   }
   points.textContent = "Points: " + Points + "$"
}

document.getElementById("new").addEventListener("click", () => {
   if(isAlive === true && hasBlackJack === false) {
      let card = getrandomCard()
      cards.push(card)
      sum += card
      renderGame()
   }
})


function getrandomCard() {
    let randomCard = Math.floor(Math.random() * 13 + 1)

    if (randomCard>11) {
        return 11
     } else if (randomCard===1) {
        return 11
     } else {
        return randomCard
     }
}

function cashOut() {
   let appear = document.getElementById("cash")
   if (Points > 0) {
      appear.style.display = "block"
   } else {
      appear.style.display = "none"
   }
}

document.getElementById("cash").addEventListener("click", () => {
   if (Points == 0) {
      messageEl.textContent = "You do not have any money!"
      messageEl.style.color = "#af3f3f"
   } else {
      messageEl.textContent = "Please proceed to the counter for your winnings"
      Points = 0
      points.textContent = "Points: "
      messageEl.style.color = "black"
      isAlive = false
   }
})

let Message2 = document.getElementById("message2")

document.getElementById("btn").addEventListener("click", () => {
   let namef = document.getElementById("name").value
   let amountf = document.getElementById("amount").value
   let bjdisplay = document.getElementById("body")
   let formDis = document.getElementsByClassName("main")[0]
   isAlive = true

   if (namef == "" && amountf == "") {
      Message2.textContent = "Please enter your Name and Amount"
   }  else if(namef == "" && amountf != "") {
      Message2.textContent = "Please enter your Name"
   }   else if(amountf != "" && amountf > 200) {
      Message2.textContent = "Please enter an amount less than 201$"
   }  else if (amountf == "" && namef != "") {
         Message2.textContent = "Please enter Amount"
   } else {
         namef = namef
         amountf = amountf
         bjdisplay.style.display = "block"
         formDis.style.display = "none"
      }
      Points = Money()
      rendering()
})



document.getElementsByClassName("imput")[0].addEventListener("keyup", () => {
   Message2.textContent = ""
})
document.getElementsByClassName("imput")[1].addEventListener("keyup", () => {
   Message2.textContent = ""
})

function rendering() {
   let username = document.getElementById("name").value
   document.getElementById("user").textContent = "Hello " + username
}

function Money() {
   let money = document.getElementById("amount").value
   return money
}













