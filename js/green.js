function BindingClickPage() {
    var oPink = document.getElementsByClassName('pink1')[0];
    var oUl = document.getElementsByTagName('ul')[0];
    var oLi = document.getElementsByClassName('li1')[0];
    var oNew = document.getElementsByClassName('li2')[0];
    var oNewLi = document.getElementsByClassName('li3')[0];

    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;

    let oBox = document.getElementsByClassName('box')[0];
    var oContent=document.getElementsByClassName('content')[0];


    oUl.style.width = w + 'px';
    oUl.style.height = h + 'px';
    oUl.style.display = 'block';

    oLi.style.display = 'block';
    console.log(oPink);
    oLi.onclick = function () {
        oLi.style.display = 'none';
        oNewLi.style.display = 'none';
        oPink.style.display = 'block';
        console.log(oPink);
        fragmentation();
        var time3=window.setInterval(function () {
            oPink.style.display = 'none';
            oBox.style.display='block';
            oContent.style.display='none';
            BubblePage();
            console.log(9);
            window.clearInterval(time3);

        }, 2000);

        oNew.style.display = 'block';

    };

}



