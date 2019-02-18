
window.onload=function() {
    var times;
    var count = 0;
    window.onload = function () {
        var ullist = document.getElementsByClassName('ullist')[0];
        var box = document.getElementsByClassName('box')[0];
        times = setInterval(function () {
            imgbo();
        }, 2000);
        function imgbo() {
            ullist.className = 'ullist b';
            count++;
            ullist.style.marginLeft = (-84 * count) + 'rem';
            setInterval(function () {
                if (count > ullist.children.length - 1) {
                    ullist.className = 'ullist';
                    count = 0;
                    ullist.style.marginLeft = '0px';
                }
            }, 1000)

        }
    };


   /*   var lifo=document.getElementsByTagName('a');
     var s=document.getElementsByClassName('index-top-right')[0];
     document.getElementsByClassName ('index-top-right')[0].onmouseover=function(){
     for(var i=0;i<lifo.length;i++){
     lifo[i].index=i;
     lifo[i].onmouseenter=function(){
     for(var j=0;j<lifo.length;j++){
     lifo[j].className=''
     }
     this.className='select';
     }
     }
     };*/
    var lifo=document.getElementsByClassName('s');
    var lio=document.getElementsByTagName('a');
    for(var i=0;i<lifo.length;i++){
        lio[i].index=i;
        lio[i].onmouseenter=function(){
            for(var j=0;j<lio.length;j++){
                lio[j].className=''
            }
            this.className='select';
        }
    }
}

