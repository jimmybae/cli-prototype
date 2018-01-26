define(
    function() {
        var CameraView = GMobileJS.View.extend({
            el: '#content',
            template: 'CameraTemplate',
            events: {
                'click #take_picture': 'takePicture'
            },
            takePicture: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return CameraView;
    }
);