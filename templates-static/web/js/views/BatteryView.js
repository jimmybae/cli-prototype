define(
    function() {
        var BatteryView = GMobileJS.View.extend({
            el: '#content',
            template: 'BatteryTemplate'
        });
        return BatteryView;
    }
);