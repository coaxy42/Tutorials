const app = Vue.createApp({
    data() {
        return{
            tasks: [],
            eneteredTask: '',
            
            toggle: true
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.eneteredTask);
        },
        hideList(){
            
        }
    }
});
app.mount('#assignment');