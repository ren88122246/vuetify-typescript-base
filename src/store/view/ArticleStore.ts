import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import ArticleVo from '@/entity/view/ArticleVo';

@Module
class ArticleStore extends VuexModule {
    
    public static namespaced: boolean = true;   // 这个属性
    /* 文章数据 */
    public articles: ArticleVo[] = require('@/data/articles.json');
    /* 获得文章数据 */
    get getArticleData(): Array<ArticleVo> {
        return this.articles;
    }
}
export default ArticleStore;
