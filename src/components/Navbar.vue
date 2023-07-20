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
@keyframes skeleton-animation {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(110px);
  }
}

.navbar {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 18px 14px 24px;
  background-color: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;

  &:after {
    position: absolute;
    content: '';
    width: 200px;
    height: 240px;
    border-radius: 8px;
    backdrop-filter: blur(6px);
    top: 18px;
    right: 14px;
  }

  img {
    margin-bottom: 20px;
    border-radius: 8px;
  }

  div {
    position: relative;
    width: 190px;
    height: 26px;
    border-radius: 8px;
    margin-bottom: 172px;
    background-color: #3c3c3c;

    &:after {
      content: '';
      position: absolute;
      width: 80px;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        90deg,
        rgba(227, 227, 227, 0) 0%,
        #444444b7 30%,
        #444 50%,
        #444444b7 70%,
        rgba(227, 227, 227, 0) 100%
      );
      animation: skeleton-animation 1.2s linear infinite alternate;
    }
  }
}
</style>
