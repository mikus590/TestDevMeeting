<template>
  <div id="app">
    <ul>
      <li v-for="p in products" :key="p.id">{{ p.name }}</li>
    </ul>
    <p v-if="!products.length">Brak produktu!</p>

    <form @submit.prevent="onSubmit()">
      <input
        name="product"
        v-model="newProduct.name"
        v-validate="'required|min:3'"
      >
      <input
        name="product2"
        v-model="newProduct2.name"
        v-validate="'required|min:10'"
      >

      <button>Add</button>
      <div v-show="errors.has('product')">
        {{ errors.first('product') }}
      </div>
      <div v-show="errors.has('product2')">
        {{ errors.first('product2') }}
      </div>
    </form>
  </div>
</template>

<script>
import uuid from 'uuid/v4';
import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

export default {
  name: 'app',
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
    onSubmit() {
      // 3. On the JS side we need to use yet another injected value called $validator to validate all the fields
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        this.products.push({
          id: uuid(),
          ...this.newProduct
        });
        this.newProduct.name = '';
        // 4/ and reset validation state after adding a product
        this.$validator.reset();
      });
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
