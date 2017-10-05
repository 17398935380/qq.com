window.onload = function () {
    var oBody=document.getElementsByTagName('body')[0];
    var oContent=oBody.getElementsByClassName('content')[0];
    var oUpper = document.getElementsByClassName('upper')[0];
    var ocentral = document.getElementsByClassName('central')[0];
    var oNewP = document.getElementsByTagName('p')[0];
    var oNewH = document.getElementsByTagName('h3')[0];
    var oPink=document.getElementsByClassName('pink1')[0];

    var H = oUpper.offsetHeight;
    var c = 8;

    function red() {
        for (var i = 0; i < c; i++) {
            var oDiv = document.createElement('div');
            var T = oUpper.offsetWidth / c;
            oDiv.style.width = T + 'px';
            oDiv.style.height = H / 100 + 'rem';
            oDiv.style.left = T * i + 'px';
            var p = T * i;
            oDiv.style.opacity = 1;
            oDiv.style.webkitTransform = 'translate' + '(' + p + 'px)';

            ~function (oDiv) {
                var time1 = setTimeout(function () {
                    oDiv.style.webkitTransform = 'translate(0,0)';
                    clearTimeout(time1);
                }, 17);

            }(oDiv);
            oUpper.appendChild(oDiv);
        }
    }
    function portrait() {
        var oBg = document.getElementsByClassName('bg')[0];
        ocentral.style.left=oUpper.offsetWidth/2-ocentral.offsetWidth/2+'px';
        oNewP.style.left =oUpper.offsetWidth/2-oNewP.offsetWidth/2+'px';
        oNewH.style.left =oNewH.offsetWidth/2+'px';
        oNewH.style.marginLeft = 2.2 + 'rem';
        oNewP.opacity = 0;
        oNewH.opacity = 0;

        var r=setTimeout(function () {
            ocentral.style.opacity = 1;
            ocentral.style.webkitTransform = 'translate' + '(0,' + 1 + 'rem)';
            oBg.style.webkitTransform = ' scale(14) rotateZ(0deg)';//-50
            oNewP.opacity = 1;
            oNewH.opacity = 1;
            clearTimeout(r);
        }, 1000);
    }
    function call() {
        BindingClickPage();
    }

    function init() {
        // red();
        // portrait();
        // var j=setTimeout(function () {
        //     clearTimeout(j);
            call();
        // },3000);

    }

    init();
};








