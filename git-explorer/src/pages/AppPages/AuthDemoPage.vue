
<template>

  <div class="q-pa-md q-gutter-sm">
    <q-btn color="primary" label="Auth" @click="loadDataWithAuth()" />
    <q-btn color="secondary" label="NO-Auth" @click="loadDataNoAuth()" />
    <q-btn color="secondary" label="Clear" @click="data = ''" />

  </div>
  <div class="q-ma-md">
    <q-scroll-area dark class="bg-dark text-white rounded-borders" style="height: 1200px; max-width: 1200px;">
      <div v-for="n in 1" :key="n" class="q-py-sm q-px-md">
        {{ data }}
      </div>
    </q-scroll-area>
  </div>
</template>

<script>
import { axios } from 'boot/axios'
import { ref } from 'vue'

export default {
  setup() {

    const data = ref(null)

    const userId = 'harshgit'
    const userToken = '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'

    const loadDataWithAuth = () => {
      loadData(userToken)
    }

    const loadDataNoAuth = () => {
      loadData('')
    }


    function loadData(token) {
      axios.get('https://api.github.com/users/harshgit/repos', { headers: { 'authorization': 'Basic ' + btoa(userId + ':' + token) } })
        //api.get('/github/gists/a69869b31927ebd5c6a94a0a416fa31c')
        .then((response) => {
          data.value = response.data
          data = JSON.stringify(data)
        })
        .catch((err) => {
          console.error('error in getting data from backend')
          console.error(err.message)

        })
    }

    return {
      data,
      loadDataWithAuth,
      loadDataNoAuth
    }
  }
}
</script>
