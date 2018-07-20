import index from './views/index'
import content from './views/content'

const routers = [
  {
    path: '/',
    component: index
  },
  {
    path: '/content',
    component: content
  }
];

export default routers;
