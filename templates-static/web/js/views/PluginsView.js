define(
    function() {
        var PluginsView = GMobileJS.View.extend({
            el: '#content',
            template: 'PluginsTemplate'
        });
        return PluginsView;
    }
);