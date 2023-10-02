let homeTeamScore = document.querySelector("#home-team-score")
let homeTeamUserInput = document.querySelector("#home-team-user-input")
let guestTeamScore = document.querySelector("#guest-team-score")
let guestTeamUserInput = document.querySelector("#guest-team-user-input")

let homeSumEl = 0
let guestSumEl = parseInt(0)

const homeTeamContainer = document.querySelector(".left-container")
const homeTeamAddOneBtn = document.querySelector("#home-team-add-one")
const homeTeamAddtwoBtn = document.querySelector("#home-team-add-two")
const homeTeamAddthreeBtn = document.querySelector("#home-team-add-three")
const homeTeamIncreaseBtn = document.querySelector("#home-team-increase")
const homeTeamDecreaseBtn = document.querySelector("#home-team-decrease")

const guestTeamContainer = document.querySelector(".right-container")
const guestTeamAddOneBtn = document.querySelector("#guest-team-add-one")
const guestTeamAddtwoBtn = document.querySelector("#guest-team-add-two")
const guestTeamAddthreeBtn = document.querySelector("#guest-team-add-three")
const guestTeamIncreaseBtn = document.querySelector("#guest-team-increase")
const guestTeamDecreaseBtn = document.querySelector("#guest-team-decrease")



updateScores()


homeTeamAddOneBtn.addEventListener("click", function(){
    homeTeamUserInput.value = 1
})
homeTeamAddtwoBtn.addEventListener("click", function(){
    homeTeamUserInput.value = 2
})
homeTeamAddthreeBtn.addEventListener("click", function(){
    homeTeamUserInput.value = 3
})

guestTeamAddOneBtn.addEventListener("click", function(){
    guestTeamUserInput.value = 1
})
guestTeamAddtwoBtn.addEventListener("click", function(){
    guestTeamUserInput.value = 2
})
guestTeamAddthreeBtn.addEventListener("click", function(){
    guestTeamUserInput.value = 3
})

homeTeamIncreaseBtn.addEventListener("click", function(){
    if(!homeTeamUserInput.value == ""){
        homeSumEl += parseInt(homeTeamUserInput.value)
    }
    if(homeSumEl > 999){
        homeSumEl = 999
        updateScores()
    }
    else
    updateScores()
    compareScores()
})
homeTeamDecreaseBtn.addEventListener("click", function(){
    if(!homeTeamUserInput.value == ""){
        homeSumEl -= parseInt(homeTeamUserInput.value)
    }
    if(homeSumEl <= 0){
        homeSumEl = 0
        updateScores()
    }
    else
    updateScores()
    compareScores()
})

guestTeamIncreaseBtn.addEventListener("click", function(){
    if(!guestTeamUserInput.value == ""){
        guestSumEl += parseInt(guestTeamUserInput.value)
    }
    if(guestSumEl > 999){
        guestSumEl = 999
        updateScores()
    }
    else
    updateScores()
    compareScores()
})
guestTeamDecreaseBtn.addEventListener("click", function(){
    if(!guestTeamUserInput.value == ""){
        guestSumEl -= parseInt(guestTeamUserInput.value)
    }
    if(guestSumEl <= 0){
        guestSumEl = 0
        updateScores()
    }
    else
    updateScores()
    compareScores()
})

function compareScores(){
    if(homeSumEl > guestSumEl){
        homeTeamContainer.style.border = "12px solid lime"
        guestTeamContainer.style.border = "4px solid red"
    }
    else if(homeSumEl < guestSumEl){
        guestTeamContainer.style.border = "12px solid lime"
        homeTeamContainer.style.border = "4px solid red"
    }
    else{
        homeTeamContainer.style.border = "4px solid whitesmoke"
        guestTeamContainer.style.border = "4px solid whitesmoke"
    }
}
function updateScores(){
    homeTeamScore.textContent = parseInt(homeSumEl)
    guestTeamScore.textContent = parseInt(guestSumEl) 
}
