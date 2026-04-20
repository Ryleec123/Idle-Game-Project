
var energy = 0;
var idleValue = 1;
var clickValue = 1;
var energyDisplay = document.getElementById('energy-count')
var upgradeMenu = document.getElementById('upgrades-list')
var clickValueDisplay = document.getElementById('click-value-count')
var idleValueDisplay = document.getElementById('idle-value-count')
var clickPriceDisplay = document.getElementById('click-price-display')
var idlePriceDisplay = document.getElementById('idle-price-display')
var prestigeLevelDisplay = document.getElementById('prestige-level-display')
var nextPrestigeCost = document.getElementById('prestige-cost-display')
var energyAwayDisplay = document.getElementById('energy-away-display')
var resetButton = document.getElementById('reset-button')
var prestigeDisplay = document.getElementById('prestige-display')
var pricesDisplay = document.getElementById('current-drink-display')
var upgradesPanel = document.getElementById('upgrades-panel')
var clickUpgradeBtn = document.getElementById('upgrade0')
var idleUpgradeBtn = document.getElementById('upgrade1')
var currentlyDrinking = document.getElementById('drink-name')
var currentlyDrinkingDisplay = document.getElementById('prestige-multiplier-display')

var prestigeConfirmationDisplay = document.getElementById('prestige-confirmation-display')
var clickUpgradePrice = 25;
var idleUpgradePrice = 100;
var upgradesOpen = false;
var prestigeMultiplier = 1;
var prestigeCost = 1000000;
var prestigeLevel = 0;
var energyAway = 0;
var clickUpgradeLevel = 0;
var idleUpgradeLevel = 0;
var monsterCooldownDisplay = 30;
var monsterCooldown = "30 sec"
var monsterBonus = 0.5;
var redBullUpgradeLevel = 0;
var redBullUpgradePrice = 0;
var celciusUpgradeLevel = 0;
var celciusUpgradePrice = 0;
var ghostUpgradeLevel = 0;
var ghostUpgradePrice = 0;
var rockstarUpgradeLevel = 0;
var rockstarUpgradePrice = 0;
var bombUpgradeLevel = 0;
var bombUpgradeLevel = 0;
var upgrades = ["Upgrade Chug",
                'Upgrade IV',
]
var upgradeLevels = [clickUpgradeLevel,
                     idleUpgradeLevel,
                    monsterCooldown,
                    redBullUpgradeLevel,
                    celciusUpgradeLevel,
                    ghostUpgradeLevel,
                    rockstarUpgradeLevel,
                    bombUpgradeLevel]
