<script>
export default {
  name: 'Footer'
};
</script>

<template>
  <footer class="footer">
    <div></div>
    <button>&#10006;</button>
  </footer>
</template>

<style scoped lang="scss">
@keyframes skeleton-animation {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(519px);
  }
}

.footer {
  display: flex;
  align-self: center;
  justify-content: space-between;
  align-items: start;
  gap: 42px;
  max-width: 785px;
  padding: 18px;
  padding-right: 14px;
  background-color: #262626;
  border: 1px solid #4d4d4d;
  border-radius: 12px;

  div {
    position: relative;
    min-width: 699px;
    height: 36px;
    border-radius: 8px;
    background-color: #3c3c3c;

    &:after {
      content: '';
      position: absolute;
      width: 180px;
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

  button {
    background-color: transparent;
    border: none;
    color: #ffffff;
    margin-top: -8px;
    width: 12px;
    width: 12px;
    cursor: pointer;
  }
}
</style>
