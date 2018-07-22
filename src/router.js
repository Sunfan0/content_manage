// import index from './views/index'
import Content from './views/content'

const routers = [
  {
    path: '/index',
    meta: {
      title: 'content_manage'
    },
    component: (resolve) => require(['./views/index.vue'], resolve),
    children: [
      {
        path: 'content',
        meta: {
          title: 'content_manage'
        },
        component: Content
      }
    ]
  }
  /*{
    path: '/',
    component: login
  }*/
];

export default routers;