var prestigeDrinks = ["Knockoff Generic 🤢",
                      "Monster 👹",
                      "Red Bull 🪽",
                      "Celcius 🍓",
                      "Ghost  Energy 👻",
                      "Rockstar ⭐",
                      "C4 Energy 🧨"
]
function saveGame(){
    var localStorageArray = [
        localStorage.setItem('energy', energy),
        localStorage.setItem('idleValue', idleValue),
        localStorage.setItem('clickValue', clickValue),
        localStorage.setItem('clickUpgradePrice', clickUpgradePrice),
        localStorage.setItem('idleUpgradePrice', idleUpgradePrice),
        localStorage.setItem('prestigeMultiplier', prestigeMultiplier),
        localStorage.setItem('prestigeCost', prestigeCost),
        localStorage.setItem('prestigeLevel', prestigeLevel),
        localStorage.setItem('clickUpgradeLevel', clickUpgradeLevel),
        localStorage.setItem('idleUpgradeLevel', idleUpgradeLevel),
        localStorage.setItem('upgradeLevels0', upgradeLevels[0]),
        localStorage.setItem('upgradeLevels1', upgradeLevels[1]),
    ]
};
function loadGame() {
    if (localStorage.getItem('energy') === null) return;
    energy = Number(localStorage.getItem('energy'));
    idleValue = Number(localStorage.getItem('idleValue'));
    clickValue = Number(localStorage.getItem('clickValue'));
    clickUpgradePrice = Number(localStorage.getItem('clickUpgradePrice'));
    idleUpgradePrice = Number(localStorage.getItem('idleUpgradePrice'));
    prestigeMultiplier = Number(localStorage.getItem('prestigeMultiplier'));
    prestigeCost = Number(localStorage.getItem('prestigeCost'));
    prestigeLevel = Number(localStorage.getItem('prestigeLevel'));
    upgradeLevels[0] = Number(localStorage.getItem('upgradeLevels0'));
    upgradeLevels[1] = Number(localStorage.getItem('upgradeLevels1'));
};
loadGame()
function buildUpgrades() {
  upgrades = ["Upgrade Chug",
                'Upgrade IV',
    ]
  
  if (prestigeLevel >= 1) upgrades.push("Unleash the Beast 👹");
  if (prestigeLevel >= 2) upgrades.push("Red Bull upgrade");
  if (prestigeLevel >= 3) upgrades.push("Celcius upgrade");
  if (prestigeLevel >= 4) upgrades.push("Ghost upgrade");
  if (prestigeLevel >= 5) upgrades.push("Rockstar upgrade");
  if (prestigeLevel >= 6) upgrades.push("Bomb upgrade");
}
buildUpgrades()
function updateUI() {
  energyDisplay.textContent = energy.toLocaleString('en-US', { maximumFractionDigits: 2 });
  clickValueDisplay.textContent = (clickValue * prestigeMultiplier).toLocaleString('en-US', { maximumFractionDigits: 2 });
  idleValueDisplay.textContent = (idleValue * prestigeMultiplier).toLocaleString('en-US', { maximumFractionDigits: 2 });
  clickPriceDisplay.textContent = clickUpgradePrice.toLocaleString('en-US', { maximumFractionDigits: 2 });
  idlePriceDisplay.textContent = idleUpgradePrice.toLocaleString('en-US', { maximumFractionDigits: 2 });
  prestigeLevelDisplay.textContent = prestigeLevel.toLocaleString('en-US', { maximumFractionDigits: 2 });
  nextPrestigeCost.textContent = prestigeCost.toLocaleString('en-US', { maximumFractionDigits: 2 });
  energyAway = prestigeCost - energy;
  energyAwayDisplay.textContent = energyAway.toLocaleString('en-US', { maximumFractionDigits: 2 });
  var levelDisplays = document.querySelectorAll('.level-display')
  levelDisplays.forEach(function(display) {
    var index = display.getAttribute('data-index')
    display.textContent = "(" + upgradeLevels[index] + ")"
    })
  if (energy < prestigeCost) {
    document.getElementById('rebrand-button').classList.add('rebrand-button-inactive')
    }   else {
        document.getElementById('rebrand-button').classList.remove('rebrand-button-inactive')
    }
    currentlyDrinking.textContent = prestigeDrinks[prestigeLevel]
    currentlyDrinkingDisplay.textContent = prestigeDrinks[prestigeLevel] + " energy multipler: " + prestigeMultiplier.toLocaleString('en-US', { maximumFractionDigits: 2 })
    if(prestigeLevel >= 7){
        var rebrandButton = document.getElementById("rebrand-button")
        rebrandButton.disabled = true;
        rebrandButton.textContent = "All drinks found! Congratulations!!!"
    }
}
setInterval(function(){
    energy += idleValue * prestigeMultiplier; 
    updateUI()
    saveGame()
}, 500)
var upgradesBtn = document.getElementById('upgrades-title')
     upgradesBtn.addEventListener('click', function() {
        if (upgradesOpen) {
            upgradeMenu.innerHTML = "";
            upgradesOpen = false;
            return
        };
        upgradesOpen = true;
        for (let i = 0; i < upgrades.length; i++) {
            var upgrade = document.createElement('button')
            upgrade.textContent = upgrades[i];
            upgradeMenu.appendChild(upgrade);
            var upgradeLevelDisplay = document.createElement('span')
            upgradeLevelDisplay.classList.add('level-display')
            upgradeLevelDisplay.setAttribute('data-index', i)
            upgradeLevelDisplay.textContent = " (" + upgradeLevels[i] + ")"
            upgrade.appendChild(upgradeLevelDisplay)
            upgrade.id = "upgrade" + i
    };
})

