define(
    function() {
        var DeviceOrientationView = GMobileJS.View.extend({
            el: '#content',
            template: 'DeviceOrientationTemplate',
            events: {
                'click #curr_head': 'currHead'
            },
            currHead: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return DeviceOrientationView;
    }
);