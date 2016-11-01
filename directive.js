/**
 * Created by 俊 on 2016/10/26.
 */
angular.module('myApp',[])
    .directive('bowserDirective',function () {
        return {
            restrict: "A",
            replace: true,
            scope:{

            },
            link: function (scope,element,attrs) {
                var ua = navigator.userAgent.toLowerCase();
                var _chrome = (ua.indexOf('chrome')>-1) && (ua.indexOf('safari')>-1) && (ua.indexOf('opr')== -1) && (ua.indexOf('edge')== -1);
                var _underie11 = (ua.indexOf('msie')>-1);
                var _ie11 = (ua.indexOf('rv')>-1) && (ua.indexOf('firefox')== -1);
                var _edge = (ua.indexOf('edge')>-1);
                var _opera = (ua.indexOf('opr')>-1);
                var _firefox = (ua.indexOf('firefox')>-1);
                var _safari = (ua.indexOf('safari')>-1)&&(ua.indexOf('opr')== -1)&&(ua.indexOf('chrome')==-1);
                var url;
                var VersionNum;
                var Num ={};
                //获取浏览器的类型和版本号-↓-------------------------↓--------------------------↓
                if(_chrome) {
                    (VersionNum = ua.match(/chrome\/([\d.]+)/)) ? Num.chrome = VersionNum[1] :0;
                    var chromeNum = parseFloat(Num.chrome);
                    console.log((chromeNum));
                }
                if(_underie11) {
                    (VersionNum = ua.match(/msie ([\d.]+)/)) ? Num.ie = VersionNum[1] :0;
                    var ieNum = parseFloat(Num.ie);
                    console.log((ieNum));
                }
                if(_ie11) {
                    (VersionNum = ua.match(/rv\:([\d.]+)/)) ? Num.ie11 = VersionNum[1] :0;
                    var ie11Num = parseFloat(Num.ie11);
                    console.log((ie11Num));
                }
                if(_edge) {
                    (VersionNum = ua.match(/edge\/([\d.]+)/)) ? Num.edge = VersionNum[1] :0;
                    var edgeNum = parseFloat(Num.edge);
                    console.log((edgeNum));
                }
                if(_opera) {
                    (VersionNum = ua.match(/opr\/([\d.]+)/)) ? Num.opera = VersionNum[1] :0;
                    var oprNum = parseFloat(Num.opera);
                    console.log((oprNum));
                }
                if(_firefox) {
                    (VersionNum = ua.match(/firefox\/([\d.]+)/)) ? Num.firefox = VersionNum[1] :0;
                    var ffxNum = parseFloat(Num.firefox);
                    console.log((ffxNum));
                }
                if(_safari) {
                    (VersionNum = ua.match(/version\/([\d.]+).*safari/)) ? Num.safari = VersionNum[1] : 0;
                    var sfrNum = parseFloat(Num.safari);
                    console.log((sfrNum));
                }
                //设置浏览器版本界限--------------------↓
                var judgeNum = (chromeNum>30)|| (ieNum>10)|| (ie11Num>=11) || (edgeNum>10) || (oprNum>30) || (ffxNum>30) || (sfrNum>1);
                console.log((judgeNum));
                //--------------------------------------
                if(judgeNum){
                    url = 'projectFile';
                }else{
                    url = 'update-browser';
                    $location
                }
                scope.contentUrl = 'view/' + url + '.html';
            },
            template: '<div ng-include="contentUrl"></div>'
        }
    });
