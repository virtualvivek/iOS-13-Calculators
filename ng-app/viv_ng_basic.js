
app.controller('myCtrl', function($scope) {
   
    
    $scope.addOne = function() {
        $scope.c_value += "1";
    }
    
    $scope.clear = function() {
        $scope.c_value = "";
    }
    $scope.addTwo = function() {
        $scope.c_value += "2";
    }
    
    $scope.addThree = function() {
        $scope.c_value += "3";
    }
    
    $scope.addFour = function() {
        $scope.c_value += "4";
    }
    
    $scope.addFive = function() {
        $scope.c_value += "5";
    }
    
    $scope.addSix = function() {
        $scope.c_value += "6";
    }
    
    $scope.addSeven = function() {
        $scope.c_value += "7";
    }
    $scope.addEight = function() {
        $scope.c_value += "8";
    }
    
    $scope.addNine = function() {
        $scope.c_value += "9";
    }
    $scope.addZero = function() {
        $scope.c_value += "0";
    }
    
    $scope.addDecimal = function() {
        $scope.c_value += ".";
    }
    
    $scope.addPlus = function() {
        $scope.c_value += "+"
    }
    
    $scope.addMinus = function() {
        $scope.c_value += "-";
    }
    
     $scope.addMulti = function() {
        $scope.c_value += "*";
    }
     
     $scope.addDivide = function() {
        $scope.c_value += "/";
    }
    
     $scope.addMod = function() {
        $scope.c_value += "%";
    }
    
    $scope.solveAdd = function() {
        $scope.c_value = $scope.$eval($scope.c_value);
    }
    
    $scope.solveSubtract = function() {
        $scope.c_value += "0";
    }
    
    $scope.solveFraction = function() {
        $scope.c_value = 1/$scope.$eval($scope.c_value);
    }
    
   
    
    
});
