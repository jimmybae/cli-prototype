define(
    function() {
        var ContactsView = GMobileJS.View.extend({
            el: '#content',
            template: 'ContactsTemplate',
            events: {
                'click #search_contacts': 'searchContacts'
            },
            searchContacts: function() {
                alert('Web 버전에서는 Mobile 기능을 지원하지 않습니다.');
            }
        });
        return ContactsView;
    }
);