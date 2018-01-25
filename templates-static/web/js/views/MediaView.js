define(
    function() {
        var MediaView = GMobileJS.View.extend({
            el: '#content',
            template: 'MediaTemplate',
            my_media: null,
            mediaTimer: null,
            events: {
                'click #start': 'mediaStart',
                'click #pause': 'mediaPause',
                'click #stop': 'mediaStop'
            },
            mediaStart: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            mediaPause: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            mediaStop: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return MediaView;
    }
);