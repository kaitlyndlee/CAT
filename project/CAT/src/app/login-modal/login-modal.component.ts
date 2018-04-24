import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // Get the modal
    const modal = document.getElementById('id01');

    // Close the model on route change
    const ModalInstanceCtrl = function ($scope, $modalInstance, items) {
      $scope.items = items;
      $scope.selected = {
        item: $scope.items[0]
      };
      $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
      };
      $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
      };

      // this will listen for route changes and call the callback
      $scope.$on('$routeChangeStart', function(){
        $modalInstance.close();
      });
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };
  }

  loginGoogle() {
    this.authService.googleLogin();
  }

}
