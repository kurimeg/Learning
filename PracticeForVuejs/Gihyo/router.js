const main = { template: '<div>This is top page!</div>' }
const users = { template: '<div>This is user list!</div>' }
const user = {
    template: '<div class="user">' +
    '<p>User ID is {{ $route.params.userId }}</p>' +
    '<p><router-link :to="\'/user/\' + $route.params.userId + \'/profile\'">Profile</router-link></p>' +
    '<p><router-link :to="\'/user/\' + $route.params.userId + \'/posts\'">Posts</router-link></p>' +
    '<router-view></router-view>' +
    '</div>'
}

const userProfile = {
    template: '<div class="user-profile">' +
    '<p>This is {{ $route.params.userId }} Profile</p>' +
    '</div>'
}

const userPosts = {
    template: '<div class="user-posts">' +
    '<p>This is {{ $route.params.userId }} Posts</p>' +
    '</div>'
}

const routes = [
    { path: '/main', component: main },
    { path: '/users', component: users },
    {
        path: '/user/:userId', name: 'user', component: user,
        children: [
            {
                path: 'profile',
                component: userProfile
            },
            {
                path: 'posts',
                component: userPosts
            }
        ]
    }]

const router = new VueRouter({
    routes // `routes: routes` の短縮表記
})

// router.push({ name: 'user', params: { userId: 47003 }})

const app = new Vue({
    router
}).$mount('#app')
