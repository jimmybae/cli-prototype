define(
    function() {
        var GeolocationView = GMobileJS.View.extend({
            el: '#content',
            template: 'GeolocationTemplate',
            events: {
                'click #curr_posi': 'currPosi'
            },
            currPosi: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return GeolocationView;
    }
);