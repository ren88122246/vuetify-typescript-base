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
                <v-col v-if="!article.prominent" sm="6" md="4" v-for="(article) in articles" :key="article.title" :value="article">
                    <feed-card :value="article"></feed-card>
                    {{computedSmSize(article.prominent)}}
                </v-col>
                <!-- <v-col sm="6" md="4">
                    <feed-card :value="value"></feed-card>
                </v-col>
                <v-col sm="6" md="4">
                    <feed-card :value="value"></feed-card>
                </v-col>
                <v-col sm="6" md="4">
                    <feed-card :value="value"></feed-card>
                </v-col>
                <v-col sm="6" md="4">
                    <feed-card :value="value"></feed-card>
                </v-col>
                <v-col sm="6" md="4">
                    <feed-card :value="value"></feed-card>
                </v-col>
                <v-col sm="6" md="4">
                    <feed-card :value="value"></feed-card>
                </v-col>
                <v-col sm="6" md="4">
                    <feed-card :value="value"></feed-card>
                </v-col>
                <v-col sm="6" md="4">
                    <feed-card :value="value"></feed-card>
                </v-col>
                <v-col sm="6" md="4">
                    <feed-card :value="value"></feed-card>
                </v-col> -->
            </v-row>
        </v-container>
        
        <h1>{{ msg }}</h1>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { State, namespace, Getter, Action, Mutation } from 'vuex-class';
import ArticleVo from '@/entity/view/ArticleVo'
// @Component({
//   components: {
//     toolbar: () => import('@/components/core/Toolbar.vue'),
//     appbar: () => import('@/components/core/Appbar.vue')
//   },
// })
@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;
    @Getter('links')
    private menuDisplaySwitchAction: any;
    @State('drawer')
    private drawer: any;
    @namespace('articleStore').Getter('getArticleData')
    private articles: Array<ArticleVo>;

    private smLayout = 6;
    private smSize = 6;

    // 生命周期
    public mounted() {
        console.log('mounted');
    }
    // 生命周期
    public created() {
        console.log('created');
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
        console.log(value);
        // this.form.setFieldsValue({
        // note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        // });
    }

    public computedSmSize(prominent: boolean) {
        if(prominent === true) {
            this.smSize = 12;
        }
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
