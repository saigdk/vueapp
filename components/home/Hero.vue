<template>
<v-row align="center" justify="center">
  <v-col lg="10">
  <div class="heroblock">
   <v-carousel class="hidden-xs-only" >
  <v-carousel-item
  v-for="(item,i) in items"
  :key="i"
  >
 
   <v-row class="text-center" > 
  <v-col lg="4" class="mt-15">
   <v-card 
    class="mx-auto"
    max-width="344"
    height="350"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div  class="text-overline mb-4">
        Reviews
        </div>
        <v-card-text class="text-justify">
           This was one of the best experiences I have ever had with a bike taxi company. 
          I had problems finding connectivity from the office, and it was during the rush hour. 
           The driver was a professional and made my trip very easy, and the bonus is that it is pocket friendly. 
        </v-card-text>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
        <p>Ritu - Working Professional </p> 
    </v-list-item>
  </v-card>
  </v-col> 
     <v-col lg="4" class="mt-15">
   <v-card
    class="mx-auto"
    max-width="344"
    height="350"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Reviews
        </div>
        <v-card-text class="text-justify">
         It was a nice; experience after a long time that I enjoyed a bike ride. 
         The rider reached the pick-up location on time, and the onboarding process was also well put together. 
         Overall the app was good, and so were their services. 
        </v-card-text>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
        <p>Varun - Student</p>
    </v-list-item>
  </v-card>
  </v-col> 
     <v-col lg="4" class="mt-15">
   <v-card
    class="mx-auto"
    max-width="344"
    height="350"
  >
    <v-list-item three-line>
      <v-list-item-content>
         <div class="text-overline mb-4">
        Reviews
        </div>
        <v-card-text class="text-justify">
           Mopedo has the best service, and they are thriving to be the best bike taxi in the city. 
           I usually have to connect bus terminals to reach my workplace after I booked; a ride in this app. 
           It has made my life easier, and it is available anytime. 
        </v-card-text>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
        <p>Madhu - Working Professional </p>
    </v-list-item>
  </v-card>
  </v-col> 
   </v-row>

  </v-carousel-item>
</v-carousel>
  </div>
  </v-col>
</v-row>
</template>
<script>
export default{
    name:'Hero',
    data () {
      return {
        items: 
        [
          {
            src: '/',
          },
          {
            src: '/',
          },
          
        ]
      }
    },
  
}
</script>
