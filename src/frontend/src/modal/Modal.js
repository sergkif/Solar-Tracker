import { bind } from 'decko';

export default class Modal {
    constructor (id, title, content, openButton) {
        var body = document.querySelector("body");
        this.id = id;


        var modal = document.createElement("div");
        modal.classList.add("modal");
        this.modal = modal;
        var overlay = document.createElement("div");
        overlay.classList.add("overlay");
        this.overlay = overlay;

        body.appendChild(this.modal);
        body.appendChild(this.overlay);


        var closeButton = document.createElement("div");
        closeButton.classList.add("modal__closeButton");
        this.closeButton = closeButton;
        this.openButton = openButton;

        var titleLabel = document.createElement("label");
        titleLabel.innerHTML = "Title";
        var titleInput = document.createElement("textarea");
        titleInput.classList.add("modal__titleInput");
        this.titleInput = titleInput;
        this.titleInput.innerHTML = title;
        this.titleInput.setAttribute("id", "title");
        titleLabel.setAttribute("for", "title");
        titleLabel.classList.add("modal__labelTitle");
        modal.appendChild(titleLabel);

        var contentLabel = document.createElement("label");
        contentLabel.innerHTML = "Content";
        var contentInput = document.createElement("textarea");
        contentInput.classList.add("modal__contentInput");
        this.contentInput = contentInput;
        this.contentInput.innerHTML = content;
        this.contentInput.setAttribute("id", "content");
        contentLabel.setAttribute("for", "content");
        contentLabel.classList.add("modal__labelContent");
        modal.appendChild(contentLabel);

        var submit = document.createElement("button");
        submit.classList.add("modal__submit");
        this.submit = submit;
        this.submit.innerHTML = "Submit";
        
        
        modal.appendChild(this.closeButton);
        modal.appendChild(this.titleInput);
        modal.appendChild(this.contentInput);
        modal.appendChild(this.submit);

        this.toggleMethod(this.closeButton, this.modal, this.overlay);
        this.toggleMethod(this.openButton, this.modal, this.overlay);
        this.submit.addEventListener('click', this.httpPost);
    }

    toggleMethod (element, modal, overlay) {
        element.addEventListener("click", function() {
            modal.classList.toggle("modal__open");
            overlay.classList.toggle("overlay__open");
        });
    }

    @bind
    async httpPost() {
        await fetch('article', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ id: this.id, title: this.titleInput.value, content: this.contentInput.value})})
        .then(function (response) {
            console.log(response.status);
        });
        this.modal.classList.toggle("modal__open");
        this.overlay.classList.toggle("overlay__open");
    }
}