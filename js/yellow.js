function BubblePage() {
    let oBox = document.getElementsByClassName('box')[0];
    let oBoxOne = document.getElementsByClassName('box1')[0];
    let oBoxTwo = document.getElementsByClassName('box2')[0];

    oBoxOne.onmouseenter = function () {
        oBoxTwo.style.filter = 'brightness(0.5)';
        oBoxTwo.style.transform = 'scale(1.01)';

    };
    oBoxOne.onmouseleave = function () {
        oBoxTwo.style.filter = 'brightness(1)';
        oBoxTwo.style.transform = 'none';
    };

    function tt(m, n) {
        return Math.round(Math.random() * (m - n) + n);
    }
    let oBubble=document.getElementsByClassName('bubble')[0];
    let oImg=oBubble.getElementsByTagName('img');
    function BubbleTrajectory() {
        for (let i = 0; i < oImg.length; i++) {
            oImg[i].style.left=tt(1,500)+'px';
            oImg[i].style.top=tt(1,500)+'px';
            oImg[i].style.width=tt(1,30)+'px';
            (function(oImg){
                console.log(2);
                let time4=setTimeout(function () {
                    oImg[i].style.transform='translateY(-200px) scale(1.5,1.5)';
                    clearTimeout(time4);
                },1000);

            })(oImg);
        }
        }

return BubbleTrajectory();
}
