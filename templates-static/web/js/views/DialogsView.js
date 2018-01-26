define(
    function() {
        var DialogsView = GMobileJS.View.extend({
            el: '#content',
            template: 'DialogsTemplate',
            events: {
                'click #alert_btn': 'showAlert',
                'click #confirm_btn': 'showConfirm',
                'click #prompt_btn': 'showPrompt',
                'click #beep_btn': 'playBeep',
                'click #vibrate_btn': 'playVibrate'
            },
            showAlert: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            showConfirm: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            showPrompt: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            playBeep: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            playVibrate: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return DialogsView;
    }
);