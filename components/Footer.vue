<template>
  <v-footer class="pa-4 white--text" color="#111317">
    <v-container class="mt-5">
      <v-row>
        <v-col md="4" lg="8">
          <div class="d-flex justify-start">
            <h3 class="ml-1 mt-1 font-weight-medium white--text">Mopedo</h3>
          </div>
          <p class="mt-2">
            <v-btn
              text
              icon
              v-for="(item, i) in platforms"
              :key="i"
              :to="item.link"
              target="_blank"
              color="white"
            >
              <v-icon v-text="item.icon"></v-icon>
            </v-btn>
          </p>
        </v-col>
        <v-col md="4" lg="4">
          <v-row>
            <v-col md="4" lg="4">
              <ul>
                <li>
                  <a
                    class="text-decoration-none white--text  text-sm-body-2"
                    href="/"
                    title="Home"
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    class="text-decoration-none white--text  text-sm-body-2"
                    href="/"
                    title="Features"
                    >Features</a
                  >
                </li>
                <li>
                  <a
                    class="text-decoration-none white--text  text-sm-body-2"
                    href="/"
                    title="Pricing"
                    >Pricing</a
                  >
                </li>
                 <li>
                  <a
                    class="text-decoration-none white--text  text-sm-body-2"
                    href="/"
                    title="front"
                    >front</a
                  >
                </li>
              </ul>
            </v-col>
            <v-col md="4" lg="4">
              <ul>
                <li>
                  <a
                    class="text-decoration-none white--text  text-sm-body-2"
                    href="#"
                    title=""
                    >Support</a
                  >
                </li>
              </ul>
            </v-col>
            <v-col md="4" lg="4">
              <ul>
                <li>
                  <a
                    class="text-decoration-none white--text  text-sm-body-2"
                    href="/"
                    target="_blank"
                    title="Sign Up For Free"
                    >Sign Up For Free</a
                  >
                </li>
                <li>
                  <a
                    class="text-decoration-none white--text  text-sm-body-2"
                    href="/"
                    target="_blank"
                    title="Login"
                    >Login</a
                  >
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-15">
      <v-divider class="grey darken-4 mt-1 mb-2"></v-divider>
      <v-row>
        <v-col md="4" lg="7">
          <span class="text-sm-body-2"
            >&copy; {{ new Date().getFullYear() }} Mopedo. All Rights
            Reserved.
          </span>
        </v-col>
        <v-col md="6" lg="5" class="text-right">
          <a class="white--text darken-2 text-sm-body-2" href="/">Terms</a>
          |
          <a class="white--text darken-2 text-sm-body-2" href="/"
            >Privacy</a
          >
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
module.exports = {
  data() {
    return {
      platforms: [
        {
          title: "Twitter",
          icon: "mdi-twitter",
      
        },
        {
          title: "Linkedin",
          icon: "mdi-linkedin",
      
        },
        {
          title: "Facebook",
          icon: "mdi-facebook",
       
        },
      ],
    };
  },
};
</script>
