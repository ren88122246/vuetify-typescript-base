export default class ArticleVo {
    public title: string;
    public author: string;
    public category: string;
    public hero: string;
    public prominent: boolean;

    constructor(title: string, author: string, category: string, hero: string, prominent: boolean) {
        this.title = title;
        this.author = author;
        this.category = category;
        this.hero = hero;
        this.prominent = prominent;
    }
}
