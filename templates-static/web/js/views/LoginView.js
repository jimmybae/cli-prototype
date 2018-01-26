define(
    function() {
        var LoginView = GMobileJS.View.extend({
            el: '#content',
            template: 'LoginTemplate',
            events: {
                'click #login_btn': 'login'
            },
            login: function() {
                $.ajax({
                    url: 'http://192.168.41.90:8080/gcm-demo-server/rest/gcm-service/login?emp_num=' + $('#un').val() + '&emp_pw=' + $('#pw').val(),
                    success: function(data) {
                        if (data.result.length > 0) {
                            localStorage.setItem('user', JSON.stringify(data.result[0]));
                            GMobileJS.loadModule('SlideView').show();
                            location.href = '#plugins';
                        } else {
                            alert('사용자를 확인해 주세요.');
                        }
                    },
                    error: function(requestObject, error, errorThrown) {
                        alert(error + '\n관리자에게 문의하여 주세요.');
                    }
                });
            }
        });
        return LoginView;
    }
);