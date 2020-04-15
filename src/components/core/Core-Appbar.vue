<template>
    <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
        app
    >
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer"></v-app-bar-nav-icon>
        
        <v-toolbar-title>Page title</v-toolbar-title>

        <!-- <v-btn
            v-for="(link, i) in links"
            :key="i"
            :to="link.to"
            class="ml-0 hidden-sm-and-down"
            @click="onClick($event, item)"
        >
            {{ link.text }}
        </v-btn> -->

        <v-spacer></v-spacer>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu
        left
        bottom
        >
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>

            <v-list>
                <v-list-item
                v-for="n in 5"
                :key="n"
                @click="() => {}"
                >
                <v-list-item-title>Option {{ n }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>

<script>
    import {
        mapGetters,
        mapMutations
    } from 'vuex'

    export default {
        computed: {
        ...mapGetters(['links'])
        },

        methods: {
        ...mapMutations(['toggleDrawer']),
        onClick (e, item) {
            e.stopPropagation()

            if (item.to || !item.href) return

            this.$vuetify.goTo(item.href)
        }
        }
    }
</script>
