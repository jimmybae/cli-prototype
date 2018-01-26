define(
    function() {
        var SlideView = GMobileJS.View.extend({
            el: '#slide',
            template: 'SlideTemplate',
            events: {
                'click #logout_link': 'logout',
                'click #push_toggle': 'pushToggle'
            },
            onBeforeRender: function(options) {
                if(!localStorage.getItem('regId')) {
                    localStorage.setItem('regId', 'APA91bFO4wFfKCqwnHOIoPPYZwApRDF_CuiVgqg2kVHE-JcTNl5hacLo2T-5cKZc2DygmhiUAAdWPpGhB7GghBK4T8yEP8K1xPS_SJtPsL5CwIaS9SQ3BW3E5oy5OhrDrno71TpwxafYz6OqLNblF848Bj1wGAlp2A');
                }
                this.data = {
                    user: JSON.parse(localStorage.getItem('user'))
                }
            },
            onAfterRender: function(options) {
                /*$('#navbar-collapse a.nav-link').on('click', function(e) {
                    $('#navbar-collapse').collapse('hide');
                });*/
                $('#navbar-collapse').on('shown.bs.collapse', function () {
                    $('#content, #navbar-collapse a.nav-link').one('click', function(e) {
                        $('#navbar-collapse').collapse('hide');
                    });
                });
                
                /*$('#navbar-collapse').on('show.bs.collapse', function () {
                    // $('#content not(.btn)').one('click', function(e) {
                    // $('#content .btn:not(a)').one('click', function(e) {
                    $('#navbar-collapse a.nav-link').one('click', function(e) {//, #navbar-collapse a.nav-link
                        console.log(1);
                        $('#navbar-collapse').collapse('hide');
                    });
                });*/
                /*$('#navbar-collapse').on('hide.bs.collapse', function(e) {
                    $('#content').off('click');
                    e.preventDefault();
                });*/
            },
            logout: function() {
                localStorage.removeItem('user');
                GMobileJS.loadModule('SlideView').show();
                location.href = '#plugins';
            },
            pushToggle: function() {
                if($('div#toggle .fa-toggle-on').length) {
                    this._unregister();
                } else if($('div#toggle .fa-toggle-off').length) {
                    this._register();
                } else {
                    alert('로그인이 필요합니다.');
                }
            },
            _onSuccess: function(regId) {
                localStorage.setItem('regId', regId);
            },
            _onFail: function(error) {
                alert(error);
            },
            _register: function() {
                var self = this;
                var user = JSON.parse(localStorage.getItem('user'));
                if (localStorage.getItem('regId')) {
                    $.ajax({
                        url: 'http://192.168.41.90:8080/gcm-demo-server/rest/gcm-service/register?emp_num=' + user.emp_num + '&regi_id=' + localStorage.getItem('regId'),
                        success: function(data) {
                            if (data.result == 1) {
                                user.registeration_id = localStorage.getItem('regId');
                                localStorage.setItem('user', JSON.stringify(user));
                                $('div#toggle').html('<i class="fa fa-toggle-on fa-lg text-success"></i>');
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
            _unregister: function() {
                var self = this;
                var user = JSON.parse(localStorage.getItem('user'));
                $.ajax({
                    url: 'http://192.168.41.90:8080/gcm-demo-server/rest/gcm-service/unregister?emp_num=' + user.emp_num,
                    success: function(data) {
                        if (data.result == 1) {
                            user.registeration_id = '';
                            localStorage.setItem('user', JSON.stringify(user));
                            $('div#toggle').html('<i class="fa fa-toggle-off fa-lg text-light"></i>');
                        } else {
                            alert('알람수신 등록취소중 오류가 발생하였습니다.\n관리자에게 문의하여 주세요.');
                        }
                    },
                    error: function(requestObject, error, errorThrown) {
                        alert(error + '\n관리자에게 문의하여 주세요.');
                    }
                });
            }
        });
        return SlideView;
    }
);