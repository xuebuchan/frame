//局部混入
export const mixinsTest = {
    methods:{
        hello(){
        	console.log(this.$route.query,"query")
            console.log("hello");
            
        },
         world(){
            console.log("world");
            
        }
    },
    data(){
    	return{
    		message: 'hello',
      		foo: 'abc'
    	}  	
    },
    created(){
		console.log('mixin')
        this.hello()
    }
}