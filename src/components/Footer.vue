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
    min-width: 699px;
    height: 36px;
    border-radius: 8px;
    background: linear-gradient(0.25turn, #3c3c3c 0%, #444444 50%, #3c3c3c 100%);
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
