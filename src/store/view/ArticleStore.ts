import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import ArticleVo from '@/entity/view/ArticleVo';

@Module
class ArticleStore extends VuexModule {
    /* 使用namespace */
    public static namespaced = true;   

    /* 文章数据 */
    public articles: ArticleVo[] = require('@/data/articles.json');

    /* 获得文章数据 */
    get getArticleData(): Array<ArticleVo> {
        console.log('show article: ');
        console.log(this.articles);
        return this.articles;
    }

    /* 更新article内容（同步） */
    // @Mutation
    // public articlesMutation(argArticles: ArticleVo[]) {
    //     this.articles = argArticles;
    // }

    /* action例子 */
    // @Action({ commit: 'articlesMutation' })
    // public async initUserMenuAction(argUserId: string) {
    //     try {
    //         /* 调用异步方法 */
    //         const menudata = await this.sing(argUserId);
    //         return menudata;
    //     } catch (e) {
    //         /* 如果需要throw该exception，在业务层进行异常处理，则不需要写try catch，否则eslint会报错 */
    //         /* 如果throw这个exception，则在业务层进行异常处理 */
    //         // throw e;
    //     }
    // }
    
    /* action例子 */
    // @Action
    // public async menuDisplaySwitchAction(argDisplay: boolean) {
    //     this.context.commit('menuDisplaySwitchMutation' , argDisplay);
    // }

    /* 异步方法，一般用于向后台获取数据 */
    private sing(songName) {
        return new Promise(function(resolve, reject) {
            const i = Math.random() * 2;
            if(i > 1) {
                setTimeout(function() {
                    /* 成功 */
                    resolve(`来一首好听的歌吧~~~: ` + songName);
                }, 1000);    
            } else {
                /* 异常 */
                reject(`来一首好听的歌吧~~~: ` + songName);
            }
        });
    }
}
export default ArticleStore;
