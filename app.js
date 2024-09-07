  // Initialize Materialize components
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
  });

  // Initialize AngularJS app and controller
  var app = angular.module("dashboardApp", []);

  app.controller("DashboardController", function ($scope) {
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
    ];
  });