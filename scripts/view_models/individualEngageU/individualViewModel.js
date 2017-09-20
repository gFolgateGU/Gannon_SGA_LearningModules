var individualViewModel = function () {
    var vm = this;

    vm.features = initFeatures();

    vm.showFeature = function(name) {
        hideFeatures();
        var jQueryDivToShow = "#" + name;
        $(jQueryDivToShow).show();
    }

    function initFeatures() {
        var availableFeatures = ko.observableArray();

        availableFeatures.push(new feature("AccountSettings"));
        availableFeatures.push(new feature("SearchOrganizations"));
        availableFeatures.push(new feature("ContactOrganization"));
        availableFeatures.push(new feature("SearchEvents"));
        availableFeatures.push(new feature("StartDiscussion"));

        return availableFeatures;
    }

    function hideFeatures() {
        vm.features().forEach(function (feat) {
            var jQueryDivHolder = "#" + feat.name;
            $(jQueryDivHolder).hide();
        });
    }
};