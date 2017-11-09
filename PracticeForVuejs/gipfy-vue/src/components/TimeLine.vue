<template>
  <main class="mdl-layout__content">
    <div class="page-content">
      <search></search>
      <card v-for="gif in gifs" :gif="gif">
      </card>
    </div>
  </main>
</template>

<script>
import Search from './Search'
import Card from './Card'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['gifs'])
  },
  components: {
    Search,
    Card
  }
}
</script>