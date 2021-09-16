<template>
  <div class="mt-5">
    <v-app-bar elevation="0" color="white"> 
       <v-btn text disabled>
       <img   
       class="mx-5"
       src="@/assets/images/bike.png"
       height="50px"
       width="200px"/>
       </v-btn> 
      <v-spacer></v-spacer>
      <v-btn
       text
       color="black"
       class="ml-1 hidden-xs-only"
       dark
       depressed
       >
      Home
      </v-btn>
      <v-btn
      text
      color="black"
      class="ml-1 hidden-xs-only"
      dark
      depressed
      >
      About-us
      </v-btn>
      <v-btn
      text
      color="black"
      class="ml-1 hidden-xs-only"
      dark
      depressed
      >
      Blog
      </v-btn>
      <v-btn
      text
      color="black"
      class="hidden-xs-only"
      >
      Careers
      </v-btn>
      <v-btn
      text
      color="black"
      class="hidden-xs-only"
      >
      Contact-us
      </v-btn>
      <v-btn
      rounded
      color="yellow"
      class="ml-1 hidden-xs-only black--text"
      dark
      depressed
      >
        Pre-Register
      </v-btn>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
      </span>
    </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary left>
      <v-list>
        <div>
          <v-btn text color="black" class="mt-3 font-weight-regular" href="/"> Home </v-btn>
        </div>
        <div>
          <v-btn text color="black" class="font-weight-regular" href="/">About-us </v-btn>
        </div>
        <div>
          <v-btn text color="black"   class="font-weight-regular" href="/">Blog </v-btn>
        </div>
        <div>
          <v-btn text color="black"   class="font-weight-regular" href="/">careers </v-btn>
        </div>
        <div>
          <v-btn text color="black" clas class="font-weight-regular" href="/">contact-us </v-btn>
        </div>
        <div>
          <v-btn
          class="text-center mt-3"
          rounded
          color="yellow"
          >
           Pre-Register
          </v-btn>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      drawer: false,
     
    };
  },
};
</script>


