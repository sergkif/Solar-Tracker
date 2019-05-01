import { bind } from 'decko';
import EventObserver from "../EventObserver";
import Modal from '../modal/Modal';

export default class Menu extends EventObserver {
    constructor(element) {
        super();
        this.element = element;
        this.createMenu();
    }

    createMenu() {
        var ul = document.querySelector(".menu")
        this.httpGet('article').then(function(articles){
            for (let article of articles) {
                let li = document.createElement('li');
            
                li.classList.add("menu__item");
            
                ul.appendChild(li);
                li.innerHTML = article.title;
                li.dataset.artId = article.id;
            }        
        })

        ul.addEventListener('click', this.sendTitle);

        var create = document.querySelector(".create");
        new Modal('', '', '', create);
    }
    
    async httpGet(theUrl) {
        var data = await fetch(theUrl);
        return data.json();
    }

    @bind
    sendTitle(e) {
        this.broadcast({id: e.target.dataset.artId});
    }
}