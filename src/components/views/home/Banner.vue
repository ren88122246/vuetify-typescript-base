<template>
    <BaseCard dark>
        <v-img class="grey lighten-2" height="400" width="100%" :src="require('@/assets/articles/blurcamera.jpg')">
            <v-container fill-height>
                <v-row fill-height align-center pa-3 no-gutters>
                    <v-col md="auto" offset-md="5">
                        <h1 class="display-3 font-weight-light">
                            The Art Of Travel
                        </h1>
                        <div class="subheading text-uppercase pl-2 mb-4">
                            Finding Beauty, One flight at a time
                        </div>
                        <v-btn color="primary" depressed>
                            Subscribe
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
            <v-row fill-height align-center pa-3>
                <v-col xs12 md7 offset-md5 class=".tests">
                    <h1 class="display-3 font-weight-light">
                        The Art Of Travel
                    </h1>
                    <div class="subheading text-uppercase pl-2 mb-4">
                        Finding Beauty, One flight at a time
                    </div>
                    <v-btn color="primary" depressed>
                        Subscribe
                    </v-btn>
                </v-col>
            </v-row>
        </v-img>
    </BaseCard>
</template>

<style lang="scss">
#tests {
    justify-content: flex-start
}
</style>