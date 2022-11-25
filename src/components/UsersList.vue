<template>
    <div class="">
        <table class="table" v-if="loading == false">
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <th scope="row">{{user.id}}</th>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>           
                </tr>           
            </tbody>
        </table>
        <div v-else>Loading...</div>
        <ul>
            <li v-for="page in 20 " :key="page" @click="getPage(page)"><a href="">{{page}}</a></li>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
    computed : {
        ...mapState(['users','loading','page'])
    },
    methods : {
        ...mapActions(['getUsers','getPage'])
    },
    mounted() {
        this.getUsers()
    },
    watch : {
        // khi page thay đổi thì làm gì
        page() {
            this.getUsers()
        }
    }
}
</script>
<style>
</style>