define(
    function() {
        var NFCView = GMobileJS.View.extend({
            el: '#content',
            template: 'NFCTemplate',
            events: {
                'click #read_btn': 'readNFC',
                'click #write_btn': 'writeNFC',
            },
            readNFC: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            writeNFC: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return NFCView;
    }
);