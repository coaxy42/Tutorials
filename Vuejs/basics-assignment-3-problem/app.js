const app = Vue.createApp({
    data(){
        return {
            counter: 0
        };
    },
    watch: {
        result(){
            const that = this;
           setTimeout( function() {
               this.counter = 0;
           }, 5000 );
        }
    },
    computed:{
        result(){
            if(this.counter < 37){
                return 'Not there yet';
            }else if (this.counter > 37 ){
                return 'Too Much!'
            }
        }
    },
    methods: {
        addFive(num){
           this.counter = this.counter + num;
           console.log(this.counter);
        },
        addOne(num){
          this.counter =  this.counter + num;
          console.log(this.counter);
          
        }
    }
});
app.mount('#assignment');