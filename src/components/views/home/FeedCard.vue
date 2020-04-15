<template>
    <BaseCard :height="value.prominent ? 450 : 350" color="grey lighten-1" dark >
        <v-img :src="require(`@/assets/articles/${value.hero}`)" height="100%" gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)">
            <v-container v-if="!value.prominent" fill-height class="align-stretch pa-2">
                <v-row v-if="!value.prominent" class="text-right">
                    <v-col cols="12" mb="10" class="pt-0">
                        <v-chip label class="mx-0 mb-2 text-uppercase " color="grey darken-3" text-color="white" small @click.stop="">
                            {{ value.category }}
                        </v-chip>
                        <h3 class="title font-weight-bold mb-2">
                            {{ value.title }}
                        </h3>
                        <div class="caption">
                            {{ value.author }}<br>Date
                        </div>
                    </v-col>
                    
                </v-row>
                <v-row align="end" class="text-right">
                    <v-col class="pr-4">
                        <v-chip class="text-uppercase ma-0" color="primary" label small @click.stop="">
                            Read More
                        </v-chip>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
    </BaseCard>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class HelloWorld extends Vue {
    @Prop() private value!: object;

}
</script>