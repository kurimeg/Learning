var loginTemplate = `
<form class="login-container">
    <p><input v-model="userid" type="text" placeholder="User ID"></p>
    <p><input v-model="password" type="password" placeholder="Password"></p>
    <p><input v-on:click="login" type="submit" value="Log in"></p>
</form>
`
Vue.component('user-login', {
template: loginTemplate,
data: function(){
  return {
    userid: '',
    password: ''
  }
},
methods: {
  login: function(){
    
  }
}
});

new Vue({
    el: '#loginform'
})