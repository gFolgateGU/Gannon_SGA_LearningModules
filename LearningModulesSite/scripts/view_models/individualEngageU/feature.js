var feature = function (nme) {
    var self = this;

    self.name = nme;
    self.visibility = ko.observable(false);
    
    self.show = function() {
        self.visibility(true);
    }
};