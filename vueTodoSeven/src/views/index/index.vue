<template>
  <div class="hello">
    <h1>WELLCOME VUE_TODOLIST_SEVEN</h1>
    <footer-nav v-bind:class="{'isIndex': isNowPage}"></footer-nav>
  </div>
</template>

<script>
  import FooterNav from '../../components/Footer.vue'
  export default {
    name: 'index',
    components: {
      FooterNav
    },
    data () {
      return {
        isNowPage: true
      }
    }
  }
</script>

<style scoped>
h1 {
  font-weight: normal;
  font-size: 1.5em;
  margin-top: 20px;
}

</style>
