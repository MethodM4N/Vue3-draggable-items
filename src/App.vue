<template>
  <div class="main-content">
    <div class="main-content__flex">
      <Nav-bar />
      <Main-grid />
    </div>

    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import MainGrid from '@/components/MainGrid.vue';

export default {
  name: 'Main',
  components: {
    NavBar,
    MainGrid,
    Footer
  }
};
</script>

<style lang="scss">
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  background-color: #1e1e1e;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  font-weight: 400;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto 24px;
  max-width: 849px;
  padding: 32px;
  background-color: #1d1d1d;

  &__flex {
    display: flex;
    justify-content: space-between;
  }
}
</style>
