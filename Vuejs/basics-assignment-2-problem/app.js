const app = Vue.createApp({
    data(){
        return{
            output: '',
            enteredOutput: ''
        };
    },
    methods: {
        showAlert(){
            alert("button has been pressed");
        },
        paraOutput(event){
            this.output = event.target.value;
        },
        pressedOutput(){
            this.enteredOutput = this.output;
        }
    }
});
app.mount('#assignment');