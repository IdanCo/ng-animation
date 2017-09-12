// Import Resources
import ListComponent from './list.component';

// import module's specific styling
import './list.scss';

// Register module, register component and export name
export default angular
  .module('app.components.list', [])
  .component('list', ListComponent)
  .name;
