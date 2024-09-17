var app = angular.module('myApp', []);
app.controller('MainCtrl', function ($scope) {

  // Existing cards data
  $scope.cards = [
    {
      title: "Progress Report",
      icon: "assessment",
      color: "red lighten-3",
      link: "#",
      progress: 70,
    },
    {
      title: "Reports",
      icon: "insert_drive_file",
      color: "purple lighten-3",
      link: "#",
      progress: 80,
    },
    {
      title: "Admin Ops",
      icon: "person",
      color: "deep-purple lighten-3",
      link: "#",
      progress: 60,
    },
    {
      title: "Indexing QC",
      icon: "check_box",
      color: "cyan lighten-3",
      link: "#",
      progress: 50,
    },
    {
      title: "Installation QC",
      icon: "electric_meter",
      color: "blue lighten-3",
      link: "#",
      progress: 90,
    },
    {
      title: "Maintenance QC",
      icon: "settings",
      color: "teal lighten-3",
      link: "#",
      progress: 85,
    },
    {
      title: "Inventory",
      icon: "storage",
      color: "light-blue lighten-3",
      link: "#",
      progress: 75,
    },
    // New Card for API Status
    {
      title: "API Status",
      icon: "cloud_done",
      color: "green lighten-3",
      link: "#modal1", // Linking to modal
      progress: 0, // No progress bar
      modalTrigger: true // Custom property to identify modal trigger
    }
  ];

  // Error categories with dummy data (Replace with dynamic data if needed)
  $scope.authErrors = [
    "2024-08-07T09:00:34 - Task timed out after 3.02 seconds",
    "2024-08-07T08:20:44 - Task timed out after 3.04 seconds",
    "2024-08-07T08:19:27 - Task timed out after 3.04 seconds",
    "2024-08-07T07:53:11 - Task timed out after 3.01 seconds",
    "2024-08-07T07:50:22 - Task timed out after 3.04 seconds"
  ];

  $scope.httpErrors = [
    "2024-08-07: 502 Bad Gateway",
    "2024-08-07: 404 Not Found",
    "2024-08-07: 502 Bad Gateway",
    "2024-08-07: 404 Not Found",
    "2024-08-07: 504 Gateway Timeout"
  ];

  $scope.apiErrors = [
    "2024-08-28: Could not resolve host: hespapp.amismartmeters.com",
    "2024-08-28: Could not resolve host: hespapp.amismartmeters.com",
    "2024-08-28: Could not resolve host: hespapp.amismartmeters.com",
    "2024-08-28: Could not resolve host: hespapp.amismartmeters.com",
    "2024-08-28: Could not resolve host: hespapp.amismartmeters.com"
  ];

  // Function to load errors into each tab
  $scope.loadErrors = function () {
    // Auth Errors
    var authErrorList = document.getElementById('auth-error-list');
    authErrorList.innerHTML = ''; // Clear any existing content
    $scope.authErrors.slice(0, 5).forEach(function (error) {
      var li = document.createElement('li');
      li.textContent = error;
      authErrorList.appendChild(li);
    });

    // HTTP Errors
    var httpErrorList = document.getElementById('http-error-list');
    httpErrorList.innerHTML = ''; // Clear any existing content
    $scope.httpErrors.slice(0, 5).forEach(function (error) {
      var li = document.createElement('li');
      li.textContent = error;
      httpErrorList.appendChild(li);
    });

    // API Errors
    var apiErrorList = document.getElementById('api-error-list');
    apiErrorList.innerHTML = ''; // Clear any existing content
    $scope.apiErrors.slice(0, 5).forEach(function (error) {
      var li = document.createElement('li');
      li.textContent = error;
      apiErrorList.appendChild(li);
    });
  };
});

// Initialize Materialize modal and tabs
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);

  var tabElems = document.querySelectorAll('.tabs');
  var tabInstances = M.Tabs.init(tabElems);
});
