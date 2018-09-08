const app = new Vue({
  el:'#app',
  data:{
    products: [{
           id: 0,
           name: 'ProductOne'
         }, {
           id: 1,
           name: 'ProductTwo'
         }]
       },
  methods:{
    addNewProduct() {
      this.products.push({ id: 12, name:'ProductThree' });
    },
    removeLast() {
          this.products.pop();
        },
        AddProducts2(item){
          this.products.push(item);
        },
  }
});
