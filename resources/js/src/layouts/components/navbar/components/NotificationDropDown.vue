<template>
  <!-- NOTIFICATIONS -->
  <div>
  </div>
</template>

<script>
import Vue from 'vue';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import VueHtmlToPaper from 'vue-html-to-paper';
const options = {
  name: '_blank',
  specs: ['fullscreen=yes', 'titlebar=no', 'scrollbars=no'],
  styles: [
    '/css/bootstrap.min.css',
    '/js/bootstrap.min.js',
    '/js/jquery.min.js',
    '/css/voucher.css',
  ],
};
Vue.use(VueHtmlToPaper, options);
export default {
  components: {
    VuePerfectScrollbar,
  },
  data() {
    return {
      loans: [],
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },
  methods: {
    openPrint() {
      let routeData = this.$router.resolve({ path: '/imprimirPendientes' });
      window.open(routeData.href, '_blank');
    },
  },
};
</script>
