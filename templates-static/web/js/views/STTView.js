define(
    function() {
        var STTView = GMobileJS.View.extend({
            el: '#content',
            template: 'STTTemplate',
            events: {
                'click #stt_btn': 'speechToText',
                'click #stt_opt_btn': 'speechToTextOption'
            },
            speechToText: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            speechToTextOption: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return STTView;
    }
);