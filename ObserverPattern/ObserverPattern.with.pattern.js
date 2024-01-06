class Observer {
    constructor(name) {
        this.namePick = name;
    }
    updateStatus(location) {
        this.goToHelp(location);
    }
    goToHelp(location) {
        console.log(
            `${JSON.stringify(this.namePick)}:::PING:::${JSON.stringify(
                location
            )}`
        );
    }
}
class Subject {
    constructor() {
        this.ObserverList = [];
    }
    addObserver(observer) {
        this.ObserverList.push(observer);
    }
    notify(location) {
        this.ObserverList.forEach((observer) =>
            observer.updateStatus(location)
        );
    }
}
const subject = new Subject();
// you pick
const riki = new Observer("Riki");
const sniper = new Observer("Sniper");
const pudge = new Observer("pudge");
// add riki and sniper to team
subject.addObserver(riki);
subject.addObserver(sniper);
subject.addObserver(pudge);
// push location to team
subject.notify({ long: 123, lat: 345 });
