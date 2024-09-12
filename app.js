
var app = angular.module('myApp', []);
  app.controller('MainCtrl', function($scope) {
    // Your controller logic here
      $scope.cards = [
        {
          title: "Status Update",
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
        {
          title:"API-Status",
          icon:"api",
          color:"indigo accent-1",
          link:"#",
          progress: 95,
        }
      ];
  });
