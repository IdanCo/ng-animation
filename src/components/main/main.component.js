// Import Template
import MainTemplate from './main.html';

// Set up controller
class MainController {
  constructor($element) {
    this.$element = $element;
  }

  $onInit() {
  }
}

// annotate injections
MainController.$inject = ['$element'];

// Define and export component
export default {
  template: MainTemplate,
  controller: MainController
};
