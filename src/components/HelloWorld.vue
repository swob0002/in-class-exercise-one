<template>
  <div class="hello">
    <!-- input + inline validation flexbox -->
    <div class="input-wrapper">
      <input type="text" v-model="inputValue" v-bind:class="inputValidationClass">
      <div v-if="inlineValidationClass" class="inline-validation">you exceeded 50 characters</div>
    </div>

    <!-- button flexbox -->
    <div class="button-wrapper">
      <button v-bind:disabled="isButtonDisabled">Submit</button>
    </div>
  </div>


<!--
Requirements:
- (model) input field for text
- (conditional class) inline validation 1: exceeding 50 characters, show "you exceeded 50 characters!" 
- (conditional class) inline validation 2: exceeding 50 characters, show highlighted border in input
- (bind) disable button conditionally: with no input, disable the button until it has an input. If input length is bigger than 50, then disable the button again

vue model
vue bind  ((find form field attribute))
vue -if
vue bind   ((find button attribute))
-->


  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div> -->
</template>

<script src="./HelloWorld.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./HelloWorld.css"></style>
