<template>
    <div>
        <div v-if="type=='business'" class="center">
            <h1>
                Businesses
            </h1>
        </div>
        <div v-if="type=='activity'" class="center">
            <h1>
                Activities
            </h1>
        </div>
        <div v-if="type=='promotion'" class="center">
            <h1>
                Promotions
            </h1>
        </div>
        <div class="center drop-box ">
            <select class="form-control drop backgroudcolor1" v-model="type">
                        <option value="business">
                          Businesses
                        </option>
                        <option value="activity">
                          Activities
                        </option>
                        <option value="promotion">
                          Promotions
                        </option>
        </select>
        </div>
        
    <div v-if="type=='business'">
        <businessPage :startP="startP" :endP="endP"></businessPage>
    </div>
    <div v-if="type=='activity'">
        <activityPage  :startP="startP" :endP="endP"></activityPage>
    </div>
    <div v-if="type=='promotion'">
        <promotionPage  :startP="startP" :endP="endP"></promotionPage>
    </div>
  </div>
</template>

<script>
    import businessPage from './businessesPage'
    import activityPage from './activitiesPage'
    import promotionPage from './promotionsPage'

  export default {
      props: ['startP', 'endP'],
      name: 'home',
      data() {
          return {
              type: 'business'
          }
      },
      created: function () {
        if(localStorage.userObj){
            var user = JSON.parse(localStorage.userObj);
            if(user.userType == "Business"){
                this.startP();
                window.location = '/profile/?username='+ user.username;
            }
        }
      },
      components: {
            businessPage: businessPage,
            activityPage: activityPage,
            promotionPage: promotionPage
        }

  }
   
</script>
<style scoped>
    .drop-box {
        position: relative;
        height: 70px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        -webkit-animation-name: example;
        /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 1s;
        /* Safari 4.0 - 8.0 */
        animation-name: example;
        animation-duration: 0.75s;
    }

    h4 {
        -webkit-animation-name: example;
        /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 1s;
        /* Safari 4.0 - 8.0 */
        animation-name: example;
        animation-duration: 0.75s;
    }

    @keyframes example {
        from {
            transform: translateY(-200px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>