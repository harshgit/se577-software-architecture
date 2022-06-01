
<template>
  <div class="q-ma-md">
    <q-scroll-area dark class="bg-dark text-white rounded-borders" style="height: 200px; max-width: 800px;">
      <div v-for="n in 1" :key="n" class="q-py-sm q-px-md">
        {{ content }}
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import { api } from 'boot/axios'
import { onMounted, ref } from 'vue'

export default {
  setup() {

    const data = ref(null)
    const content = ref(null)


    function loadData() {
      api.get('/github/gists/a69869b31927ebd5c6a94a0a416fa31c')
        .then((response) => {
          data.value = response.data
          const files = data.value.files
          populateContent(files)
        })
        .catch((err) => {
          console.error('error in getting data from backend')
          console.error(err.message)

        })
    }
    function populateContent(files) {

      const obj = {}
      obj['name'] = 'helloworld.py';
      var raw = files['helloworld.py'].content
      raw = raw.replaceAll(/\\"/g, '"');
      obj['content'] = raw;
      content.value = obj;


    }

    onMounted(loadData)
    return {
      data,
      content,
      loadData
    }
  }
}
</script>
