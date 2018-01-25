define(
    function() {
        var VibrationView = GMobileJS.View.extend({
            el: '#content',
            template: 'VibrationTemplate',
            events: {
                'click #vibration': 'vibration'
            },
            vibration: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return VibrationView;
    }
);