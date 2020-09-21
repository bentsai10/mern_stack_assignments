class Unit{
    constructor(name, power, resilience){
        this.name = name;
        this.power = power;
        this.resilience = resilience;
        this.summoned = false;
    }
    attack(target){
        if (target instanceof Unit){
            target.resilience -= this.power;
        }else{
            throw new Error("Target must be a unit!")
        }
    }

    summon(){
        this.summoned = true;
    }

    showStats(){
        return "Power: " + this.power + " Resilience: " + this.resilience;
    }
}

class Effect{
    constructor(name, text, stat, magnitude){
        this.name = name;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if(target instanceof Unit){
            if(target.summoned == false){
                throw new Error("target hasn't been summoned yet!");
            }else{
                this.stat == "resilience" ? target.resilience += this.magnitude : target.power += this.magnitude;
            }
        }else{
            throw new Error("Target must be a unit!")
        }
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.units = [];
        this.effects = [];
    }
}

let player1 = new Player("Player 1");
let player2 = new Player("Player 2");

let unit1 = new Unit("Red Belt Ninja", 3, 4);
let unit2 = new Unit("Black Belt Ninja", 5, 4);

let effect1 = new Effect("Hard Algorithm", "increase target resilience by 3", "resilience", 3);
let effect2 = new Effect("Unhandled Promise Rejection", "reduce target resilience by 2", "resilience", -2);
let effect3 = new Effect("Pair Programming", "increase target power by 2", "power", 2);

player1.units.push(unit1);
player2.units.push(unit2);

player1.effects.push(effect1, effect3);
player2.effects.push(effect2);

//turn 1
player1.units[0].summon();
console.log("Player1 has summoned " + player1.units[0].name);
console.log(player1.units[0].summoned);
player1.effects[0].play(player1.units[0]);
console.log("Player1 has played " + player1.effects[0].name + " on " + player1.units[0].name + " to " + player1.effects[0].text);
console.log(player1.units[0].showStats());

//turn2
player2.units[0].summon();
console.log("Player2 has summoned " + player2.units[0].name);
console.log(player2.units[0].summoned);
player2.effects[0].play(player1.units[0]);
console.log("Player2 has played " + player2.effects[0].name + " on " + player1.units[0].name + " to " + player2.effects[0].text);
console.log(player1.units[0].showStats());

//turn3
player1.effects[1].play(player1.units[0]);
console.log("Player1 has played " + player1.effects[1].name + " on " + player1.units[0].name + " to " + player1.effects[1].text);
console.log(player1.units[0].showStats());
player1.units[0].attack(player2.units[0]);
console.log(player2.units[0].showStats());


