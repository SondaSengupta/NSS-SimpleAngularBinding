;(function(){
  'use strict';
  angular.module('todoApp',[])
    .controller('ToDoController',function(){
      var vm = this;
      vm.tasks = [
      {
        name: 'Learn Angular',
        desc: 'If I could learn Angular that would be Grand',
        due: 'Today'
      },
      {
        name: 'Finish Tic Tac Toe',
        desc: 'If I could just figure out Firebase that would be Grand',
        due: 'Monday'
      },
      {
        name: 'Get a job!',
        desc: 'If I could just get a developer job that would be Grand',
        due: '4 months'
      }
      ];

      vm.addNewTask = function(){
        vm.tasks.push(vm.newTask);
        vm.newTask = _freshTask();
      };

      vm.removeTodo = function(todo){
        var index = vm.tasks.indexOf(todo);
        vm.tasks.splice(index,1);
      }

      vm.newTask = _freshTask();

      vm.priorityOptions = {
        backburner: 'Backburner',
        high: 'High',
        medium: 'Medium',
        low: 'Low'
      }

      function _freshTask(){
        return {
          priority: 'low'
        }
      };

    });
}());
