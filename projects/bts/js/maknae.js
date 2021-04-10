let maknae;

function Maknae(memberName, health, strength, agility, speed) {
    this.memberName = memberName;
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let MaknaeMoves = {
    calcAttack: function () {
        let getMaknaeSpeed = maknae.speed;
        let getHyungSpeed = hyung.speed;
        let maknaeAttack = function() {
            let calcBaseDamage = maknae.strength * maknae.agility /1000;
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            let numberOfHits = Math.floor(Math.random() * Math.floor(maknae.agility/10)/2) +1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        let hyungAttack = function() {
            let calcBaseDamage = hyung.strength * hyung.agility /1000;
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            let numberOfHits = Math.floor(Math.random() * Math.floor(hyung.agility/10)/2) +1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        let getMaknaeHealth = document.querySelector('.health-maknae');
        let getHyungHealth = document.querySelector('.health-hyung');
        if (getHyungSpeed >= getMaknaeSpeed) {
            let hyungAttackValues = hyungAttack();
            let totalDamage = hyungAttackValues[0] * hyungAttackValues[1];
            maknae.health = maknae.health - totalDamage;
            alert(hyung.memberName + " hit " + hyungAttackValues[0] + " damage " + hyungAttackValues[1] + " times. Total damage: " + totalDamage);
            if (maknae.health <= 0) {
                alert(hyung.memberName + " wins! Refresh the browser to play again.");
                getMaknaeHealth.innerHTML = 'Health: 0';
                getHyungHealth.innerHTML = 'Health: ' + hyung.health;
            } else {
                getMaknaeHealth.innerHTML = 'Health: ' + maknae.health;
                let maknaeAttackValues = maknaeAttack();
                let totalDamage = maknaeAttackValues[0] * maknaeAttackValues[1];
            hyung.health = hyung.health - totalDamage;
            alert(maknae.memberName + " hit " + maknaeAttackValues[0] + " damage " + maknaeAttackValues[1] + " times. Total damage: " + totalDamage);
            }
            if (hyung.health <= 0) {
                alert(maknae.memberName + " wins! Refresh the browser to play again.");
                getHyungHealth.innerHTML = 'Health: 0';
                getMaknaeHealth.innerHTML = 'Health: ' + maknae.health;
            } else {
                getHyungHealth.innerHTML = 'Health: ' + hyung.health;
            }
        } else if (getMaknaeSpeed >= getHyungSpeed) {
            let maknaeAttackValues = maknaeAttack();
            let totalDamage = maknaeAttackValues[0] * maknaeAttackValues[1];
            hyung.health = hyung.health - totalDamage;
            alert(maknae.memberName + " hit " + maknaeAttackValues[0] + " damage " + maknaeAttackValues[1] + " times. Total damage: " + totalDamage);
            if (hyung.health <= 0) {
                alert(maknae.memberName + " wins! Refresh the browser to play again.");
                getHyungHealth.innerHTML = 'Health: 0';
                getMaknaeHealth.innerHTML = 'Health: ' + maknae.health;
            } else {
                getHyungHealth.innerHTML = 'Health: ' + hyung.health;
                let hyungAttackValues = maknaeAttack();
                let totalDamage = hyungAttackValues[0] * hyungAttackValues[1];
            maknae.health = maknae.health - totalDamage;
            alert(hyung.memberName + " hit " + hyungAttackValues[0] + " damage " + hyungAttackValues[1] + " times. Total damage: " + totalDamage);
            }
            if (maknae.health <= 0) {
                alert(hyung.memberName + " wins! Refresh the browser to play again.");
                getMaknaeHealth.innerHTML = 'Health: 0';
                getHyungHealth.innerHTML = 'Health: ' + hyung.health;
            } else {
                getMaknaeHealth.innerHTML = 'Health: ' + maknae.health;
            }
        }
    }
}

