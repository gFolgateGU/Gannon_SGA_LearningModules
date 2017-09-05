var individualViewModel = function () {
    var vm = this;

    vm.features = initFeatures();

    vm.showFeature = function(name) {
        hideAllFeatures();
        vm.features().forEach(function (feat) {
            if (feat.name === name) {
                feat.visibility(true);
            }
        });        
    };

    function initFeatures() {
        var availableFeatures = ko.observableArray();

        availableFeatures.push(new feature("AccountSettings"));
        availableFeatures.push(new feature("SearchOrganizations"));
        availableFeatures.push(new feature("ContactOrganization"));
        availableFeatures.push(new feature("SearchEvents"));
        availableFeatures.push(new feature("StartDiscussion"));

        return availableFeatures;
    }

    function hideAllFeatures() {
        vm.features().forEach(function (feat) {
            feat.visibility(false);       
        });  
    }
};