import index from './components/index'
import content from './components/content'

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
