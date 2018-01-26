define(
    function() {
        var DeviceView = GMobileJS.View.extend({
            el: '#content',
            template: 'DeviceTemplate'
        });
        return DeviceView;
    }
);