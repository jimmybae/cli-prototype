define(
    function() {
        var InappBrowserView = GMobileJS.View.extend({
            el: '#content',
            template: 'InappBrowserTemplate',
            ref: null,
            flash: false,
            events: {
                'click #openInAppBrowser': 'openInAppBrowser',
                'click #closeInAppBrowser': 'closeRef',
                'click #openInAppBrowserHidden': 'openInAppBrowserHidden',
                'click #showInAppBrowserHidden': 'showInAppBrowser'
            },
            openInAppBrowser: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            closeRef: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            openInAppBrowserHidden: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            },
            showInAppBrowser: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return InappBrowserView;
    }
);