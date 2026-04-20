function callTestCases(){
    doesEnergyIncrease();
    setTimeout(() => {
        prestigeMultiplierCheck();
    }, 1000);
    setTimeout(() => {
        doesPrestigeReset();
    }, 2000);
    setTimeout(() => {
        areUpgradesAdded();
    }, 3000);
    setTimeout(() => {
        clickUpgradeDeduction();
    }, 4000);
    setTimeout(() => {
        localStorageCheck();
    }, 5000);
}

function doesEnergyIncrease(){
    energy = 0 
    var clickTest = document.body
    clickTest.click()
    console.log(energy > 0 ? "CASE " + " PASS" : "CASE " + " FAIL");
}

function prestigeMultiplierCheck(){
    energy = 100000000
    var currentMultiplier = prestigeMultiplier
    var openRebrand = document.getElementById("rebrand-button")
    var clickTest = document.body
    openRebrand.click()
    setTimeout(function(){
        var rebrandConfirm = document.getElementById("confirm-prestige")
        rebrandConfirm.click();
        console.log(prestigeMultiplier === currentMultiplier * 2.25 ? "CASE " + " PASS" : "CASE " + " FAIL");
    }, 500)
}

function doesPrestigeReset(){
    energy = 10000
    var openRebrand = document.getElementById("rebrand-button")
    openRebrand.click()
    setTimeout(function(){
        var rebrandResetCheck = document.getElementById("confirm-prestige")
        rebrandResetCheck.click();
        console.log(energy === 0 ? "CASE " + " PASS" : "CASE " + " FAIL");
    }, 500)
}

function areUpgradesAdded(){
    var upgradesLength = upgrades.length
    var openRebrand = document.getElementById("rebrand-button")
    openRebrand.click()
    setTimeout(function(){
        var rebrandResetCheck = document.getElementById("confirm-prestige")
        rebrandResetCheck.click();
        console.log("upgradesLength: " + upgradesLength)
        console.log("upgrades.length: " + upgrades.length)
        console.log(upgradesLength < upgrades.length ? "CASE " + " PASS" : "CASE " + " FAIL")
    }, 500)
}

function clickUpgradeDeduction(){
    idleValue = 0;
    energy = 100000
    var currentEnergy = 100000
    var realClickPrice = clickUpgradePrice;
    var openUpgradeMenu = document.getElementById("upgrades-title")
    openUpgradeMenu.click()
    setTimeout(function() {
        var clickUpgradeCheck = document.getElementById("upgrade0")
        clickUpgradeCheck.click()
        console.log(energy === currentEnergy - realClickPrice ? "CASE " + " PASS" : "CASE " + " FAIL")
    }, 500)
}

function localStorageCheck(){
    energy = 1000
    saveGame()
    energy = 0
    loadGame()
    console.log(energy === 1000 ? "CASE " + " PASS" : "CASE " + " FAIL")
}