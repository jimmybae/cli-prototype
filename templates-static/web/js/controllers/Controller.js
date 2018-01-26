define(
    function() {
        var HelloWorldController = GMobileJS.Controller.extend({
            initialize: function(options) {
                GMobileJS.loadModule('SlideView').show();
                this.init_navigate = '#plugins';
            },
            /*
                appRoutes 정의 functions
            */
            nav_plugins: function(options) {
                GMobileJS.loadModule('PluginsView').show();
            },
            nav_login: function(options) {
                GMobileJS.loadModule('LoginView').show();
            },
            nav_logout: function(options) {
                GMobileJS.loadModule('LogoutView').show();
            },
            nav_battery: function(options) {
                GMobileJS.loadModule('BatteryView').show();
            },
            nav_camera: function(options) {
                GMobileJS.loadModule('CameraView').show();
            },
            nav_contacts: function(options) {
                GMobileJS.loadModule('ContactsView').show();
            },
            nav_device: function(options) {
                GMobileJS.loadModule('DeviceView').show();
            },
            nav_devicemotion: function(options) {
                GMobileJS.loadModule('DeviceMotionView').show();
            },
            nav_deviceorientation: function(options) {
                GMobileJS.loadModule('DeviceOrientationView').show();
            },
            nav_dialogs: function(options) {
                GMobileJS.loadModule('DialogsView').show();
            },
            nav_file: function(options) {
                GMobileJS.loadModule('FileView').show();
            },
            nav_geolocation: function(options) {
                GMobileJS.loadModule('GeolocationView').show();
            },
            nav_globalization: function(options) {
                GMobileJS.loadModule('GlobalizationView').show();
            },
            nav_inappbrowser: function(options) {
                GMobileJS.loadModule('InappBrowserView').show();
            },
            nav_media: function(options) {
                GMobileJS.loadModule('MediaView').show();
            },
            nav_mediacapture: function(options) {
                GMobileJS.loadModule('MediaCaptureView').show();
            },
            nav_networkinformation: function(options) {
                GMobileJS.loadModule('NetworkInformationView').show();
            },
            nav_splashscreen: function(options) {
                GMobileJS.loadModule('SplashScreenView').show();
            },
            nav_statusbar: function(options) {
                GMobileJS.loadModule('StatusBarView').show();
            },
            nav_vibration: function(options) {
                GMobileJS.loadModule('VibrationView').show();
            },
            nav_stt: function(options) {
                GMobileJS.loadModule('STTView').show();
            },
            nav_scan: function(options) {
                GMobileJS.loadModule('ScanView').show();
            },
            nav_nfc: function(options) {
                GMobileJS.loadModule('NFCView').show();
            },
            nav_mocklocation: function(options) {
                GMobileJS.loadModule('MocklocationView').show();
            },
            nav_gcm: function(options) {
                GMobileJS.loadModule('GCMView').show();
            },
            nav_default: function(options) {
                if (options == null) {
                    GMobileJS.AppRouter.navigate(this.init_navigate, {
                        trigger: true,
                        replace: true
                    });
                }
            },
            /*
                appEvents 정의 functions
            */
        });
        return HelloWorldController;
    }
);
