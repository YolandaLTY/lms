import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/Main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: resolve => {
            require(['@/components/home/Home'], resolve);
          } 
        },
        {
          path: '/consulting',
          name: 'consulting',
          component: resolve => { 
            require(['@/components/Consulting/consulting'], resolve);
          },
          redirect: '/sskx',
          children: [
            {
              path: '/sskx',//实时快讯
              name: 'sskx',
              component: resolve => {
                require(['@/components/Consulting/sskx'], resolve);
              }
            },
            {
              path: '/zbzt',//重磅专题
              name: 'zbzt',
              component: resolve => {
                require(['@/components/Consulting/zbzt'], resolve);
              }
            },
            {
              path: '/cjyw',//财经要闻
              name: 'cjyw',
              component: resolve => {
                require(['@/components/Consulting/cjyw'], resolve);
              }
            },
            {
              path: '/cjrl',//财经日历
              name: 'cjrl',
              component: resolve => {
                require(['@/components/Consulting/cjrl'], resolve);
              }
            },
            {
              path: '/sjzx',//数据中心
              name: 'sjzx',
              component: resolve => {
                require(['@/components/Consulting/sjzx'], resolve);
              }
            },
          ]            
        },
        {
          path: '/Quotes',//行情
          name: 'Quotes',
          component: resolve => {
            require(['@/components/Quotes/Quotes'], resolve);
          }
        },
        {
          path: '/transaction',//交易
          name: 'transaction',
          component: resolve => {
            require(['@/components/transaction/transaction'], resolve);
          }
        },
        {
          path: '/Assets',//资产
          name: 'Assets',
          component: resolve => {
            require(['@/components/Assets/Assets'], resolve);
          }
        },
      ]
    },
  ]
})
