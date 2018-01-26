define(
    function() {
        var StatusBarView = GMobileJS.View.extend({
            el: '#content',
            template: 'StatusBarTemplate',
            events: {
                'click #status_bar_hide': 'statusBarHide',
                'click #status_bar_show': 'statusBarShow',
                'change #status_bar_color': 'statusBarColor'
            },
            statusBarHide: function(event) {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            statusBarShow: function(event) {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            statusBarColor: function(event) {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return StatusBarView;
    }
);