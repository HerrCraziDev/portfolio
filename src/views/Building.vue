<template>
  <div class="home center">
    <section>
      <h1>Ce site est parti en vacances à <span id="webdesignsmer">Webdesign sur Mer</span></h1>

      <img id="rocket" src="@/assets/rocket_building.svg" alt="">

      <p>
        Pendant qu'il se refait une beauté, n'hésitez pas à jeter un oeil à <router-link class="ob-link middle-underline" to="/cv">mon CV</router-link> 
        ou à <a class="ob-link middle-underline" href="mailto:contact@gleroyferrec.fr">m'envoyer un mail</a>. J'y travaille sur mon temps libre, il est donc possible 
        que cette refonte dure un certain temps.

        <img id="signature" src="@/assets/signature.png" alt="">
      </p>

      <div id="contact">

      </div>

    </section>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="less">
.home {
  display: block;
  height: 100%;
  background: url("../assets/code_bg.png");
  background-size: cover;

  section {
    width: 40%;
    // min-width: fit-content;
    font-family: 'Caveat';

    p {
      width: 100%;
      font-size: 2em;
    }

    #rocket {
      float: right;
      height: 25em;
    }

    #signature {
      float:right;
      margin-right: 2em;
      margin-top: 1em;
      height: 2.5em;
    }
  }

  h1 {
    width: 100%;

    text-align: center;
    text-transform: uppercase;
    font-size: 2.5em;
    font-family: 'Bebas Neue', Arial, sans-serif;

    #webdesignsmer {
      color: #f77;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
