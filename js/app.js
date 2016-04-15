angular.module('examen', [])
.controller('ExamenController', ['$scope','$http', function($scope,$http) {
   
        $scope.arreglo = [];
        $scope.lista = [];
        $scope.colores="";
        $scope.cambiar_vista="1";
        for (var i = 1; i <= 500; i++) {
        	var color='blanco'
        	if(i % 5 ==0) color="naranja";
        	if(i % 3 ==0) color="azul";
        	if(i % 3 ==0 && i % 5==0) color="gris";


        	$scope.arreglo.push({
        		color:color,
        		numero:i
        	})
        };

        
        $http.get("php/lista.php")
        .success(function (response) {
             $scope.lista = response;

        }).error(function (response) {
        });
        

    
}])