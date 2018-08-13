1.设置页面默认跳转路由
(1)在 router 中修改,把默认跳转的组件放到第一个,设置 path:'/'
(2)router 中另外声明,声明格式如下:
```javascript
  {
    path: '*',
     redirect: '/Login'
   },
```
2. $.router.push() 设置页面加载时跳转的路由





# 待总结
3. mapMutations, mapGetters为vuex暴露的方法
这个6个方法分别是：
```javascript
var index = {
Store: Store,
install: install,
mapState: mapState,
mapMutations: mapMutations,
mapGetters: mapGetters,
mapActions: mapActions
}
return index;
```


ES6 新特性 ... 解构符，看示例
```javascript
var obj1 = {
    a: 1,
    b: 2,
    c: 3
}
var obj2 = {
    ...obj1,
    d: 4
}
// obj2 = { a: 1, b: 2, c: 3, d: 4 }
// 同样可以用于数组
var arr1 = ['a', 'b', 'c']
var arr2 = [...arr1, 'd']
// arr2 = ['a', 'b', 'c', 'd'] 

```








3. watch属性
vue 的一个实例,是一个对象,键是需要观察的表达式,值是对应的函数,值也是方法名,或者包含选项的对象
Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。

最初绑定不会执行,





4. swiper 引入 npm <command> --key value
  main.js
```javascript
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

```
  注意：不能将swiper的命名和调用的api接口名相同并且放在生命周期上，会造成冲突。