document.addEventListener('click', function(e){
    var target = e.target;
    if (target.tagName === 'SPAN') {
        target = target.parentElement;
    }
    if (target.id == 'upgrade0'){
        e.stopPropagation();
        if(clickUpgradePrice > energy){
            target.classList.add("tooBroke");
            setTimeout(function() {
                target.classList.remove("tooBroke");
            }, 1000);
            return;
        }
        else{
            upgradeLevels[0] += 1;
            energy -= clickUpgradePrice
            clickValue *=  1.3
            clickUpgradePrice *= 1.5
            updateUI()
        }
    }
    if (target.id == "upgrade1"){
        e.stopPropagation();
        if(idleUpgradePrice > energy){
            target.classList.add("tooBroke");
            setTimeout(function() {
                target.classList.remove("tooBroke");
            }, 1000);
            return;
            }
            else{
                upgradeLevels[1] += 1;
                energy -= idleUpgradePrice
                idleValue *= 1.5
                idleUpgradePrice *= 1.65
                updateUI()
            }
    }
    if(target.id == "upgrade2"){
        e.stopPropagation();
        energy = energy + (energy * monsterBonus)
        target.disabled = true;
        target.classList.add("tooBroke")
        monsterCooldownDisplay = 30;
        target.textContent = "The beast is asleep. \n (" + monsterCooldownDisplay + ")"
        const timer = setInterval(function(){
            monsterCooldownDisplay--;
            target.textContent = "The beast is asleep. " + "(" + monsterCooldownDisplay + ")"
        }, 1000)
        setTimeout(function(){
            clearInterval(timer)
            target.disabled = false;
            target.textContent = "Unleash the Beast 👹" + "("+ monsterCooldown +")"
            target.appendChild = monsterCooldown
            target.classList.remove("tooBroke")
        }, monsterCooldownDisplay * 100)
        updateUI()
    }
    if(target.id == "upgrade3"){
        e.stopPropagation();
    }
    if(target.id == "rebrand-button"){
        // if(energy > prestigeCost){
            var prestigeConfirmationDisplay = document.createElement('div')
            prestigeConfirmationDisplay.id = 'prestige-confirmation-display'
            document.body.appendChild(prestigeConfirmationDisplay)
            var prestigeWrapper = document.createElement('div')
            prestigeWrapper.id = 'prestige-wrapper'
            prestigeConfirmationDisplay.appendChild(prestigeWrapper)
            var prestigeLineOne = document.createElement('div')
            prestigeLineOne.textContent = "You're getting sick of " + prestigeDrinks[prestigeLevel] + "."
            prestigeLineOne.id = "prestige-line-1";
            prestigeWrapper.appendChild(prestigeLineOne)
            var prestigeLineTwo = document.createElement ('div')
            prestigeLineTwo.textContent = 'You may keep drinking it, however any side effects are no longer the responsibility of the company.'
            prestigeLineTwo.id = "prestige-line-2";
            prestigeWrapper.appendChild(prestigeLineTwo)
            var prestigeLineThree = document.createElement('div')
            prestigeLineThree.textContent = "You may also find a new flavor, which will reset your progress and provide a 1.5x boost to all upgrades. Confirm?"
            prestigeLineThree.id = "prestige-line-3";
            prestigeWrapper.appendChild(prestigeLineThree)
            var confirmPrestige = document.createElement('button')
            confirmPrestige.textContent = "Expand your empire"
            confirmPrestige.id = "confirm-prestige";
            prestigeWrapper.appendChild(confirmPrestige)
            var denyPrestige = document.createElement('button')
            denyPrestige.textContent = "NO! I STILL LIKE " + prestigeDrinks[prestigeLevel] + "!!!"
            denyPrestige.id = "deny-prestige";
            prestigeWrapper.appendChild(denyPrestige)
            prestigeDisplay.classList.add('hide-all')
            pricesDisplay.classList.add('hide-all')
            upgradesPanel.classList.add('hide-all')
            confirmPrestige.addEventListener('click', function(){
                prestigeMultiplier *= 2.25;
                energy = 0;
                clickValue = 1;
                idleValue = 1;
                clickUpgradePrice = 25;
                idleUpgradePrice = 100;
                prestigeCost *= 1.5;
                prestigeLevel += 1;
                upgradeLevels[0] = 0;
                upgradeLevels[1] = 0;
                prestigeConfirmationDisplay.remove()
                prestigeWrapper.remove()
                prestigeDisplay.classList.remove('hide-all')
                pricesDisplay.classList.remove('hide-all')
                upgradesPanel.classList.remove('hide-all')
                buildUpgrades();
                upgradeMenu.innerHTML = "";
                upgradesOpen = false;
                updateUI();
            })
            denyPrestige.addEventListener('click', function(){
                prestigeConfirmationDisplay.remove()
                prestigeWrapper.remove()
                prestigeDisplay.classList.remove('hide-all')
                pricesDisplay.classList.remove('hide-all')
                upgradesPanel.classList.remove('hide-all')
                updateUI();
            })
        //} 
        if(prestigeCost > energy){
            document.getElementById('rebrand-button').textContent = "Not enough energy! Take a nap or CLICK HARDER!!"
            setTimeout(() => {
                document.getElementById('rebrand-button').textContent = "NEXT DRINK"
            }, 1500);
        }

    }
    if(target.id !== 'upgrade0' &&
        target.id !== 'upgrade1' &&
        target.id !== 'upgrade2' &&
        target.id !== 'upgrade3' &&
        target.id !== 'upgrade4' &&
        target.id !== 'upgrade5' &&
        target.id !== 'upgrade6' &&
        target.id !== 'rebrand-button' &&
        target.id !== 'confirm-prestige' &&
        target.id !== 'deny-prestige' &&
        target.id !== 'upgrades-title'
    ){
        energy += clickValue * prestigeMultiplier; updateUI()
        var onClickDisplay = document.createElement('div')
        onClickDisplay.textContent = "+" + (clickValue * prestigeMultiplier).toLocaleString('en-US', { maximumFractionDigits: 2 }) + " energy!"
        onClickDisplay.style.position = 'absolute'
        onClickDisplay.style.left = 15 + e.clientX + 'px';
        onClickDisplay.style.top = -15 + e.clientY + 'px';
        document.body.appendChild(onClickDisplay)
        setTimeout(() => {
            onClickDisplay.remove();
        }, 500);
    }
})
resetButton.addEventListener('click', function resetGame() {
  localStorage.clear();
  location.reload();
})