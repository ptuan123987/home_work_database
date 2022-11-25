<template>
    <div class="">
        <form action="" @submit.prevent="createUser">
            <input type="text" class="form-control" placeholder="Enter name" v-model="user.name">
            <input type="email" class="form-control" placeholder="Enter email" v-model="user.email">
            <button class="btn btn-primary btn-sm">Add</button>
        </form>

    </div>
</template>
<script>
import config from '../config'
export default {
    data() {
        return {
            user : {
                name : '',
                email : '',
                
            },
            loading : false
        }
    },
    methods : {
        createUser() {
            this.loading = true;
            fetch(
                config.USER_API_URL, 
                {method : 'POST',header:{
                    Authorization :'Bearer 48d29b4cd8c0dc28d8f0d0d881078884d48c45506eafcdb5f7c7355a4f6fcc18'
                }}
                )
        }
    }

}
</script>
<style>
</style>