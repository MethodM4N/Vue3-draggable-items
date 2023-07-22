<script>
export default {
  name: 'Navbar'
};
</script>

<template>
  <div class="navbar">
    <img src="../images/Img-Blur.png" />
    <div class="navbar__skeleton"></div>
    <div class="navbar__skeleton navbar__skeleton_2"></div>
    <div class="navbar__skeleton navbar__skeleton_3"></div>
    <div class="navbar__skeleton navbar__skeleton_2"></div>
    <div class="navbar__skeleton navbar__skeleton_4"></div>
  </div>
</template>

<style scoped lang="scss">
@keyframes skeleton-animation {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(130%);
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

  &__skeleton {
    position: relative;
    background-color: #3c3c3c;
    width: 190px;
    height: 26px;
    margin-bottom: 30px;
    border-radius: 8px;

    &_2 {
      width: 170px;
      height: 13px;
      margin-bottom: 10px;
    }

    &_3 {
      width: 190px;
      height: 13px;
      margin-bottom: 10px;
    }

    &_4 {
      width: 140px;
      height: 13px;
      margin-bottom: 60px;
    }

    &:after {
      content: '';
      position: absolute;
      width: 42%;
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
