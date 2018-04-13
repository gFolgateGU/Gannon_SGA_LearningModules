var individualViewModel = function () {
    var vm = this;

    vm.features = initFeatures();

    vm.showFeature = function(name) {
        hideFeatures();
        var jQueryDivToShow = "#" + name;
        $(jQueryDivToShow).show();
        window.location.hash = name;
        var $navHeightBuffer = 0 - $("#mainNav").height();
        window.scrollBy(0, $navHeightBuffer * 2);
    }

    function initFeatures() {
        var availableFeatures = ko.observableArray();

        availableFeatures.push(new feature("ActionCenter"));
        availableFeatures.push(new feature("ManageRoster"));
        availableFeatures.push(new feature("CreateEvent"));
        availableFeatures.push(new feature("ManageDocuments"));

        return availableFeatures;
    }

    function hideFeatures() {
        $("#defaultNoOptionSelectedArea").hide();

        vm.features().forEach(function (feat) {
            var jQueryDivHolder = "#" + feat.name;
            $(jQueryDivHolder).hide();
        });
    }
};