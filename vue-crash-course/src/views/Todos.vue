<template>
  <div>
    <h2>HYE MOE</h2>
    <router-link to="/">Home</router-link>
    <AddTodo @add-todo="addTodo"/>
    <BomjHandler />
    <select v-model="filter">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not completed</option>
    </select>
    <hr>
    <Loader v-if="loading" />
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        v-on:remove-todo="removeTodo" />
    <p v-else>Хуяк!</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import Loader from "@/components/Loader.vue";
import BomjHandler from "@/components/BomjHandler.vue";

export default {
  name: "App",
  components: {
    TodoList,
    AddTodo,
    Loader,
    BomjHandler
  },
  data() {
    return {
      time: new Date(),
      todos: [],
      loading: true,
      filter: 'all'
    };
  },
  mounted() {
    console.log(1);
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(json => {
          console.log(2);
        //   setTimeout(() => {
              this.todos = json
              this.loading = false
        //   }, 1000)
      })
    console.log(3);
  },
  computed: {
        // Получаем значения с обработкой
        // более оптимально
        // пересчитывает, когда меняется используемое значение
      filteredTodos() {
          if (this.filter === 'all') {
              return this.todos
          }

          if (this.filter === 'completed') {
              // this.todos - массив []
              // [].filter(FUNCTION)
            //   return this.todos.filter(function(element) {
            //       return element.completed;
            //   });
              return this.todos.filter((element) => element.completed);
          }

          if (this.filter === 'not-completed') {
              return this.todos.filter((element) => !element.completed);
          }
      }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(element => element.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo)
    }
  }
};
</script>
