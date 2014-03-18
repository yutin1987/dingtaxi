// Ionic Starter App

angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('menu', {
      url: "/menu",
      abstract: true,
      templateUrl: "templates/menu.html"
    })

    .state('menu.workday', {
      url: '/workday',
      views: {
        'main-view': {
          templateUrl: 'templates/workday.html'
        }
      }
    })

    .state('menu.order', {
      url: '/order',
      views: {
        'main-view': {
          templateUrl: 'templates/order.html',
        }
      }
    })

    .state('menu.order.wait', {
      url: '/wait',
      views: {
        'wait-tab': {
          templateUrl: 'templates/order_wait.html',
        }
      }
    })

    .state('menu.order.sent', {
      url: '/sent',
      views: {
        'sent-tab': {
          templateUrl: 'templates/order_sent.html',
        }
      }
    })

    .state('menu.order.expired', {
      url: '/expired',
      views: {
        'expired-tab': {
          templateUrl: 'templates/order_expired.html',
        }
      }
    })

    .state('menu.setting', {
      url: '/setting',
      views: {
        'main-view': {
          templateUrl: 'templates/setting.html'
        }
      }
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});