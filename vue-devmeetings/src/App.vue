<template>

  <div id="app">
    <product-list :products="products"></product-list>
    <add-product @add-product="onAddProduct"></add-product>
  </div>
</template>

<script>
import uuid from 'uuid/v4';
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import ProductList from './components/ProductsList'
import AddProduct from './components/AddProduct'

Vue.use(VeeValidate);

export default {
  name: 'app',
  components: {
    ProductList,
    AddProduct
  },
  data() {
    return {
      products: [{
        id: 0,
        name: 'Kawka',
        lok: 'Mag01'
      }, {
        id: 1,
        name: 'Pizza',
        lok: 'Mag02'
      }],
      newProduct: {
        name: ''
      },
      newProduct2: {
        name: ''
      }
    }
  },
  methods: {
    onAddProduct(product) {
     this.products.push(product);
   }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
