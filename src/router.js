import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachList.vue';
import NotFound from './pages/NotFound.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceive from './pages/requests/RequestsReceive.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestsReceive },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
