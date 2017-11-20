var indexViewModel = function() {
    var vm = this;
    
    vm.cardFeatures = initCardFeatures();

    function initCardFeatures() {
        var cardFeatures = ko.observableArray();

        cardFeatures.push(new cardFeature("Individual EngageU Essentials",
         "Learn how to effectively use EngageU.  The features in this module will help you learn about upcoming events, interesting organizations, and reading up on recent articles",
         "individualEngageU.html",
         "8/26/2017"));
        cardFeatures.push(new cardFeature("Managing an EngageU Club or Organization",
         "Learn how to run your organization more effectively by being able to manage a roster, store important documents, and post events",
         "organizationEngageU.html",
         "8/27/2017"));
        cardFeatures.push(new cardFeature("ITS FAQ",
        "Learn how to troubleshoot common technical problems that students are experiencing on campus",
        "itsFAQ.html",
        "8/28/2017"));
        
        return cardFeatures;
    }
};
