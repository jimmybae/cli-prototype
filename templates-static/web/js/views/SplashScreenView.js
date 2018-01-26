define(
    function() {
        var SplashScreenView = GMobileJS.View.extend({
            el: '#content',
            template: 'SplashScreenTemplate',
            events: {
                'click #show_splash': 'showSplash'
            },
            showSplash: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return SplashScreenView;
    }
);