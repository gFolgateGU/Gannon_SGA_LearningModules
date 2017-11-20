var faq = function (qName) {
    var self = this;

    self.questionName = qName;
    self.visibility = ko.observable(false);
    
    self.show = function() {
        self.visibility(true);
    }
}