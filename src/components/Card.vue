<template>
  <div class="card">
    <div class="card-content">
      <img :src="collection.imageUrl" :alt="collection.collector">
      <h4>{{collection.collector}}</h4>
      <p>{{collection.description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['collection'],
  name: 'card'
}
</script>

<style>
.card {
  background: #F5F5F5;
  padding: 10px;
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  cursor: pointer;
  -webkit-perspective: 1000;
  -webkit-backface-visibility: hidden;
  transition: all 100ms ease-in-out;
}

.card:hover {
  transform: translateY(-0.5em);
  background: #EBEBEB;
}

img {
  display: block;
  width: 100%;
}
</style>
