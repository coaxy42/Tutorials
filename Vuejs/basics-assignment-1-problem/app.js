const app = Vue.createApp({
    data() {
        return {
            myName: 'Billy',
            myAge: 23,
            plusFive: "",
            image:'https://media-cdn.tripadvisor.com/media/photo-s/0b/19/d4/ba/outside-bbq-area-for.jpg'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            return randomNumber;
        },
        futureAge() {
            plusFive = this.myAge + 5;
            return plusFive;
        },
        getImage(){

        }
    }
});

app.mount('#assignment');