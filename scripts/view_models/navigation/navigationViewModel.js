var navigationViewModel = function () {

	var vm = this;

	vm.availableModules = initModuleLinks();

	function initModuleLinks() {
		var modules = ko.observableArray();

		modules.push(new moduleLink("EngageU for a Single User", "individualEngageU.html"));
		modules.push(new moduleLink("EngageU for a Club Manager", "individualEngageU.html"));
		modules.push(new moduleLink("ITS FAQ", "itsFAQ.html"));

		return modules;
	}
};