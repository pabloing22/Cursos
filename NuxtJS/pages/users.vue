<template>
    <div>
        <input type="text" v-model="id">
        <button @click="loadUser()">Load user</button>
        <nuxt-child />
    </div>
</template>

<script>
export default {
    layout: 'users',
    data() {
        return{
            id: null,
        }
    },
    methods:{
        loadUser() {
            this.$router.push(`/users/${this.id}`)
        }
    }
}
</script>

