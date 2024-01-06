class Leader {
    receviceReques(offer) {
        console.log(`result:::`, offer);
    }
}
class Secretary {
    constructor() {
        this.leader = new Leader();
    }
    receviceReques(offer) {
        this.leader.receviceReques(offer);
    }
}
class developer {
    constructor(offer) {
        this.offer = offer;
    }
    applyFor(target) {
        target.receviceReques(this.offer);
    }
}
//
const dev = new developer("anonsytick upto 5m");
dev.applyFor(new Secretary());
