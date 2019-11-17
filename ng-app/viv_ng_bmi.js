
app.controller('myCtrl2', function($scope) {
    
    $scope.b_value="BMI";
    
    $scope.solveBMI = function() {
        
        var n_height = $scope.ng_height/3.28;
        n_height = n_height*n_height;
        $scope.b_value = $scope.ng_weight/n_height;
    }
    
    $scope.clear = function() {
        $scope.b_value = "BMI";
    }
    

    //pre prototype for customStyle
    $scope.customStyle = {};
    $scope.customStyle2 = {};
    
    $scope.comment = "---";
    $scope.comment_sub = "●";
    $scope.customStyle = "blue";
    $scope.customStyle_sub = "blue";
    
    $scope.$watch('b_value', function () {
        
        if ($scope.b_value > 25 && $scope.b_value < 26) {
            $scope.comment = "Overweight";
            $scope.customStyle = "Lowred";
            $scope.comment_sub = "😅";
            $scope.customStyle_sub = "Lowred";
        } 
        
        if ($scope.b_value > 26) {
            $scope.comment = "Overweight";
            $scope.customStyle = "Lowred";
            $scope.comment_sub = "😏";
            $scope.customStyle_sub = "Lowred";
        } 
        
        else if ($scope.b_value < 24.9 && $scope.b_value>18.5) {
            $scope.comment = "Healthy";
            $scope.customStyle = "green";
            $scope.comment_sub = "😃";
            $scope.customStyle_sub = "green";
        }
        
        else if ($scope.b_value == 18.5) {
            $scope.comment = "Perfect";
            $scope.customStyle = "blue";
            $scope.comment_sub = "🤩";
            $scope.customStyle_sub = "blue";
        }
        
        else if ($scope.b_value < 18.5) {
            $scope.comment = "Underweight";
            $scope.customStyle = "red";
            $scope.comment_sub = "🤨";
            $scope.customStyle_sub = "red";
        }
    });
    
    
    
});