var app=angular.module("MyFirstApp", [/*"ngRoute"*/])
app.controller("FirstController", function($scope, $http){
    $scope.anything="";
    $scope.points = [1, 15, 19, 2, 40];
    $scope.newComment = {};
    $scope.dailymailcommentsection = [
        {
            comment: "I think the Oscars show was very interesting",
            email: "luis.lmd9393@hotmail.com",
            userfirstname: "Luis",
            userlastname: "Ventura"
        },
        {
            comment: "I think politics must be blah, blah, blah...",
            email: "rod94@hotmail.com",
            userfirstname: "Rodrigo",
            userlastname: "Gutierrez"
        }
    ];
    $scope.AddNewComment = function() {
        $scope.dailymailcommentsection.push($scope.newComment);
        $scope.newComment = {};
    }
    $scope.myFunc = function(myE) {
        $scope.x = myE.clientX;
        $scope.y = myE.clientY;
    }
});