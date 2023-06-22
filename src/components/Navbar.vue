<script>
export default {
  name: 'Navbar'
};
</script>

<template>
  <div class="navbar">
    <img src="../images/Img-Blur.png" />
    <div></div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 18px 14px 24px;
  background-color: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;

  img {
    position: relative;
    margin-bottom: 20px;
    border-radius: 8px;
  }

  div {
    width: 190px;
    height: 26px;
    border-radius: 8px;
    margin-bottom: 172px;
    background: linear-gradient(0.25turn, #3c3c3c 0%, #444444 50%, #3c3c3c 100%);
  }
}
</style>
