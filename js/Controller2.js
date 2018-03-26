app.controller("SecondController", function($scope, $http){
    $scope.posts = [];
    $scope.showMe = false;
    $scope.newPost = {};
    $scope.getInfo = function(){
    $http.get("https://jsonplaceholder.typicode.com/posts")
        .then(function(data){
            console.log(data);
            $scope.posts=data.data;
            $scope.showMe = !$scope.showMe;
        },
        function(err){
            console.log("Error 1");
        });
    }
    $scope.addPost=function(){
        $http.post("https://jsonplaceholder.typicode.com/posts",{
            id: $scope.newPost.id,
            title: $scope.newPost.title,
            body:  $scope.newPost.body,
            userId: 1
        })
            .then(function(data, status, headers, config){
                $scope.posts.push($scope.newPost);
                $scope.addPost={};
            },
            function(error, status, headers, config){
                console.log("Error 2");
            });
    }
});