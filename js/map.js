
function myMap(){
    var myCenter = new google.maps.LatLng(36.629045, 127.456328);

    var humin_whole = new google.maps.LatLng(36.625602, 127.450045);
    var humin_congestion = new google.maps.LatLng(36.625602, 127.450045);
    var humin_scale = new google.maps.LatLng(36.625602, 127.450045);

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


    var congestionmap = new google.maps.Map(document.getElementById('map-container-google-16'),
    {
        zoom: 16,
        center: new google.maps.LatLng(36.632306, 127.457403)
    });   
    var scalemap = new google.maps.Map(document.getElementById('map-container-google-18'),
    {
        zoom: 15,
        center: new google.maps.LatLng(36.632306, 127.457403)
    });
    var wholemap = new google.maps.Map(document.getElementById('mapp'),
    {
        zoom: 15.5,
        center: new google.maps.LatLng(36.629066, 127.456339)
    });


    var wholemarker = new google.maps.Marker({
        position:myCenter
        
    });
    var wholemarker1 = new google.maps.Marker({
        position:humin_whole,
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
        position:humin_congestion,
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
        position:humin_scale,
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
  
    var infowindow = new google.maps.InfoWindow({
        content: contentCBNU        
    });
    var infowindow1 = new google.maps.InfoWindow({
        content: "Cafe Humin"      
    });
    var infowindow2 = new google.maps.InfoWindow({
        content: "Starabucks"      
    });
    var infowindow3 = new google.maps.InfoWindow({
        content: "A Twosome Place"      
    });
    var infowindow4 = new google.maps.InfoWindow({
        content: "Caffe Pascucci in Jungmoon"      
    });
    var infowindow5 = new google.maps.InfoWindow({
        content: "Arte Coffe"      
    });
    var infowindow6 = new google.maps.InfoWindow({
        content: "Cafe 203"      
    });
    var infowindow7 = new google.maps.InfoWindow({
        content: "Hollys"      
    });
    var infowindow8 = new google.maps.InfoWindow({
        content: "Caffe Pascucci in Whomoon"      
    });
    var infowindow9 = new google.maps.InfoWindow({
        content: "Ediya in Whomoon"      
    });
    var infowindow10 = new google.maps.InfoWindow({
        content: "Yourbam"      
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
    
    congestionmarker1.addListener('click', function() {
        infowindow1.open(wholemap,congestionmarker1);
    });

    congestionmarker2.addListener('click', function() {
        infowindow2.open(wholemap,congestionmarker2);
    });

    congestionmarker3.addListener('click', function() {
        infowindow3.open(wholemap,congestionmarker3);
    });

    congestionmarker4.addListener('click', function() {
        infowindow4.open(wholemap,congestionmarker4);
    });

    congestionmarker5.addListener('click', function() {
        infowindow5.open(wholemap,congestionmarker6);
    });

    congestionmarker6.addListener('click', function() {
        infowindow6.open(wholemap,congestionmarker6);
    });

    congestionmarker7.addListener('click', function() {
        infowindow7.open(wholemap,congestionmarker7);
    });

    congestionmarker8.addListener('click', function() {
        infowindow8.open(wholemap,congestionmarker8);
    });

    congestionmarker9.addListener('click', function() {
        infowindow9.open(wholemap,congestionmarker9);
    });

    congestionmarker10.addListener('click', function() {
        infowindow10.open(wholemap,congestionmarker10);
    });

    
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

