<template>
    <div class="hello">

        <Banner></Banner>

        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->
        <!-- {{menuDisplaySwitchAction}} -->

        <v-container fluid>
            <v-row>
                <v-col md="4" v-for="(article) in articles" :key="article.title" :value="article" :sm="computedSmSize(article.prominent)">
                    <feed-card :value="article"></feed-card>
                </v-col>
            </v-row>
        </v-container>
        
        <!-- <h1>{{ msg }}</h1> -->

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { State, namespace, Getter, Action, Mutation } from 'vuex-class';
import ArticleVo from '@/entity/view/ArticleVo'
import md5 from 'md5';
import { getLogin } from "@/api/login";
// @Component({
//   components: {
//     toolbar: () => import('@/components/core/Toolbar.vue'),
//     appbar: () => import('@/components/core/Appbar.vue')
//   },
// })
@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    /* TypeScript vuex vuex-class 用法 */
    /* 1.直接取state（store里没写） */
    @State('drawer')
    private drawer: any;
    /* 2.取state的get */
    // @Getter('links')
    // private menuDisplaySwitchAction: any;
    /* 3.取namespace中的状态 */
    @namespace('articleStore').Getter('getArticleData')
    private articles: Array<ArticleVo>;
    /* 4.array也可以这样写 */
    // @namespace('menuStore').Getter('getMenuList')
    // private menuList!: ArticleVo[];
    /* 5.Boolean型 */
    // @namespace('menuStore').Getter('getMenuDisplay')
    // private vis!: boolean;
    /* 6.sotre里的action */
    // @namespace('menuStore').Action('initUserMenuAction')
    // private initUserMenuAction: any;
    /* 7.sotre里的action */
    // @namespace('menuStore').Mutation('initUserMenuAction')
    // private initUserMenuMutation: any;

    private smLayout = 6;
    private smSize = 6;

    // 生命周期
    public mounted() {
            // getLogin({
            //     loginName: 'admin',
            //     passWd: md5('1234567'),
            //     captcha: '1111'
            // }).then(res => {
            //     console.log(res) 
            // }).catch(err => {
            //     console.log(err)
            // });

        /* vuex action */
        // this.menuDisplaySwitchAction(false);
        /* vuex mutation */
        // this.initUserMenuMutation(false);
    }
    // 生命周期
    public created() {
        console.log('created');
        console.log(this.articles);
    }

    public handleSubmit(e: any) {
        e.preventDefault();
        // this.form.validateFields((err: any, values: any) => {
        // if (!err) {
        //     console.log('Received values of form: ', values);
        // }
        // });
    }
    public handleSelectChange(value: any) {
        // this.form.setFieldsValue({
        // note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        // });
    }

    public computedSmSize(prominent: boolean) {
        let smsize = 6;
        if(prominent === true) {
            smsize = 12;
        }
        return smsize;
    }

    @Watch('txt')
    public test() {
        alert(11);
    }
    
    private get computedColSm() {
        return this.smLayout;
    }
    private set computedColSm(sm) {
        this.smLayout = sm;
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
