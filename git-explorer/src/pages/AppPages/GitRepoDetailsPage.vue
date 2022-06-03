<template>
    <div>
        {{ content }}
    </div>

</template>

<script lang="ts">
import { api } from 'boot/axios';
import { defineComponent, ref } from 'vue';


export default defineComponent({
    name: 'GitRepoDetailsPage',
    setup() {

        const data = ref('')
        const content = ref('')

        function loadData(repoName: string) {
            api.get('/github/users/harshgit/' + repoName + '/contributions')
                .then((response) => {
                    data.value = response.data
                    const files = data
                    populateContent(files)
                })
                .catch((err) => {
                    console.error('error in getting data from backend')
                    console.error(err.message)

                })
        }
        function populateContent(data: any) {


            const obj: { [key: string]: any } = {}
            obj['name'] = data.name;
            obj['stars'] = data.stargazers_count;
            obj['language'] = data.language;
            obj['clones'] = data.clones;

            content.value = JSON.stringify(obj);





        }

        //onMounted(loadData)

        return {
            details: 'Git Repo Details will be displayed here',
            content
        };
    }
})


</script>