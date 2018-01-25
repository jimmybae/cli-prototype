define(
    function() {
        var MediaCaptureView = GMobileJS.View.extend({
            el: '#content',
            template: 'MediaCaptureTemplate',
            events: {
                'click #capture_audio': 'captureAudio',
                'click #capture_image': 'captureImage',
                'click #capture_video': 'captureVideo'
            },
            captureAudio: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            captureImage: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            captureVideo: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return MediaCaptureView;
    }
);