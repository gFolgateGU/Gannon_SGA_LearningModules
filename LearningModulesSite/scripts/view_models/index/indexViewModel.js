var indexViewModel = function() {
    var vm = this;
    
    vm.cardFeatures = initCardFeatures();

    function initCardFeatures() {
        var cardFeatures = ko.observableArray();

        cardFeatures.push(new cardFeature("Test Title", "Test Description", "http://www.google.com/", "8/26/2017"));
        cardFeatures.push(new cardFeature("Test Title 2", "Test Description 2", "http://youtube.com", "8/27/2017"));
        
        return cardFeatures;
    }
};
