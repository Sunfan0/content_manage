import index from './views/index'
import Content from './views/content'
import Qiuqiu from './views/qiuqiu'

const routers = [
  {
    path: '/',
    meta: {
      title: 'index'
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children: [
      {
        path: 'content',
        meta: {
          title: 'content'
        },
        component: Content
      },
      {
        path: 'qiuqiu',
        meta: {
          title: 'qiuqiu'
        },
        component: Qiuqiu
      }
    ]
  }
  /*{
    path: '/',
    component: login
  }*/
];

export default routers;
