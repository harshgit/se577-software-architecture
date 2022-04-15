<template>
    <div>
        {{ details }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    name: 'GitRepoDetailsPage',
    setup() {
        return {
            details: 'Git Repo Details will be displayed here'
        };
    }
})


</script>