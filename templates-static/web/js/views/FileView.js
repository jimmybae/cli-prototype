define(
    function() {
        var FileView = GMobileJS.View.extend({
            el: '#content',
            template: 'FileTemplate'
        });
        return FileView;
    }
);