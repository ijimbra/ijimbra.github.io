let palindromes = [
    "CIVIC",
    "KAYAK",
    "LEVEL",
    "MADAM",
    "MOM",
    "NOON",
    "RACECAR",
    "RADAR",
    "REDDER",
    "REFER",
    "REPAPER",
    "ROTATOR",
    "ROTOR",
    "SAGAS",
    "SOLOS",
    "STATS",
    "TENET",
    "WOW"
]




window.setInterval(function newQuote() {
    let randomNumber = Math.floor(Math.random() * (palindromes.length));
    document.getElementById("quoteDisplay").innerHTML = palindromes[randomNumber];
  }, 750);