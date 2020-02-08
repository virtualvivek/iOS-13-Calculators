app.controller("myCtrl",['$scope','$timeout', function($scope,$timeout){

 //Adding initial value for counter
 //counter modelimiz için ilk değer atamasını yaptık.   
$scope.counter = 0;
var stopped;
  
 $scope.timerRunning = false;

//timeout function
//1000 milliseconds = 1 second
//Every second counts
//Cancels a task associated with the promise. As a result of this, the //promise will be resolved with a rejection.  
$scope.countdown = function() {
    $scope.timerRunning = true;
    stopped = $timeout(function() {
       //console.log($scope.counter);
     $scope.counter++;   
     $scope.countdown();   
    }, 1000);
    
    var check = document.getElementById('pause').innerHTML;
    if(check=="Paused")
    document.getElementById('resume').innerHTML = "Resumed";
    document.getElementById('pause').innerHTML = "Pause";
  };
   
    
$scope.stop = function(){
   $scope.timerRunning = false;
   $timeout.cancel(stopped);
   document.getElementById('pause').innerHTML = "Paused";
   document.getElementById('resume').innerHTML = "Resume";
}; 

$scope.teste = function(){
        console.log($scope.counter);
    };
    
    
$scope.reset = function(){
    $scope.timerRunning = false;
    $timeout.cancel(stopped);
    $scope.counter=0; 
    document.getElementById('pause').innerHTML = "Pause";
    document.getElementById('resume').innerHTML = "Start";
};
   

}]);


    
app.filter('formatTimer', function() {
  return function(input)
    {
        function z(n) {return (n<10? '0' : '') + n;}
        var seconds = input % 60;
        var minutes = Math.floor(input / 60);
        var hours = Math.floor(minutes / 60);
        return (z(hours) +':'+z(minutes)+':'+z(seconds));
    };
});