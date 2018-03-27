(function(window, undefined){
    //将组建方法封装在一个类中
    function JsClassName(cfg) {
        var config = cfg || {};
        this.get = function(n){
            return config[n];
        }

        this.set = function(n, v){
            config[n] = v;
        }

        this.init();
    }

    JsClassName.prototype = {
        init:function () {
            this.createDom();
            this.bindEvent();
        },
        createDom: function(){
            var div1 = document.getElementById('div1');
            var div2 = document.getElementById('div2');

            var showButton = document.getElementById('show');
            var hideButton = document.getElementById('hide');

            this.set("div1", div1);
            this.set("div2", div2);

            this.set("showButton", showButton);
            this.set("hideButton", hideButton);
        },
        bindEvent: function () {
            var _this = this;
            var div1 = _this.get('div1');
            var showButton = _this.get('showButton');
            var hideButton = _this.get('hideButton');

            showButton.onclick = function () {
                _this.show();
            }

            hideButton.onclick = function(){
                _this.hide();
            }

        },
        show: function(){
            var _this = this;
            var div2 = _this.get('div2');
            div2.style.visibility = 'visible';
        },
        hide: function(){
            var _this = this;
            var div2 = _this.get('div2');
            div2.style.visibility = 'hidden';
        }
    };

    var obj = new JsClassName();
    window.show = function () {
        obj.show.call(obj);
    }

    window.hide = function () {
        obj.hide.call(obj)
    }

    //将组件绑定到window对象上
    window.JsClassName = window.JsClassName || JsClassName;
})(window);

var button1=document.getElementById("test1");
var button2=document.getElementById("test2");

button1.onclick=show;
button2.onclick=hide;