import EventObserver from "../EventObserver";

export default class Header extends EventObserver {
    constructor (element) {
        super();
        this.element = element;
        this.element.addEventListener('click', (e) => {
            this.broadcast({content: "home"});
        });
    }
}