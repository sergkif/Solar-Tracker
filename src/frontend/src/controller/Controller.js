import Menu from "../menu/Menu"
import Article from "../article/Article"
import Header from "../header/Header"
import User from "../user/User"

const menuElement = document.querySelector(".menu");
const headerElement = document.querySelector(".header");
const articleElement = document.querySelector(".article");

export default class Controller {
    constructor () {
        this.header = new Header(headerElement);
        this.menu = new Menu(menuElement);
        this.httpGet(`article`).then(function(articles){
            console.log(articles.status);
            for (let article of articles) {
                new Article(article);
            }
        });
        this.header.subscribe(data => {
            if (data.content == "home") {
                this.clearArticles();
                this.httpGet(`article`).then(function(articles){
                    console.log(articles.status);
                    for (let article of articles) {
                        new Article(article);
                    }
                });
            }
        });
        this.menu.subscribe(data => {
            this.clearArticles();

            this.httpGet(`article/${data.id}`).then(function(article){
                new Article(article);
                console.log(article.status);
            });
        });
        if(frontendData) new User(frontendData.profile);
    }

    async httpGet(theUrl){
        var data = await fetch(theUrl);
        return data.json();
    }

    clearArticles() {
        // while(articleElement.firstChild) articleElement.removeChild(articleElement.firstChild);
        var gridArticle = document.querySelector(".grid__article");
        while(gridArticle.firstChild) gridArticle.removeChild(gridArticle.firstChild);
    }
}