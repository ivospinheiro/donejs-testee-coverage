import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import 'can-debug#?./is-dev';

const AppViewModel = DefineMap.extend({
  env: {
    default: () => ({NODE_ENV:'development'}),
    serialize: false
  },
  message: {
    default(){
      const now = new Date();
      return `Hello World! ${now.toString()}`;
    },
    serialize: false
  },
  title: {
    default: 'donejs-testee-coverage',
    serialize: false
  }
});

export default AppViewModel;
