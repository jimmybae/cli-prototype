define(
    function() {
        var MocklocationView = GMobileJS.View.extend({
            el: '#content',
            template: 'MocklocationTemplate',
            events: {
                'click #check_mocklocation': 'isAllowMockLocation',
                'click #add_test_provider': 'addTestProvider',
                'click #remove_test_provider': 'removeTestProvider'
            },
            addTestProvider: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            removeTestProvider: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            isAllowMockLocation: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return MocklocationView;
    }
);