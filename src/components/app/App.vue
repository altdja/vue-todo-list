<template>
  <div id="app">
    <h1>Welcome to Vue.js TODO list</h1>

    <div v-for="(todo, key, index) in todos" :key="index">
      <div class="todo">
        <p class="del" v-on:click="deleteTodo(index)">Delete</p>
        <p>{{index + 1}}. {{todo}}</p>
      </div>
    </div>

    <h4>Add new TODO:</h4>
    <div class="add-todo">
      <input type="text" v-model="todo">
      <button v-on:click="addTodo">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo: '',
      todos: []
    }
  },

  methods: {
    addTodo () {
      this.todos.push(this.todo)
      this.todo = ''
    },

    deleteTodo (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style scoped src="./styles.css"></style>
