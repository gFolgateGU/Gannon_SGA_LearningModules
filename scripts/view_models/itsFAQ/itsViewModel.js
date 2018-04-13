var itsViewModel = function () {
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

        availableFeatures.push(new faq("NetworkID"));
        availableFeatures.push(new faq("DefaultPassword"));
        availableFeatures.push(new faq("WifiConnect"));
        availableFeatures.push(new faq("EmailAndWithPhone"));
        availableFeatures.push(new faq("RegisterDeviceToNetwork"));
        availableFeatures.push(new faq("Office365"));

        return availableFeatures;
    }

    function hideFeatures() {
        $("#defaultNoOptionSelectedArea").hide();

        vm.features().forEach(function (feat) {
            var jQueryDivHolder = "#" + feat.questionName;
            $(jQueryDivHolder).hide();
        });
    }
}