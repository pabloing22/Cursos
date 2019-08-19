<template>
    <h1>Id del parámetro: {{ $route.params.id }}</h1>
</template>

<script>
export default {
    validate(data){
        const filter = /^\d+$/;
        return filter.test(data.params.id);
    }
}
</script>

