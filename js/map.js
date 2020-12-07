function myMap(){
    var myCenter = new google.maps.LatLng(36.629045, 127.456328);

    var paik_whole = new google.maps.LatLng(36.6342664, 127.4585268);
    var paik_congestion = new google.maps.LatLng(36.6342664, 127.4585268);
    var paik_scale = new google.maps.LatLng(36.6342664, 127.4585268);

    var starbucks_whole = new google.maps.LatLng(36.634009, 127.459696);
    var starbucks_congestion = new google.maps.LatLng(36.634009, 127.459696);
    var starbucks_scale = new google.maps.LatLng(36.634009, 127.459696);
    var twosome_whole = new google.maps.LatLng(36.633632, 127.459668);
    var twosome_congestion = new google.maps.LatLng(36.633632, 127.459668);
    var twosome_scale = new google.maps.LatLng(36.633632, 127.459668);
    var pas1_whole = new google.maps.LatLng(36.633980, 127.460187);
    var pas1_congestion = new google.maps.LatLng(36.633980, 127.460187);
    var pas1_scale = new google.maps.LatLng(36.633980, 127.460187);
    var arte_whole = new google.maps.LatLng(36.631726, 127.456691);
    var arte_congestion = new google.maps.LatLng(36.631726, 127.456691);
    var arte_scale = new google.maps.LatLng(36.631726, 127.456691);

    var cafe203_whole = new google.maps.LatLng(36.632512, 127.452632);
    var cafe203_congestion = new google.maps.LatLng(36.632512, 127.452632);
    var cafe203_scale = new google.maps.LatLng(36.632512, 127.452632);
    var hollys_whole = new google.maps.LatLng(36.632754, 127.453402);
    var hollys_congestion = new google.maps.LatLng(36.632754, 127.453402);
    var hollys_scale = new google.maps.LatLng(36.632754, 127.453402);
    var yb_whole = new google.maps.LatLng(36.633384, 127.456361);
    var yb_congestion = new google.maps.LatLng(36.633384, 127.456361);
    var yb_scale = new google.maps.LatLng(36.633384, 127.456361);

    var pas2_whole = new google.maps.LatLng(36.624911, 127.464587);
    var pas2_congestion = new google.maps.LatLng(36.624911, 127.464587);
    var pas2_scale = new google.maps.LatLng(36.624911, 127.464587);
    var ediya_whole = new google.maps.LatLng(36.624939, 127.464799);
    var ediya_congestion = new google.maps.LatLng(36.624939, 127.464799);
    var ediya_scale = new google.maps.LatLng(36.624939, 127.464799);


    var congestionmap = new google.maps.Map(document.getElementById('mapp'),
    {
        zoom: 16,
        center: new google.maps.LatLng(36.632306, 127.457403)
    });   
    var scalemap = new google.maps.Map(document.getElementById('map-container-google-18'),
    {
        zoom: 15,
        center: new google.maps.LatLng(36.632306, 127.457403)
    });
    var wholemap = new google.maps.Map(document.getElementById('map-container-google-16'),
    {
        zoom: 15.5,
        center: new google.maps.LatLng(36.629066, 127.456339)
    });


    var wholemarker = new google.maps.Marker({
        position:myCenter
        
    });
    var wholemarker1 = new google.maps.Marker({
        position:paik_whole,
        icon: 'img/seomun.png',
        clickable: true,  
    });
    var wholemarker2 = new google.maps.Marker({
        position:starbucks_whole,
        icon: 'img/jungmun.png',
        clickable: true,
    });
    var wholemarker3 = new google.maps.Marker({
        position:twosome_whole,
        icon: 'img/jungmun.png',
        clickable: true, 
    });
    var wholemarker4 = new google.maps.Marker({
        position:pas1_whole,
        icon: 'img/jungmun.png',
        clickable: true, 
    });
    var wholemarker5 = new google.maps.Marker({
        position:arte_whole,
        icon: 'img/jungmun.png',
        clickable: true, 
    });
    var wholemarker6 = new google.maps.Marker({
        position:cafe203_whole,
        icon: 'img/jeongmun.png',
        clickable: true, 
    });
    var wholemarker7 = new google.maps.Marker({
        position: hollys_whole,
        icon: 'img/jeongmun.png',
        clickable: true, 
    });
    var wholemarker8 = new google.maps.Marker({
        position:pas2_whole,
        icon: 'img/whomun.png',
        clickable: true,
    });
    var wholemarker9 = new google.maps.Marker({
        position:ediya_whole,
        icon: 'img/whomun.png',
        clickable: true, 
    });
    var wholemarker10 = new google.maps.Marker({
        position:yb_whole,
        icon: 'img/jeongmun.png',
        clickable: true, 
    });


    var congestionmarker1 = new google.maps.Marker({
        position:paik_congestion,
        icon: 'img/full.png'
    });
    var congestionmarker2 = new google.maps.Marker({
        position:starbucks_congestion,
        icon: 'img/full.png' 
    });
    var congestionmarker3 = new google.maps.Marker({
        position:twosome_congestion,
        icon: 'img/full.png' 
    });
    var congestionmarker4 = new google.maps.Marker({
        position:pas1_congestion,
        icon: 'img/normal.png' 
    });
    var congestionmarker5 = new google.maps.Marker({
        position:arte_congestion,
        icon: 'img/free.png' 
    });
    var congestionmarker6 = new google.maps.Marker({
        position:cafe203_congestion,
        icon: 'img/free.png' 
    });
    var congestionmarker7 = new google.maps.Marker({
        position:hollys_congestion,
        icon: 'img/free.png' 
    });
    var congestionmarker8 = new google.maps.Marker({
        position:pas2_congestion,
        icon: 'img/full.png' 
    });
    var congestionmarker9 = new google.maps.Marker({
        position:ediya_congestion,
        icon: 'img/normal.png' 
    });
    var congestionmarker10 = new google.maps.Marker({
        position:yb_congestion,
        icon: 'img/free.png' 
    });



    var scalemarker1 = new google.maps.Marker({
        position:paik_scale,
        icon: 'img/small.png' 
    });
    var scalemarker2 = new google.maps.Marker({
        position:starbucks_scale,
        icon: 'img/big.png' 
    });
    var scalemarker3 = new google.maps.Marker({
        position:twosome_scale,
        icon: 'img/big.png' 
    });
    var scalemarker4 = new google.maps.Marker({
        position:pas1_scale,
        icon: 'img/big.png' 
    });
    var scalemarker5 = new google.maps.Marker({
        position:arte_scale,
        icon: 'img/big.png' 
    });
    var scalemarker6 = new google.maps.Marker({
        position:cafe203_scale,
        icon: 'img/big.png' 
    });
    var scalemarker7 = new google.maps.Marker({
        position:hollys_scale,
        icon: 'img/big.png' 
    });
    var scalemarker8 = new google.maps.Marker({
        position:pas2_scale,
        icon: 'img/big.png' 
    });
    var scalemarker9 = new google.maps.Marker({
        position:ediya_scale,
        icon: 'img/big.png' 
    });
    var scalemarker10 = new google.maps.Marker({
        position:yb_scale,
        icon: 'img/small.png' 
    });


    wholemarker.setMap(wholemap);
    wholemarker1.setMap(wholemap);
    wholemarker2.setMap(wholemap);
    wholemarker3.setMap(wholemap);
    wholemarker4.setMap(wholemap);
    wholemarker5.setMap(wholemap);
    wholemarker6.setMap(wholemap);
    wholemarker7.setMap(wholemap);
    wholemarker8.setMap(wholemap);
    wholemarker9.setMap(wholemap);
    wholemarker10.setMap(wholemap);

    congestionmarker1.setMap(congestionmap);
    congestionmarker2.setMap(congestionmap);
    congestionmarker3.setMap(congestionmap);
    congestionmarker4.setMap(congestionmap);
    congestionmarker5.setMap(congestionmap);
    congestionmarker6.setMap(congestionmap);
    congestionmarker7.setMap(congestionmap);
    congestionmarker8.setMap(congestionmap);
    congestionmarker9.setMap(congestionmap);
    congestionmarker10.setMap(congestionmap);


    scalemarker1.setMap(scalemap);
    scalemarker2.setMap(scalemap);
    scalemarker3.setMap(scalemap);
    scalemarker4.setMap(scalemap);
    scalemarker5.setMap(scalemap);
    scalemarker6.setMap(scalemap);
    scalemarker7.setMap(scalemap);
    scalemarker8.setMap(scalemap);
    scalemarker9.setMap(scalemap);
    scalemarker10.setMap(scalemap);

    var contentCBNU = '<div>Hi. This is CBNU!</div>'+'<div>I will introduce cafes around the school</div>';

    var cafeImgArr = ['Paik.jpg','starbucks.png','twosome.png','pascucci.png','arte_info.jpg','cafe203.jpg','hollys.png','pascucci.png','ediya.png','yourbam.jpg'];
    var cafeNameArr = ['Paik Dabang','Starbucks','Twosome Place','Pascucci','Arte Coffe','Cafe 203','Hollys','Pascucci','Ediya','Yourbam'];
    var cafe = [];
    var cafeImg = [];
    var cafeName = [];
    var resBtn = [];
    var lafBtn = [];
    var closeBtn = [];
    var i;
    for (i=0; i<10; i++) {
        cafe[i] = document.createElement('div');
        cafe[i].style.paddingTop = '10px';
        cafe[i].style.paddingBottom = '10px';
        
    
        cafeImg[i] = document.createElement('img');
        cafeImg[i].src = "img/"+cafeImgArr[i];
        cafeImg[i].width = 150;
        cafeImg[i].height = 150;

        cafeName[i] = document.createElement('h4');
        cafeName[i].innerText = cafeNameArr[i];
    
        resBtn[i] = document.createElement('button');
        resBtn[i].className = 'btn btn-outline-info btn-md';
        resBtn[i].style = 'width: 140px';
        resBtn[i].innerText = 'Reservation';
        
        lafBtn[i] = document.createElement('button');
        lafBtn[i].className = 'btn btn-outline-info btn-md';
        lafBtn[i].style = 'width: 140px';
        lafBtn[i].innerText = 'Lost_and_Found';
    
    
        cafe[i].append(cafeImg[i], cafeName[i], resBtn[i], lafBtn[i]/*, closeBtn[i]*/);
    }
    resBtn[0].onclick = function() {
        Reservation0();
    };
    lafBtn[0].onclick = function() {
        Lost_and_Found0();
    };
    resBtn[1].onclick = function() {
        Reservation1();
    };
    lafBtn[1].onclick = function() {
        Lost_and_Found1();
    };
    resBtn[2].onclick = function() {
        Reservation2();
    };
    lafBtn[2].onclick = function() {
        Lost_and_Found2();
    };
    resBtn[3].onclick = function() {
        Reservation3();
    };
    lafBtn[3].onclick = function() {
        Lost_and_Found3();
    };
    resBtn[4].onclick = function() {
        Reservation4();
    };
    lafBtn[4].onclick = function() {
        Lost_and_Found4();
    };
    resBtn[5].onclick = function() {
        Reservation5();
    };
    lafBtn[5].onclick = function() {
        Lost_and_Found5();
    };
    resBtn[6].onclick = function() {
        Reservation6();
    };
    lafBtn[6].onclick = function() {
        Lost_and_Found6();
    };
    resBtn[7].onclick = function() {
        Reservation7();
    };
    lafBtn[7].onclick = function() {
        Lost_and_Found7();
    };
    resBtn[8].onclick = function() {
        Reservation8();
    };
    lafBtn[8].onclick = function() {
        Lost_and_Found8();
    };
    resBtn[9].onclick = function() {
        Reservation9();
    };
    lafBtn[9].onclick = function() {
        Lost_and_Found9();
    };
    for (i=0; i<10; i++) {
        cafe[i].append(cafeName[i], resBtn[i], lafBtn[i]);
    }
    
    var infowindow = new google.maps.InfoWindow({
        content: contentCBNU        
    });
    var infowindow1 = new google.maps.InfoWindow({
        content: cafe[0],
        maxWidth:200,
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: cafe[1],
        maxWidth:200
    });
    var infowindow3 = new google.maps.InfoWindow({

        content: cafe[2],
        maxWidth:200
    });
    var infowindow4 = new google.maps.InfoWindow({
        content: cafe[3],
        maxWidth:200   
    });
    var infowindow5 = new google.maps.InfoWindow({
        content: cafe[4],
        maxWidth:200       
    });
    var infowindow6 = new google.maps.InfoWindow({
        content: cafe[5],
        maxWidth:200 
    });
    var infowindow7 = new google.maps.InfoWindow({
        content: cafe[6],
        maxWidth:200 
    });
    var infowindow8 = new google.maps.InfoWindow({
        content: cafe[7],
        maxWidth:200  
    });
    var infowindow9 = new google.maps.InfoWindow({
        content: cafe[8],
        maxWidth:200    
    });
    var infowindow10 = new google.maps.InfoWindow({
        content: cafe[9],
        maxWidth: 200     
    });

    wholemarker.addListener('click', function() {
        // ��Ŀ ���� ���������츦 ǥ���մϴ�
        infowindow.open(wholemap,wholemarker);
    });
    wholemarker1.addListener('click', function() {
        // ��Ŀ ���� ���������츦 ǥ���մϴ�
        infowindow1.open(wholemap,wholemarker1);
    });
    wholemarker2.addListener('click', function() {
        // ��Ŀ ���� ���������츦 ǥ���մϴ�
        infowindow2.open(wholemap,wholemarker2);
    });
    wholemarker3.addListener('click', function() {
        // ��Ŀ ���� ���������츦 ǥ���մϴ�
        infowindow3.open(wholemap,wholemarker3);
    });
    wholemarker4.addListener('click', function() {
        // ��Ŀ ���� ���������츦 ǥ���մϴ�
        infowindow4.open(wholemap,wholemarker4);
    });
    wholemarker5.addListener('click', function() {
        // ��Ŀ ���� ���������츦 ǥ���մϴ�
        infowindow5.open(wholemap,wholemarker5);
    });
    wholemarker6.addListener('click', function() {
        // ��Ŀ ���� ���������츦 ǥ���մϴ�
        infowindow6.open(wholemap,wholemarker6);
    });
    wholemarker7.addListener('click', function() {
        // ��Ŀ ���� ���������츦 ǥ���մϴ�
        infowindow7.open(wholemap,wholemarker7);
    });
    wholemarker8.addListener('click', function() {
        // ��Ŀ ���� ���������츦 ǥ���մϴ�
        infowindow8.open(wholemap,wholemarker8);
    });
    wholemarker9.addListener('click', function() {
        // ��Ŀ ���� ���������츦 ǥ���մϴ�
        infowindow9.open(wholemap,wholemarker9);
    });
    wholemarker10.addListener('click', function() {
        // ��Ŀ ���� ���������츦 ǥ���մϴ�
        infowindow10.open(wholemap,wholemarker10);
    });

    
    congestionmarker1.addListener('mouseover', function() {
        infowindow1.open(wholemap,this);
    });
    cafe[0].onmouseleave = function() {
        infowindow1.close();
    };
    congestionmarker2.addListener('mouseover', function() {
        
        infowindow2.open(wholemap,this);
    });
    cafe[1].onmouseleave = function() {
        infowindow2.close();
    };

    congestionmarker3.addListener('mouseover', function() {
        infowindow3.open(wholemap,this);
    });
    cafe[2].onmouseleave = function() {
        infowindow3.close();
    };

    congestionmarker4.addListener('mouseover', function() {
        infowindow4.open(wholemap,this);
    });
    cafe[3].onmouseleave = function() {
        infowindow4.close();
    };

    congestionmarker5.addListener('mouseover', function() {
        infowindow5.open(wholemap,this);
    });
    cafe[4].onmouseleave = function() {
        infowindow5.close();
    };

    congestionmarker6.addListener('mouseover', function() {
        infowindow6.open(wholemap,this);
    });
    cafe[5].onmouseleave = function() {
        infowindow6.close();
    };

    congestionmarker7.addListener('mouseover', function() {
        infowindow7.open(wholemap,this);
    });
    cafe[6].onmouseleave = function() {
        infowindow7.close();
    };

    congestionmarker8.addListener('mouseover', function() {
        infowindow8.open(wholemap,this);
    });
    cafe[7].onmouseleave = function() {
        infowindow8.close();
    };

    congestionmarker9.addListener('mouseover', function() {
        infowindow9.open(wholemap,this);
    });
    cafe[8].onmouseleave = function() {
        infowindow9.close();
    };

    congestionmarker10.addListener('mouseover', function() {
        infowindow10.open(wholemap,this);
    });
    cafe[9].onmouseleave = function() {
        infowindow10.close();
    };

    
    scalemarker1.addListener('click', function() {
        infowindow1.open(wholemap,scalemarker1);
    });

    scalemarker2.addListener('click', function() {
        infowindow2.open(wholemap,scalemarker2);
    });

    scalemarker3.addListener('click', function() {
        infowindow3.open(wholemap,scalemarker3);
    });

    scalemarker4.addListener('click', function() {
        infowindow4.open(wholemap,scalemarker4);
    });

    scalemarker5.addListener('click', function() {
        infowindow5.open(wholemap,scalemarker5);
    });

    scalemarker6.addListener('click', function() {
        infowindow6.open(wholemap,scalemarker6);
    });

    scalemarker7.addListener('click', function() {
        infowindow7.open(wholemap,scalemarker7);
    });

    scalemarker8.addListener('click', function() {
        infowindow8.open(wholemap,scalemarker8);
    });
    
    scalemarker9.addListener('click', function() {
        infowindow9.open(wholemap,scalemarker9);
    });

    scalemarker10.addListener('click', function() {
        infowindow10.open(wholemap,scalemarker10);
    });


    

}