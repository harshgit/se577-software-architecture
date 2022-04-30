<template>
  <div class="q-pa-md">
    <q-table title="Git Repositories" :rows="rows" :columns="columns" row-key="name" />
  </div>
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
      loadData
    }
  }
}
</script>
