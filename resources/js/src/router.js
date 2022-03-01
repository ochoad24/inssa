/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from 'vue';
import Router from 'vue-router';
import auth from '@/auth/authService';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/',
          name: 'inicio',
          component: () => import('./views/Home.vue'),
          meta: { authRequired: true },
        },
        {
          path: '/clientes',
          name: 'clientes',
          component: () => import('./views/Customer/Customer.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Clientes', active: true },
            ],
            pageTitle: 'Clientes',
            authRequired: true,
          },
        },
        {
          path: '/clientes/ver',
          name: 'ver-cliente',
          component: () => import('./views/Customer/ShowCustomer.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Clientes', url: '/clientes' },
              { title: 'Ver cliente', active: true },
            ],
            pageTitle: 'Ver cliente',
            authRequired: true,
          },
        },
        {
          path: '/clientes/nuevo',
          name: 'nuevo-cliente',
          component: () => import('./views/Customer/NewCustomer.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Clientes', url: '/clientes' },
              { title: 'Nuevo cliente', active: true },
            ],
            pageTitle: 'Nuevo cliente',
            authRequired: true,
          },
        },
        {
          path: '/clientes/editar/:id',
          name: 'editar-cliente',
          component: () => import('./views/Customer/UpdateCustomer.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Clientes', url: '/clientes' },
              { title: 'Editar cliente', active: true },
            ],
            pageTitle: 'Editar cliente',
            authRequired: true,
          },
        },
        {
          path: '/solicitudes',
          name: 'solicitudes',
          component: () => import('./views/Request/Request.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Solicitudes', active: true },
            ],
            pageTitle: 'Solicitudes',
            authRequired: true,
          },
        },
        {
          path: '/solicitudes/nuevo/:id?',
          name: 'nueva-solicitud',
          component: () => import('./views/Request/NewRequest.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Solicitudes', url: '/solicitudes' },
              { title: 'Nueva solicitud', active: true },
            ],
            pageTitle: 'Nueva solicitud',
            authRequired: true,
          },
        },
        {
          path: '/solicitudes/ver/:id',
          name: 'ver-solicitud',
          component: () => import('./views/Request/ShowRequest.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Solicitudes', url: '/solicitudes' },
              { title: 'Ver solicitud', active: true },
            ],
            pageTitle: 'Ver solicitud',
            authRequired: true,
          },
        },
        {
          path: '/solicitudes/editar/:id',
          name: 'editar-solicitud',
          component: () => import('./views/Request/UpdateRequest.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Solicitudes', url: '/solicitudes' },
              { title: 'Editar solicitud', active: true },
            ],
            pageTitle: 'Editar solicitud',
            authRequired: true,
          },
        },
        {
          path: '/solicitudes/imprimir',
          name: 'imprimit_solictud',
          component: () => import('./views/Request/PrintRequest.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Solicitudes', url: '/solicitudes' },
              { title: 'Imprimir solicitud', active: true },
            ],
            pageTitle: 'Imprimir solicitud',
            authRequired: true,
          },
        },
        {
          path: '/cuentas',
          name: 'cuentas',
          component: () => import('./views/Account/Account.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Cuentas', active: true },
            ],
            pageTitle: 'Cuentas',
            authRequired: true,
          },
        },
        {
          path: '/cuentas/nuevo',
          name: 'nueva-cuenta',
          component: () => import('./views/Account/NewAccount.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Cuentas', url: '/cuentas' },
              { title: 'Nueva cuenta', active: true },
            ],
            pageTitle: 'Nueva cuentas',
            authRequired: true,
          },
        },
        {
          path: '/cuentas/editar/:id',
          name: 'editar-cuenta',
          component: () => import('./views/Account/UpdateAccount.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Cuentas', url: '/cuentas' },
              { title: 'Editar cuenta', active: true },
            ],
            pageTitle: 'Editar cuenta',
            authRequired: true,
          },
        },
        {
          path: '/creditos',
          name: 'creditos',
          component: () => import('./views/Loan/Loan.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Créditos', active: true },
            ],
            pageTitle: 'Créditos',
            authRequired: true,
          },
        },
        {
          path: '/creditos/imprimir',
          name: 'imprimir-credito',
          component: () => import('./views/Loan/Print.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Créditos', url: '/creditos' },
              { title: 'Imprimir', active: true },
            ],
            pageTitle: 'Imprimir crédito',
            authRequired: true,
          },
        },
        {
          path: '/creditos/control',
          name: 'imprimir-control-credito',
          component: () => import('./views/Loan/Control.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Créditos', url: '/creditos' },
              { title: 'Control', active: true },
            ],
            pageTitle: 'Imprimir control de crédito',
            authRequired: true,
          },
        },
        {
          path: '/pagos',
          name: 'pagos',
          component: () => import('./views/PaymentLoan/ListPayments.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Créditos', url: '/creditos' },
              { title: 'Pagos', active: true },
            ],
            pageTitle: 'Pagos',
            authRequired: true,
          },
        },
        {
          path: '/imprimir',
          name: 'imprimir',
          component: () => import('./views/PaymentLoan/PrinterPayment.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Créditos', url: '/creditos' },
              { title: 'Imprimir', active: true },
            ],
            pageTitle: 'Imprimir',
            authRequired: true,
          },
        },
        {
          path: '/imprimirPendientes',
          name: 'imprimirpendientes',
          component: () => import('./views/Notification/Print.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Créditos', url: '/creditos' },
              { title: 'Imprimir', active: true },
            ],
            pageTitle: 'Imprimit pendientes',
            authRequired: true,
          },
        },
        {
          path: '/cobrar',
          name: 'cobrar',
          component: () => import('./views/PaymentLoan/PaymentLoan.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Cobrar', active: true },
            ],
            pageTitle: 'Cobrar',
            authRequired: true,
          },
        },
        {
          path: '/cajas',
          name: 'cajas',
          component: () => import('./views/CashRegister/CashRegister.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Cajas', active: true },
            ],
            pageTitle: 'Cajas',
            authRequired: true,
          },
        },
        {
          path: '/cajas/nuevo',
          name: 'nueva-caja',
          component: () => import('./views/CashRegister/NewCashRegister.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Cajas', url: '/cajas' },
              { title: 'Nuevo', active: true },
            ],
            pageTitle: 'Nueva caja',
            authRequired: true,
          },
        },
        {
          path: '/cajas/editar/:id',
          name: 'editar-caja',
          component: () =>
            import('./views/CashRegister/UpdateCashRegister.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Cajas', url: '/cajas' },
              { title: 'Editar', active: true },
            ],
            pageTitle: 'Editar caja',
            authRequired: true,
          },
        },
        {
          path: '/transacciones',
          name: 'transacciones',
          component: () => import('./views/Transactions/Transaction.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Transacciones', active: true },
            ],
            pageTitle: 'Transacciones',
            authRequired: true,
          },
        },
        {
          path: '/transacciones/entre-cuentas',
          name: 'transacciones entre cuentas',
          component: () => import('./views/Transactions/TransactionBeetweenOne.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Transacciones', url: '/transacciones' },
              { title: 'Transacciones entre cuentas', active: true },
            ],
            pageTitle: 'Transacciones entre cuentas',
            authRequired: true,
          },
        },
        {
          path: '/transacciones/ingreso-salida',
          name: 'ingreso o salida de cuentas',
          component: () => import('./views/Transactions/TransactionBeetweenTwo.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Transacciones', url: '/transacciones' },
              { title: 'Ingreso o salida de cuentas', active: true },
            ],
            pageTitle: 'Ingreso o salida de cuentas',
            authRequired: true,
          },
        },
        {
          path: '/usuarios',
          name: 'usuarios',
          component: () => import('./views/User/User.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Usuarios', active: true },
            ],
            pageTitle: 'Usuarios',
            authRequired: true,
          },
        },
        {
          path: '/usuarios/nuevo',
          name: 'usuarios nuevo',
          component: () => import('./views/User/NewUser.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Usuarios', url: '/usuarios' },
              { title: 'Nuevo usuario', active: true },
            ],
            pageTitle: 'Nuevo usuario',
            authRequired: true,
          },
        },
        {
          path: '/usuarios/editar/:id',
          name: 'usuarios editar',
          component: () => import('./views/User/UpdateUser.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Usuarios', url: '/usuarios' },
              { title: 'Editar usuario', active: true },
            ],
            pageTitle: 'Editar usuario',
            authRequired: true,
          },
        },
        {
          path: '/permisos',
          name: 'permisos',
          component: () => import('./views/Permits/Permits.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Permisos', active: true },
            ],
            pageTitle: 'Permisos',
            authRequired: true,
          },
        },
        {
          path: '/reportes',
          name: 'reportes',
          component: () => import('./views/Reports/Report.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Reportes', active: true },
            ],
            pageTitle: 'Reportes',
            authRequired: true,
          },
        },
        {
          path: '/notificaciones',
          name: 'notificaciones',
          component: () => import('./views/Notification/Notification.vue'),
          meta: {
            breadcrumb: [
              { title: 'Inicio', url: '/' },
              { title: 'Notificaciones', active: true },
            ],
            pageTitle: 'Notificaciones',
            authRequired: true,
          },
        },
      ],
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/pages/login',
          name: 'page-login',
          component: () => import('@/views/pages/Login.vue'),
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue'),
        },
      ],
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404',
    },
  ],
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg');
  if (appLoading) {
    appLoading.style.display = 'none';
  }
});
router.beforeEach((to, from, next) => {
  if (to.meta.authRequired) {
    if (auth.isAuthenticated() === false) {
      auth.logOut();
      router
        .push({ path: '/pages/login', query: { to: to.path } })
        .catch(err => {
          console.log(err);
        });
    }
  }
  return next();
});
export default router;
