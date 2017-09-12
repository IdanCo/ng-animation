// import all components' modules
import MainModule from './main/main.module';
import ListModule from './list/list.module';

// Register module, inject components and export name
export default angular
  .module('app.components', [
    MainModule,
    ListModule
  ])
  .name;
