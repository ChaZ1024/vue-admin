var Routes=[
 {
   path: '/login',
   name: 'login',
   component: Login
 },
 {
   path: '/',
   name:"home",
   component: Home,
   meta: {
     requiresAuth: true
   }
 },
   {
     path: "/index",
     component: HomeIndex,
     meta: {
     requiresAuth: true
   }
 },
   {
     path: "/index",
     component: HomeIndex,
     meta: {
     requiresAuth: true
   }
 },
 {
   path: '/404',
   name: '404',
   component: Notfound
 }
]


export { Routes };
