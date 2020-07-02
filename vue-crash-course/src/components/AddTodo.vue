<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title">
        <button type="button" @click="toUpper">Добавить хуй</button>
        <button type="submit">Create</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: '',
        };
    },
    methods: {
        toUpper() {
            this.title = `${this.title} ХУЙ`;
        },
        onSubmit() {
            if (this.title) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }
                this.$emit('add-todo', newTodo)
                this.title = ''
            }
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
    }

    input {
        width: 400px;
    }
</style>

