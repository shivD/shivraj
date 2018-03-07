var app = angular.module("myapp", []);
app.controller("ListController", ['$scope', '$http', function($scope, $http) {
    $scope.users = [];
    // GET FROM LOCALSTORAGE
    var getitemdata = localStorage.getItem('userlist');
    var getparse = JSON.parse(getitemdata);
    console.log(getparse);
    if (getparse) {
        $scope.users = getparse;
    }
    // ADD USER
    $scope.add = function(user) {
        if (user) {
            $scope.users.push({
                firstname: user.firstname,
                lastname: user.lastname
            });

            // STORE ON LOCALSTORAGE
            localStorage.setItem('userlist', JSON.stringify($scope.users));
        }
        $scope.users.firstname = '';
        $scope.users.lastname = '';
    }

    //DELETE USER
    $scope.deletedata = function(index) {
        var confrm = confirm('Are you sure you want delete ' + $scope.users[index].firstname + ' ?');
        if (confrm == true) {
            $scope.users.splice(index, 1);
            localStorage.setItem('userlist', JSON.stringify($scope.users));
        }
    }
    //EDIT USER
    $scope.edituser = function(index) {
        $scope.objectIndex = index;
        if($scope.objectIndex!=undefined){
            $('.btn-update').text('Update');
        }
        $scope.userdata = angular.copy($scope.users[$scope.objectIndex]);
    }
    //UPDATE DATA
    $scope.updateuser = function() {
        if($scope.objectIndex == undefined) {
            
            $scope.users.push({
                firstname: $scope.userdata.firstname,
                lastname: $scope.userdata.lastname
            });
        } else {

            $scope.users[$scope.objectIndex] = $scope.userdata;
        }
        localStorage.setItem('userlist', JSON.stringify($scope.users));
    }


    $scope.cehckallcheckbox= function(){
        var selectallcheckbox = $("#selectallcheckbox");
        $(".checkboxtd").each(function(element) {
            var currentElement =  $(".checkboxtd");
           currentElement[element].checked=true;
           console.log(currentElement[element]);
        });
       if(selectallcheckbox.checked){
        alert(1);
        alert(selectallcheckbox.checked);
       }
        // $(".checkboxtd").each(function(element) {
        //    $(this)[element].checked=true;
        // });

       }
}]);
