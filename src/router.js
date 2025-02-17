import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import QuizView from './views/QuizView.vue';
import ResultView from './views/ResultView.vue';
import PlayerRegistration from './views/PlayerRegistration.vue';


const routes = [
  {
    component: HomeView,
    name: 'Home',
    path: '/'
  },
  {
    component: QuizView,
    name: 'Quiz',
    path: '/quiz'
  },
  {
    component: PlayerRegistration,
    name: 'PlayerRegistration',
    path: '/registration'
  },
  {
    component: ResultView,
    name: 'ResultView',
    path: '/results'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router