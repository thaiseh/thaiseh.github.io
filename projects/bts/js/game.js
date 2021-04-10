
let GameManager = {
    setGameStart: function (memberName) {
        this.resetPlayer(memberName);
        this.setPreFight(memberName);
    },
    resetPlayer: function (memberName) {
        switch (memberName) {
            case "JIMIN":
                maknae = new Maknae(memberName, 150, 60, 200, 50);
                break;
            case "JUNGKOOK":
                maknae = new Maknae(memberName, 100, 100, 100, 200);
                break;
            case "V":
                maknae = new Maknae(memberName, 80, 90, 50, 150);
                break;
            case "JIN":
                hyung = new Hyung(memberName, 120, 70, 50, 100);
                break;
            case "SUGA":
                hyung = new Hyung(memberName, 130, 50, 50, 100);
                break;
            case "RM":
                hyung = new Hyung(memberName, 110, 90, 50, 100);
                break;
            case "JHOPE":
                hyung = new Hyung(memberName, 90, 80, 50, 100);
                break;
        }
        let getInterface = document.querySelector(".interface");
        if (memberName === "JIMIN" || memberName === "JUNGKOOK" || memberName === "V") {
            getInterface.innerHTML = '<img src="img/maknae/' + memberName + '.jpg" class="img-avatar"><div><h3>' + memberName + '</h3><p class = "health-maknae">Health: ' + maknae.health + '</p><p>Strength: ' + maknae.strength + '</p><p>Agility: ' + maknae.agility + '</p><p>Speed: ' + maknae.speed + '</p></div>';
        } else {
            getInterface.innerHTML = '<img src="img/hyung/' + memberName + '.jpg" class="img-avatar"><div><h3>' + memberName + '</h3><p class = "health-hyung">Health: ' + hyung.health + '</p><p>Strength: ' + hyung.strength + '</p><p>Agility: ' + hyung.agility + '</p><p>Speed: ' + hyung.speed + '</p></div>';
        }
    },
    setPreFight: function (memberName) {
        let getHeader = document.querySelector(".header");
        let getAction = document.querySelector(".action");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an opponent!';
        if (memberName === "JIMIN" || memberName === "JUNGKOOK" || memberName === "V") {
            let f = "okayy";
            getAction.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFightMaknae()">Search for an opponent!</a>';
            getArena.style.visibility = "visible";
        } else {
            getAction.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFightHyung()">Search for an opponent!</a>';
            getArena.style.visibility = "visible";
        }
    },
    setFightMaknae: function() {
        let getHeader = document.querySelector(".header");
        let getAction = document.querySelector(".action");
            let hyungJIN = new Hyung ("JIN", 120, 70, 50, 100);
            let hyungSUGA = new Hyung ("SUGA", 130, 50, 50, 100);
            let hyungRM = new Hyung ("RM", 110, 90, 50, 100);
            let hyungJHOPE = new Hyung ("JHOPE", 90, 80, 50, 100);
            let getHyung = document.querySelector(".hyung");
            let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(4));
            switch (chooseRandomEnemy) {
                case 0:
                    hyung = hyungJIN;
                    break;
                case 1:
                    hyung = hyungSUGA;
                    break;
                case 2:
                    hyung = hyungRM;
                    break;
                case 3:
                    hyung = hyungJHOPE;
                    break;
            }
            getHeader.innerHTML = '<p>Task: Choose your move!</p>';
            getAction.innerHTML = '<a href="#" class="btn-prefight" onclick="MaknaeMoves.calcAttack()">Attack!</a>';
            getHyung.innerHTML = '<img src="img/hyung/' + hyung.memberName + '.jpg" class="img-avatar"><div><h3>' + hyung.memberName + '</h3> <p class = "health-hyung">Health: ' + hyung.health + '</p><p>Strength: ' + hyung.strength + '</p><p>Agility: ' + hyung.agility + '</p><p>Speed: ' + hyung.speed + '</p></div>';
        },
    setFightHyung: function() { 
            let maknaeJIMIN = new Hyung ("JIMIN", 150, 60, 200, 50);
            let maknaeJUNGKOOK = new Hyung ("JUNGKOOK", 100, 100, 100, 200);
            let maknaeV = new Hyung ("V", 80, 90, 50, 150);
            let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
            let getHeader = document.querySelector(".header");
            let getAction = document.querySelector(".action");
            switch (chooseRandomEnemy) {
                case 0:
                    maknae = maknaeJIMIN;
                    break;  
                case 1:
                    maknae = maknaeJUNGKOOK;
                    break;
                case 2:
                    maknae = maknaeV;
                    break;
        }
        let getMaknae = document.querySelector(".hyung");
        getHeader.innerHTML = '<p>Task: Choose your move!</p>';
        getAction.innerHTML = '<a href="#" class="btn-prefight" onclick="MaknaeMoves.calcAttack()">Attack!</a>';
        getMaknae.innerHTML = '<img src="img/maknae/' + maknae.memberName + '.jpg" class="img-avatar"><div><h3>' + maknae.memberName + '</h3> <p class = "health-maknae">Health: ' + maknae.health + '</p><p>Strength: ' + maknae.strength + '</p><p>Agility: ' + maknae.agility + '</p><p>Speed: ' + maknae.speed + '</p></div>';

    }
}
