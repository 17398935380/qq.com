var fragmentation = (function () {
    function tt(m, n) {
        return Math.round(Math.random() * (m - n) + n);
    }

    function ff() {
        var pinkE = document.getElementsByClassName('pink1')[0],
            pinkR = pinkE.getElementsByClassName('pink2')[0];

        var l = document.documentElement.clientWidth,
            t = document.documentElement.clientHeight;
        pinkR.style.width = l + 'px';
        pinkR.style.height = t + 'px';

        var ol = l / 2,//大盒子的中心点
            ot = t / 2;
        var W = 16,
            H = 32;

        for (var i = 0; i < H; i++) {
            for (var j = 0; j < W; j++) {
                var oNewDiv = document.createElement('div');
                var d = Math.floor(pinkR.offsetWidth / W);
                var b = Math.floor(pinkR.offsetHeight / H);
                oNewDiv.style.width = d + 'px';
                oNewDiv.style.height = b + 'px';

                var oLeft = j * d,
                    oTop = i * b;//小盒子的 中心点

                oNewDiv.style.left = oLeft + 'px';
                oNewDiv.style.top = oTop + 'px';

                var offsetLeft = oLeft + d / 2;
                var offsetTop = oTop + b / 2;

                var w = offsetLeft - ol;
                var h = offsetTop - ot;

                oNewDiv.style.webkitTransform = 'translate3d' + '(' + w + 'px, ' + h + 'px, 6000px) rotateX(' + tt(-180, 180) + 'deg) rotateY(' + tt(-180, 180) + 'deg) scale(3,3)';
                oNewDiv.style.opacity = 0;
                oNewDiv.style.backgroundColor = '-' + oLeft + 'px -' + oTop + 'px';
                pinkR.appendChild(oNewDiv);
                (function (oNewDiv) {
                    var w = setTimeout(function () {
                        oNewDiv.style.webkitTransform = 'translate3d(0,0,0)';
                        oNewDiv.style.opacity = 1;
                        clearTimeout(w);
                    }, tt(100, 500))

                })(oNewDiv, w, h)

            }
        }

    }

    return ff;
})();
