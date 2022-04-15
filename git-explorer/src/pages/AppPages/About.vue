<template>
  <div class="q-pa-md row items-start">
    <q-card flat class="my-card bg-primary text-white">
      <q-card-section>
        <div class="text-h6">About</div>
        {{ about }}
      </q-card-section>
    </q-card>

  </div>
  <!-- About, Background, Course, Publications, Photo-->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPageComponent',
  setup() {
    return {
      about:
        `Hello My name is Harsh Vardhan Bolakani and I am currently part of the Drexel Masters prrogram This is the repository used for the course SE-577 as part of the course

Currently I am working as Engineer 5 with Comcast Business and am part of a central team that develops tools, solutions, and frameworks for other software teams within Comcast Business.

With this course (SE-577), I do want to learn about various software Architectural patters that I haven't got a chance to apply in my projects and I am sure that learning them can spur ideas that will help me improve my products and enable me to become a better software engineer

I do have good experience building software with Java and have also done few university level projects with Python

In my free time, I love to play my guitar and love listening to rock, jazz and blues I am looking forward to learning and working with everyone in this course`,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
