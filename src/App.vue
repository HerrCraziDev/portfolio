<template>
  <div id="app" class="dark">
    <!-- TODO: Add header component here -->
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

  color: #555;
  min-height: 100vh;

  &.dark {
    color: white;
    background-color: #282c34;
  }

  &>* {
    flex-grow: 1;
  }
}

html, body {
  margin: 0;
  padding: 0;
}
</style>
