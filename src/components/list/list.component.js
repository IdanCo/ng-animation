// Import Template
import ListTemplate from './list.html';

// Set up controller
class ListController {
  constructor($element) {
    this.text = 'Angular ' + angular.version.full + ' is working!';
    this.$element = $element;
    this.array = [1, 2, 3, 4, 5];
  }

  $onInit() {
    this.$element.find('.test-jquery').text('jQuery ' + $.fn.jquery + ' is working!');
  }

  add() {
    const i = this.array.length + 1;
    this.array.unshift(i);
  }
}

// annotate injections
ListController.$inject = ['$element'];

// Define and export component
export default {
  template: ListTemplate,
  controller: ListController
};
