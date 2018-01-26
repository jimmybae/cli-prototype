define(
    function() {
        var DeviceMotionView = GMobileJS.View.extend({
            el: '#content',
            template: 'DeviceMotionTemplate',
            events: {
                'click #curr_accel': 'currAccel'
            },
            currAccel: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return DeviceMotionView;
    }
);