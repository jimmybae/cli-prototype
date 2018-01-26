define(
    function() {
        var GCMView = GMobileJS.View.extend({
            el: '#content',
            template: 'GCMTemplate',
            events: {
                'click #register_btn': 'register',
                'click #unregister_btn': 'unregister'
            },
            onBeforeRender: function(options) {
                if(!localStorage.getItem('regId')) {
                    localStorage.setItem('regId', 'APA91bFO4wFfKCqwnHOIoPPYZwApRDF_CuiVgqg2kVHE-JcTNl5hacLo2T-5cKZc2DygmhiUAAdWPpGhB7GghBK4T8yEP8K1xPS_SJtPsL5CwIaS9SQ3BW3E5oy5OhrDrno71TpwxafYz6OqLNblF848Bj1wGAlp2A');
                }
            },
            onAfterRender: function(options) {
                var user = JSON.parse(localStorage.getItem('user'));
                $('#user_name').html(user.emp_name);
                this.btnViewChange(user);
            },
            onSuccess: function(regId) {
                localStorage.setItem('regId', regId);
            },
            onFail: function(error) {
                alert(error);
            },
            register: function() {
                var self = this;
                var user = JSON.parse(localStorage.getItem('user'));
                if (localStorage.getItem('regId')) {
                    $.ajax({
                        url: 'http://192.168.41.90:8080/gcm-demo-server/rest/gcm-service/register?emp_num=' + user.emp_num + '&regi_id=' + localStorage.getItem('regId'),
                        success: function(data) {
                            if (data.result == 1) {
                                // alert('알람수신 등록하였습니다.');
                                user.registeration_id = localStorage.getItem('regId');
                                localStorage.setItem('user', JSON.stringify(user));
                                self.btnViewChange(user);
                            } else {
                                alert('알람수신 등록중 오류가 발생하였습니다.\n관리자에게 문의하여 주세요.');
                            }
                        },
                        error: function(requestObject, error, errorThrown) {
                            alert(error + '\n관리자에게 문의하여 주세요.');
                        }
                    });
                } else {
                    alert('알람수신 단말 아이디가 등록되지 않았습니다.\n관리자에게 문의하여 주세요.')
                }
            },
            unregister: function() {
                var self = this;
                var user = JSON.parse(localStorage.getItem('user'));
                $.ajax({
                    url: 'http://192.168.41.90:8080/gcm-demo-server/rest/gcm-service/unregister?emp_num=' + user.emp_num,
                    success: function(data) {
                        if (data.result == 1) {
                            // alert('알람수신 등록취소하였습니다.');
                            user.registeration_id = '';
                            localStorage.setItem('user', JSON.stringify(user));
                            self.btnViewChange(user);
                        } else {
                            alert('알람수신 등록취소중 오류가 발생하였습니다.\n관리자에게 문의하여 주세요.');
                        }
                    },
                    error: function(requestObject, error, errorThrown) {
                        alert(error + '\n관리자에게 문의하여 주세요.');
                    }
                });
            },
            btnViewChange: function(user) {
                if(user.registeration_id) {
                    $('#noti').html('On');
                    $('#noti').removeClass('badge-danger').addClass('badge-success');
                    $('#register_btn').prop('disabled', true);
                    $('#unregister_btn').prop('disabled', false);
                } else {
                    $('#noti').html('Off');
                    $('#noti').removeClass('badge-success').addClass('badge-danger');
                    $('#register_btn').prop('disabled', false);
                    $('#unregister_btn').prop('disabled', true);
                }
            }
        });
        return GCMView;
    }
);