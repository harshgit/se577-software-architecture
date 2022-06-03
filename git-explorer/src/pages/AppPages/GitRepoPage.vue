<template>
  <q-btn label="Repo Details" color="primary" @click="loadAdditionalData(selected[0]['name']); fixed = true" />
  <div class="q-pa-md">
    <q-table title="Git Repositories" :rows="rows" :columns="columns" row-key="name" selection="single"
      v-model:selected="selected" />
  </div>


  <q-dialog v-model="fixed">
    <q-card>
      <q-card-section>
        <div class="text-h6">Repository Details</div>
      </q-card-section>

      <q-separator />

      <q-card-section style="max-height: 50vh" class="scroll">
        <p> Repo Name: {{ selected[0]['name'] }} </p>
        <p>Contributors: {{ contributors }} </p>
        <p>Lates Commit: {{ lastCommit }}</p>


      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat label="Close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { api } from 'boot/axios'
import { onMounted, ref } from 'vue'

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Repo Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'Size', align: 'center', label: 'LOC', field: 'loc', sortable: true },
  { name: 'Contributor', label: 'Contributor', field: 'contributor', sortable: true },
  { name: 'Language', label: 'language', field: 'language' },
  { name: 'Stars', label: 'Stars', field: 'stars' },
  { name: 'Forks', label: 'forks', field: 'forks' }
  //{ name: 'usage', label: 'usage', field: 'usage', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = []
// const rows = [
//   {
//     name: 'Repo 1',
//     contributor: 'harsh',
//     stars: 6.0,
//     clones: 24,
//     forks: 4.0,
//     loc: 87,
//     usage: '14%',
//     language: 'java'
//   },
//   {
//     name: 'Repo 2',
//     contributor: 'harsh',
//     stars: 6.0,
//     clones: 24,
//     forks: 4.0,
//     loc: 87,
//     usage: '15%',
//     language: 'java'
//   }


// ]

export default {
  setup() {

    const data = ref(null)
    const fixed = ref(false)
    const lastCommit = ref('')
    const totalCommits = ref(0)
    const contributors = ref([])


    function loadData() {
      api.get('/github/users/harshgit/repos')
        .then((response) => {
          data.value = response.data
          const repos = response.data
          populateRows(repos)
        })
        .catch((err) => {
          console.error('error in getting data from backend')
          console.error(err.message)

        })
    }

    function loadAdditionalData(repoName) {
      console.log(repoName)
      loadContributionsData(repoName)
      loadCommitData(repoName)
    }

    function loadContributionsData(repoName) {
      contributors.value = []
      api.get('/github/repos/harshgit/' + repoName + '/contributors')
        .then((response) => {
          const responseData = response.data
          responseData.forEach((user) => {
            contributors.value.push(user.login)
          })
        })
        .catch((err) => {
          console.error('error in getting data from backend')
          console.error(err.message)

        })
    }

    function loadCommitData(repoName) {
      api.get('/github/repos/harshgit/' + repoName + '/commits')
        .then((response) => {
          const responseData = response.data
          totalCommits.value = responseData.size
          lastCommit.value = responseData[0].commit.message
        })
        .catch((err) => {
          console.error('error in getting data from backend')
          console.error(err.message)

        })
    }
    function populateRows(repos) {
      repos.forEach((repo) => {
        const obj = {}
        obj['name'] = repo.name;
        obj['stars'] = repo.stargazers_count;
        obj['language'] = repo.language;
        obj['clones'] = repo.clones;
        obj['forks'] = repo.forks_count;
        obj['loc'] = repo.size;
        obj['contributor'] = 'harsh';

        rows.push(obj);
      })

    }

    onMounted(loadData)
    return {
      columns,
      rows,
      data,
      loadData,
      fixed,
      selected: ref([]),
      totalCommits,
      lastCommit,
      contributors,
      loadAdditionalData

    }
  }
}
</script>
