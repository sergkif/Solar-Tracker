import { bind } from 'decko';
import Modal from "../modal/Modal";

export default class Article {
    constructor({id, title, content, image}) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.image = image;
        this.createArticle(title, content, image);
    }

    createArticle(title, content, image) {
        var container = document.querySelector(".article");

        var h1 = document.createElement("h1");
        h1.classList.add("article__title");
        h1.innerHTML = title;
        container.appendChild(h1);

        var div = document.createElement("div");
        div.classList.add("article__content");
        div.innerHTML = content;
        container.appendChild(div);

        if(image) {
            var img = document.createElement("img");
            img.classList.add("article__image");
            img.src = `img/${image}`;
            container.appendChild(img);
            img.classList.add("article__image_visible");
        }

        var edit = document.createElement("div");
        edit.classList.add("article__edit");
        edit.innerHTML = "edit";
        h1.appendChild(edit);
        new Modal(this.id, this.title, this.content, edit);

        var del = document.createElement("div");
        del.classList.add("article__delete");
        del.innerHTML = "delete";
        h1.appendChild(del);
        del.addEventListener('click', this.httpDelete);
    }

    @bind
    async httpDelete() {
        await fetch(`article/ + ${this.id}`, { method: 'DELETE'})
        .then(function (response) {
            console.log(response.status);
        });
    }
}