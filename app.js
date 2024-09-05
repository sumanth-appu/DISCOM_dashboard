var app = angular.module('dashboardApp', []);

app.controller('DashboardController', function($scope) {
    $scope.cards = [
        { title: 'Progress Report', icon: 'assessment', color: 'green darken-1', link: '#', progress: 70 },
        { title: 'Reports', icon: 'insert_drive_file', color: 'purple', link: '#', progress: 80 },
        { title: 'Admin Ops', icon: 'person', color: 'blue darken-3', link: '#', progress: 60 },
        { title: 'Indexing QC', icon: 'check_box', color: 'cyan lighten-2', link: '#', progress: 50 },
        { title: 'Installation QC', icon: 'electric_meter', color: 'blue', link: '#', progress: 90 },
        { title: 'Maintenance QC', icon: 'settings', color: 'teal', link: '#', progress: 85 },
        { title: 'Inventory', icon: 'storage', color: 'light-blue darken-1', link: '#', progress: 75 },
        
    ];
});
