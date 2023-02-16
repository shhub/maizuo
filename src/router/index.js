import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/zhuye",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    name: "zhuye",
    component: () => import(/* webpackChunkName: "about" */ "../views/zhuye.vue"),
    children: [
      { path: '/zhuye', redirect: '/zhuye/yinglist' },
      {
        path: "/zhuye/yinglist",
        component: () => import("../components/zhuye/yinglist.vue"),
        children: [
          { path: '/zhuye/yinglist', redirect: '/zhuye/yinglist/zhengzaishangying' },
          {
            path: "/zhuye/yinglist/zhengzaishangying",
            name: "zhengzaishangying",
            component: () => import("../components/zhuye/zhengzaishangying.vue")
          },
          {
            path: "/zhuye/yinglist/jijiangsshangying",
            name: "jijiangsshangying",
            component: () => import("../components/zhuye/jijiangsshangying.vue")
          },
        ]
      },
      {
        path: "/zhuye/yingyuan",
        name: "yingyuan",
        component: () => import("../views/yingyuan.vue")
      },
      {
        path: "/zhuye/wode",
        name: "wode",
        meta:{
          islogin:true
        },
        component: () => import("../views/wode.vue")
      },
    ]
  },
  {
    path: "/xiangqing/:filmId",
    name: "xiangqing",
    component: () => import("../components/xiangqing/xiangqing.vue")
  },
  {
    path: "/zixun",
    name: "zixun",
    component: () => import("../views/zixun.vue")
  },
  {
    path: "/city",
    name: "city",
    component: () => import("@/views/city")
  },
  {
    path: "/zhanghudenglu",
    name: "zhanghudenglu",
    component: () => import("../views/zhanghudenglu")
  },
  { path: '*', redirect: '/zhuye' }
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to,from,next)=>{
  if (to.meta.islogin) {
    if (sessionStorage.getItem('token')) {
      next()
    }else{
      next('/zhuye/yingyuan')
    }
  }else{
    next()
  }
  console.log(to)
})

export default router;
