let homeTeamScore = document.querySelector("#home-team-score");
let homePointInput = document.querySelector("#home-team-user-input");
let guestTeamScore = document.querySelector("#guest-team-score");
let guestPointInput = document.querySelector("#guest-team-user-input");

const homeTeamContainer = document.querySelector(".left-container");
const homeTeamBtns = document.querySelectorAll("#home-team-btn");
const guestTeamContainer = document.querySelector(".right-container");
const guestTeamBtns = document.querySelectorAll("#guest-team-btn");
const entryBtns = document.querySelectorAll(".entry-button");

let homeSum = 0;
let guestSum = 0;

/**
 * Updates the home and guest team scores displayed on the page.
 * Uses the `textContent` property to update the values and converts them to numbers using the `+` operator.
 */
function updateScores() {
  homeTeamScore.textContent = +homeSum;
  guestTeamScore.textContent = +guestSum;
}
updateScores();

/**
 * Attaches an event listener to a given score button and sets the value of the associated team input field.
 * @param {HTMLElement} scoreBtn - The score button to attach the event listener to.
 * @param {HTMLInputElement} teamInput - The team input field to set the value for.
 */
const setScoreValue = (scoreBtn, teamInput) => {
  scoreBtn.addEventListener("click", function () {
    teamInput.value = scoreBtn.dataset.score;
  });
};

homeTeamBtns.forEach((btn) => setScoreValue(btn, homePointInput));
guestTeamBtns.forEach((btn) => setScoreValue(btn, guestPointInput));

/**
 * Compares the home and guest team scores and applies appropriate CSS classes to the team containers.
 * Adds or removes CSS classes based on the score comparison result.
 */
function compareScores() {
  if (homeSum > guestSum) {
    homeTeamContainer.classList.remove("badScore", "neutralScore");
    homeTeamContainer.classList.add("greatScore");
    guestTeamContainer.classList.remove("greatScore", "neutralScore");
    guestTeamContainer.classList.add("badScore");
  } else if (guestSum > homeSum) {
    guestTeamContainer.classList.remove("badScore", "neutralScore");
    guestTeamContainer.classList.add("greatScore");
    homeTeamContainer.classList.remove("greatScore", "neutralScore");
    homeTeamContainer.classList.add("badScore");
  } else if (guestSum === homeSum) {
    homeTeamContainer.classList.remove("badScore", "greatScore");
    homeTeamContainer.classList.add("neutralScore");
    guestTeamContainer.classList.remove("badScore", "greatScore");
    guestTeamContainer.classList.add("neutralScore");
  }
}

entryBtns.forEach((btn) => {
  /**
   * Executes the corresponding logic based on the button's dataset values.
   * Updates the scores and applies the score comparison.
   * @param {Event} event - The button click event.
   */
  btn.addEventListener("click", function () {
    const isHomeBtn = btn.dataset.home === "true" ? true : false;
    const incScore = btn.dataset.incScore === "true" ? true : false;

    if (isHomeBtn) {
      // Score Input Validation on Home Team
      if (incScore) {
        if (homePointInput.value === "") return;
        homeSum += +homePointInput.value;
        updateScores();
        compareScores();
      } else {
        if (homeSum <= 0) return;
        homeSum -= +homePointInput.value;
        updateScores();
        compareScores();
      }
    }

    if (!isHomeBtn) {
      // Score Input Validation on Guest Team
      if (incScore) {
        if (guestPointInput.value === "") return;
        guestSum += +guestPointInput.value;
        updateScores();
        compareScores();
      } else {
        if (guestSum <= 0) return;
        guestSum -= +guestPointInput.value;
        updateScores();
        compareScores();
      }
    }
  });
});
