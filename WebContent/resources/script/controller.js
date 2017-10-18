const app = angular.module('loja', []);
//the config method will  register the job who needs to be done on loading.
// when its a action depending on the url.
// otherwise is the method called when the action is non-existent on "when"
app.config(($routeProvider) => { 
	$routeProvider
	.when("/", { controller: "listController", templateUrl: "list.html" })//Listing
	.when("/edit/:name",{ controller: "editController", templateUrl: "form.html" })//Editing
	.when("/new", { controller: "newController", templateUrl: "form.html" })//Adding
	.otherwise({ redirectTo: "/" }); 
});

app.run(($rootScope) => {
	$rootScope.frutas = ["banana","melancia","melão","maçã","pera"] 
});
app.controller('listController', ['$scope', ($scope) => {

}]);
app.controller('editController', ['$scope', '$location', '$routeParams', ($scope, $location, $routeParams) => { 
	$scope.title = 'Edita frutas'; //Title of the page 
	$scope.fruit = $routeParams; //Getting the fruit name  to edit
	$scope.fruitIndex = $scope.frutas.indexOf($scope.fruit); //Getting the fruint from the list
	$scope.save = () => {
		$scope.fruits[$scope.fruitIndex] = $scope.fruit; // Getting the new edited fruit name
		$location.path('/'); // Back to index 
	}; 
}]);
app.controller('newCotroller', ['$scope', '$location', ($scope, $location) => {
	$scope.title = 'New fruit';
	$scope.fruit = '';
	$scope.save = () => {
		$scope.fruits.push($scope.fruit);//Add new fruit to the list
		$location.path('/'); //Back to index 
	}; 
}]);

app.controller('controller', ['$scope', ($scope) => {
	$scope.user = { myName: 'KappaPride' };
	
	$scope.Count = 0;
	$scope.addNumber = () => { $scope.Count = $scope.Count + 1; };
	
	$scope.peaple = ["kappa1", "kappa2", "kappa3", "kappa4"];
}]);