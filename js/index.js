var app = angular.module('netBramha', []);
app.controller('netBramhaCtrl', function($scope, $http) {
  $http.get("https://grwlvishal10.github.io/netBramha/netBramha.json")
  .then(function(response) {
      $scope.result = response.data;
      console.log($scope.result)
  });
});

function largeSearch (){
  document.getElementById("img21").style.display = "none";
  document.getElementById("img211").style.display = "block";
}
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

  function generate(){

  html2canvas(document.body, {
    onrendered: function(canvas)
    {
    canvas.toBlob(function(blob) {
    saveAs(blob, "NetBramha_Assignment.png");
    });
    }
    });
  }