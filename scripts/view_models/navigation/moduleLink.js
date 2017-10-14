var moduleLink = function (linkName, link) {
	var self = this;

	self.name = linkName;
	self.isHovering = ko.observable(false);
	self.linkHref = link;
};