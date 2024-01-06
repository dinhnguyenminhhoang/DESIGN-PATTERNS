class FifaCard {
    constructor(name, team, position, goals) {
        this.name = name;
        this.team = team;
        this.position = position;
        this.goals = goals;
    }
    score() {
        this.goals++;
    }
    clone() {
        return new FifaCard(this.name, this.team, this.position, this);
    }
}

//cr7
const prototypePattern = new FifaCard("cr7", "al", "sw", 0);
//clone
const m10 = prototypePattern.clone();
m10.name = "M10";
m10.team = "PSG";
m10.position = "ST";
m10.goals = 20;
console.log(
    `CR7:::${JSON.stringify(prototypePattern)}---M10:::${JSON.stringify(m10)}`
);
