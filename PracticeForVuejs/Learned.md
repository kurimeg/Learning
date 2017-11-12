## Vue.jsとは？
インタラクティブなインタフェースを作るためのJavaScriptフレームワーク  
軽量かつ他のライブラリに依存しない
- Vue.js：https://jp.vuejs.org/index.html
- vuex：https://vuex.vuejs.org/ja/intro.html
- vue-router：https://router.vuejs.org/ja/

### 特徴
#### リアクティブシステム
HTML内でデータバインディングを指定することで，DOMとデータが同期され続ける。

#### コンポーネントシステム
アプリケーションのUIをコンポーネントとして設計できる。

#### レンダリングシステム
Virtual-DOMにより高速にレンダリングできる。

#### プログレッシブフレームワーク　　
Vue.js本体はView層に焦点が当てられたライブラリであり、厳密にはフレームワークではない。
Vue.jsが提供している本体以外のライブラリ(vuex, vue-router...etc.)，開発環境ツールによってプログレッシブフレームワークとして成立している。
1. Declarative Rendering：Vue.js

    データバインディング、リアクティブなレンダリング

1. Component System：Vue.js
    
    UIのモジュール化

1. Client-side Routing：vue-router

    シングルページアプリケーションの構築

1. Large-scale State Management：vuex

    コンポーネント間での状態の集中管理

1. Build System：vue-cli、vueify、vue-loader

    アプリケーションのコンポーネントの管理、プロダクション環境への配信、プロジェクト構成

1. Client-server Data Persistence

    アプリケーションの複雑なデータ構造の永続化

### Vue.js
#### Vueインスタンスとデータバインディング
Vueコンストラクタによりインスタンスを生成 ( = ViewModel )。
``` javascript
var vm = new Vue({
    el: '#root', 
    data: {
        name: 'みかん',
        price: 100
    }
});

<div id="root">
    <p>{{ name }} は {{ price }}円</p>
</div>
```
#### Computed Properties
Vueインスタンスの状態から派生した値に処理を施すgetter。  
状態の依存関係はVue.js側で把握し、必要なときのみ更新を行う。  
※明示的にgetter、setterを定義することもできる。
``` javascript
var vm = new Vue({
    el: '#root', 
    data: {
        name: 'みかん',
        price: 100
    },
    computed: {
    priceWithTax: function() {
      return this.price * 1.08;
    }
});

<div id="root">
    <p>{{ name }} は {{ priceWithTax }}円</p>
</div>
```

#### Directive
Vue.jsで利用できるHTML属性。  
属性値の変化に応じたDOM操作やDOMイベントのハンドリングなどができる。  
自身でディレクティブを作成することもできる。
- v-text
- v-html
- v-show  
displayプロパティの変更
- v-if  
DOM要素の変更
- v-for
- v-bind
- v-model
- v-on

#### Single File Component
HTML/CSS/JavaSciptをコンポーネント化できる。
＝3種類のファイルに分割しない。「.vue」ファイル内でHTML/CSS/JavaSciptが完結している。
``` javascript
<template>
    <p>{{ message }}</p>
</template>

<script>

</script>
    export default {
        // Componentのdataは関数にしなければならない！ 
        // -> 関数にしない場合、複数インスタンスが共通のオブジェクトを参照してしまうから。
        data: function () {
            return {
                message: 'Hello World!'
            }
        }
    }
<style>
    p {
        font-size: '12px'
    }
</style>
```
- コンポーネント間の通信
    - Parent Component -> Child Component：props
    - Child Component -> Parent Component：emit

### vue-router
SPA実装のためのルーター機能を提供する。
``` javascript
// ルートを定義する
import Top from '@/components/Top'
import Main from '@/components/Main'

const router = new Router({
  routes: [   
    {
      path: '/',
      component: Top
    },
    {
      path: '/Main',
      component: Main
    }
  ]
})

export default router

// ルートコンポーネントのインスタンス作成
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')

// ルートコンポーネント
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
```
#### プログラムによるルート操作
- router.push(location, onComplete?, onAbort?)  
    履歴を追加する。
- router.go(n)  
パラメーターで指定されたページへ移動する。  
＝進むボタン、戻るボタンの実装
- router.replace(location, onComplete?, onAbort?)  
履歴に追加せず、画面遷移する。

#### ナビゲーションガード
リダイレクトやキャンセルによる遷移のガード。
- グローバルガード
    - router.beforeEach(guard)
    - router.beforeResolve(guard) 
    - router.afterEach(hook)
- ルート単位ガード
    - beforeEnter(to, from, next)
- コンポーネント内ガード
    - beforeRouteEnter(to, from, next)
    - beforeRouteUpdate(to, from, next)
    - beforeRouteLeave(to, from, next)

### vuex
コンポーネント間の状態管理を行う。

#### store
stateを保持するコンテナ。
``` javascript
// ルートインスタンスにstoreを渡すことで、全ての子コンポーネントから参照することができる。
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
```

TO DO: 以下まとめる
コンポーネントがActionをDispatchする
ActionはCommitを行う
MutationはStateを変更する
レンダリングされる


mapState、mapGetterはComputedPropatyへのマッピング
リアクティブなレンダリングができる

ミューテーションは同期
アクションは非同期
