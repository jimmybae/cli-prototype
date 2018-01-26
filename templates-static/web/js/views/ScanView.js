define(
    function() {
        var ScanView = GMobileJS.View.extend({
            el: '#content',
            template: 'ScanTemplate',
            events: {
                'click #scan_btn': 'scan',
                'click #generate_btn': 'generate'
            },
            scan: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            generate: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return ScanView;
    }
);