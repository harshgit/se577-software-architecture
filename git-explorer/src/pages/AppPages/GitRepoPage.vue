<template>
  <div class="q-pa-md">
    <q-table title="Git Repositories" :rows="rows" :columns="columns" row-key="name" />
  </div>
</template>

<script>
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
  { name: 'LOC', align: 'center', label: 'LOC', field: 'loc', sortable: true },
  { name: 'Contributor', label: 'Contributor', field: 'contributor', sortable: true },
  { name: 'Stars', label: 'Stars', field: 'stars' },
  { name: 'Clones', label: 'Clones', field: 'clones' },
  { name: 'Forks', label: 'forks', field: 'forks' },
  { name: 'usage', label: 'usage', field: 'usage', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const rows = [
  {
    name: 'Repo 1',
    contributor: "harsh",
    stars: 6.0,
    clones: 24,
    forks: 4.0,
    loc: 87,
    usage: '14%',
    language: 'java'
  },
  {
    name: 'Repo 2',
    contributor: "harsh",
    stars: 6.0,
    clones: 24,
    forks: 4.0,
    loc: 87,
    usage: '15%',
    language: 'java'
  }


]

export default {
  setup() {
    return {
      columns,
      rows
    }
  }
}
</script>
