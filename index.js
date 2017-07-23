var doctors = [
    {
        name: 'John Wayne',
        area: 'Heart',
        speciality: 'Cardiology',
        rating: 4.3
    }, {
        name: 'Martha Reddy',
        area: 'Heart',
        speciality: 'Medicine',
        rating: 2.2
    }, {
        name: 'Mermaid',
        area: 'Heart',
        speciality: 'Medicine',
        rating: 4.3
    }, {
        name: 'Angela Martin',
        area: 'Brain',
        speciality: 'Surgeon',
        rating: 3.7
    }, {
        name: 'Jake Anderson',
        area: 'Brain',
        speciality: 'Injury',
        rating: 4.1
    }, {
        name: 'Linda S',
        area: 'Spine',
        speciality: 'Damage',
        rating: 4.0
    }, {
        name: 'Rich',
        area: 'Spine',
        speciality: 'Operations',
        rating: 3.6
    }
]
var doctorApp = angular.module('doctorApp', ['angular.filter', 'ngSanitize']);
// Define the `DoctorController` controller on the `doctorApp` module
doctorApp.controller('DoctorController', function DoctorController($scope, $filter) {
    $scope.areas = $filter('filter')(doctors, function (doctor) {
        return doctor.area;//doctor
    });
    $scope.myVar = true;
    $scope.myDocs = true;
    var ars = null;
    $scope.changeArea = function (obj) {
        ar = $scope.ar.area;
        var specs = new Set();

        console.log(ar);
        for (var i = 0; i < doctors.length; i++) {
            var x = doctors[i].area;
            if (x == ar) {
                specs.add(doctors[i].speciality);
            }
        }
        console.log(specs);
        let specs_arr = Array.from(specs);
        $scope.specs = specs_arr;
    };

    $scope.$watch('sp', function (n, o) {
        $scope.rating = 0;
    });

    var final_list = [];
    var final_list_names = [];

         $scope.changeDoctors = function(obj){
            final_list = [];
            final_list_names = [];
            for(var i=0;i<doctors.length;i++){
            var ar = $scope.ar.area;
            var spec = $scope.sp;
            if(doctors[i].area==ar && doctors[i].speciality==spec){
              final_list.push(doctors[i]);
              final_list_names.push(doctors[i].name);
            }
         } 
         //$scope.myVar = false;
          //$scope.mydoc = {name:n,area:ar,sp:spec,r:rating};
          $scope.myDocs = false;
          $scope.others = final_list;
        }


    $scope.changeDocs = function (obj) {
        var rating = $scope.rating;
        console.log(rating);
        final_list = [];
        final_list_names = [];
        for (var i = 0; i < doctors.length; i++) {
            var ar = $scope.ar.area;
            var spec = $scope.sp;
            if (doctors[i].rating >= rating && doctors[i].area == ar && doctors[i].speciality == spec) {
                final_list.push(doctors[i]);
                final_list_names.push(doctors[i].name);
            }
        }
        console.log(final_list);
        $scope.docs = final_list_names;
        console.log(final_list_names);
    };
    $scope.showDocInfo = function (obj) {
        //console.log(obj);
        var ar = $scope.ar.area;
        var spec = $scope.sp;
        var rating = null;
        for (var i = 0; i < final_list.length; i++) {
            //var rating = final_list[i].rating;
            if (obj == final_list[i].name) {
                rating = final_list[i].rating;
            }
        }
        var n = obj;
        $scope.myVar = false;
        $scope.mydoc = { name: n, area: ar, sp: spec, r: rating };
        $scope.myDocs = false;
        $scope.others = final_list;
    };
});