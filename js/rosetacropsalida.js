/* Fancy */

    let Globalquerystring1 = "camino";
    var data = {
    numdots:0,
    canvas: null,
    ctx: null,
    clickedDot: null,

    camino : new Array(),


    dots: [    
      
      
{x:1081.5, y:30.6,r:2, name:"Altair"},
{x:764.7, y:141.1,r:2, name:"Arturo"},
{x:926.7, y:324.7,r:2, name:"Vega"},
{x:545.1, y:411.4,r:2, name:"Pollux"},
{x:433.5, y:436.9,r:2, name:"Proción"},
{x:311.1, y:555.9,r:2, name:"Sirio"},
{x:501.9, y:557.6,r:2, name:"Betelgeuse"},
{x:654.9, y:489.6,r:2, name:"Capella"},
{x:462.3, y:661.3,r:2, name:"Rigel"},
{x:595.5, y:595,r:2, name:"Aldebarán"},
{x:660.3, y:617.1,r:2, name:"Sol"},
{x:613.5, y:574.6,r:2, name:"Venus"},
{x:595.5, y:544,r:2, name:"Mercurio"},
{x:519.9, y:358.7,r:2, name:"Luna"},
{x:728.7, y:651.1,r:2, name:"Urano"},
{x:1160.7, y:615.4,r:2, name:"Jupiter"},
{x:537.9, y:455.6,r:2, name:"Marte"},
{x:505.5, y:255,r:2, name:"Reagulo"},
{x:914.1, y:411.4,r:2, name:"Deneb"},
{x:185.1, y:564.4,r:2, name:"Adhara"},
{x:1407.3, y:83.3,r:2, name:"Kaus Australis"},
{x:995.1, y:204,r:2, name:"Rasalhague"},
{x:750.3, y:263.5,r:2, name:"Alkaid"},
{x:725.1, y:290.7,r:2, name:"Alioth"},
{x:694.5, y:331.5,r:2, name:"Dubh"},
{x:771.9, y:343.4,r:2, name:"Kochab"},
{x:581.1, y:391,r:2, name:"Estrella Polar"},
{x:1340.7, y:205.7,r:2, name:"Nunki"},
{x:633.3, y:467.5,r:2, name:"Menkalinan"},
{x:719.7, y:542.3,r:2, name:"Algol"},
{x:811.5, y:561,r:2, name:"Mirach"},
{x:719.7, y:511.7,r:2, name:"Mirfak"},
{x:869.1, y:569.5,r:2, name:"Alpheratz"},
{x:762.9, y:617.1,r:2, name:"Hamal"},
{x:599.1, y:523.6,r:2, name:"Elnath"},
{x:510.9, y:491.3,r:2, name:"Alhena"},
{x:559.5, y:421.6,r:2, name:"Castor"},
{x:519.9, y:589.9,r:2, name:"Bellatrix"},
{x:411.9, y:625.6,r:2, name:"Saiph"},
{x:460.5, y:659.6,r:2, name:"Rigel"},
{x:206.7, y:564.4,r:2, name:"Wezen"},
{x:321.9, y:598.4,r:2, name:"Murzim"},
{x:464.1, y:601.8,r:2, name:"Alnitak"},
{x:469.5, y:606.9,r:2, name:"Alnilam"},
{x:1027.5, y:47.6,r:2, name:"Saik"},
{x:1110.3, y:57.8,r:2, name:"Sabik"},
{x:892.5, y:102,r:2, name:"Unukalhai"},
{x:843.9, y:190.4,r:2, name:"Alphecca"},
{x:795.3, y:183.6,r:2, name:"Izar"},
{x:584.7, y:221,r:2, name:"Zosma"},
{x:545.1, y:261.8,r:2, name:"Algieba"},
{x:739.5, y:285.6,r:2, name:"Mizar"},
{x:870.9, y:324.7,r:2, name:"Eltanin"},
{x:696.3, y:297.5,r:2, name:"Phecda"},
{x:683.7, y:321.3,r:2, name:"Merak"},
{x:699.9, y:702.1,r:2, name:"Menkar"},
{x:777.3, y:630.7,r:2, name:"Sheratan"},
{x:768.3, y:544,r:2, name:"Almach"},
{x:923.1, y:538.9,r:2, name:"Funda"},
{x:964.5, y:579.7,r:2, name:"Markab"},
{x:1049.1, y:513.4,r:2, name:"Enif"},
{x:959.1, y:423.3,r:2, name:"Aljanah"},
{x:849.3, y:418.2,r:2, name:"Alderamin"},
{x:933.9, y:399.5,r:2, name:"Sadr"},
{x:795.3, y:477.7,r:2, name:"Navi"},
{x:813.3, y:474.3,r:2, name:"Caph"},
{x:19.5, y:409.7,r:2, name:"Naos"},
{x:165.3, y:508.3,r:2, name:"Aludra"},
{x:377.7, y:681.7,r:2, name:"Arneb"},
{x:964.5, y:68,r:2, name:"Yed Prior"},
{x:1040.1, y:195.5,r:2, name:"Cebalrai"},
{x:906.9, y:198.9,r:2, name:"Kornephoros"},
{x:707.1, y:234.6,r:2, name:"Cor Caroli"},
{x:671.1, y:136,r:2, name:"Vindemiatrix"},
{x:815.1, y:319.6,r:2, name:"Athebyne"},
{x:861.9, y:316.2,r:2, name:"Rastaban"},
{x:1342.5, y:105.4,r:2, name:"Kaus Media"},
{x:1302.9, y:144.5,r:2, name:"Kaus Borealis"},
{x:1295.7, y:256.7,r:2, name:"Albaldah"},
{x:1072.5, y:360.4,r:2, name:"Tarazed"},
{x:1211.1, y:593.3,r:2, name:"Deneb Algedi"},
{x:901.5, y:629,r:2, name:"Algenib"},
{x:672.9, y:562.7,r:2, name:"Atik"},
{x:127.5, y:593.3,r:2, name:"Alcíone"},
{x:631.5, y:527,r:2, name:"Hassaleh"},
{x:779.1, y:481.1,r:2, name:"Ksora"},
{x:611.7, y:481.1,r:2, name:"Mahasim"},
{x:4047.9, y:625.6,r:2, name:"Hatysa"},
{x:483.9, y:652.8,r:2, name:"Cursa"},
{x:541.5, y:707.2,r:2, name:"Nihal"},
{x:743.1, y:139.4,r:2, name:"Muphrid"},
{x:563.1, y:493,r:2, name:"Tejat"},
{x:455.1, y:445.4,r:2, name:"Gomeisa"},
{x:221.1, y:768.4,r:2, name:"Phact"},
{x:933.9, y:523.6,r:2, name:"Matar"},
{x:1149.9, y:540.6,r:2, name:"Sadalmelik"},
{x:1133.7, y:533.8,r:2, name:"Sadalsuud"},
{x:1248.9, y:421.6,r:2, name:"Dabih|"},
{x:761.1, y:574.6,r:2, name:"Mizan"},
{x:653.1, y:489.6,r:2, name:"Almaaz"},
{x:563.1, y:535.5,r:2, name:"Tianguan"},
{x:545.1, y:472.6,r:2, name:"Mebsuta"},
{x:235.5, y:540.6,r:2, name:"Al Zara"},
{x:213.9, y:659.6,r:2, name:"Furud"},
{x:321.9, y:513.4,r:2, name:"Algenubi"},
{x:622.5, y:360.4,r:2, name:"Tania Australis"},
{x:239.1, y:732.7,r:2, name:"Seginus"},
{x:833.1, y:375.7,r:2, name:"Altais"},
{x:917.7, y:377.4,r:2, name:"Fawaris"},
{x:1043.7, y:316.2,r:2, name:"Okab"},
{x:1329.9, y:66.3,r:2, name:"Alnasl"},
{x:1428.9, y:47.6,r:2, name:"Hamalwarid"},
{x:779.1, y:338.3,r:2, name:"Pherkad"},
{x:442.5, y:333.2,r:2, name:"Minazal V"},
{x:545.1, y:773.5,r:2, name:"Zaurak"},
{x:167.1, y:756.5,r:2, name:"Wazn"},
{x:1425.3, y:727.6,r:2, name:"Aldhanab"},
{x:568.5, y:204,r:2, name:"Chertan"},
{x:321.9, y:749.7,r:2, name:"Edasich"},
{x:375.9, y:606.9,r:2, name:"Alhaud V"},
{x:316.5, y:654.5,r:2, name:"Megrez"},
{x:318.3, y:749.7,r:2, name:"Edasich"},
{x:788.1, y:421.6,r:2, name:"Errai"},
{x:820.5, y:411.4,r:2, name:"Alfir"},
{x:703.5, y:544,r:2, name:"Gorgonea Tertia"},
{x:548.7, y:501.5,r:2, name:"Propus"},
{x:555.9, y:622.2,r:2, name:"Tabit"},
{x:1.5, y:0,r:2, name:"Haedus"},
{x:204.9, y:440.3,r:2, name:"Azmidi"},
{x:1121.1, y:707.2,r:2, name:"Skat"},
{x:1144.5, y:394.4,r:2, name:"Almizan III"},
{x:969.9, y:447.1,r:2, name:"Fawaris III"},
{x:955.5, y:334.9,r:2, name:"Sulafat"},
{x:935.7, y:236.3,r:2, name:"Sarin"},
{x:1200.3, y:17,r:2, name:"Garafsa"},
{x:1337.1, y:198.9,r:2, name:"Namalsadirah I"},
{x:1365.9, y:231.2,r:2, name:"Namalsadirah II"},
{x:1391.1, y:243.1,r:2, name:"Ascella"},
{x:973.5, y:66.3,r:2, name:"Yed Posterior"},
{x:1153.5, y:285.6,r:2, name:"Al Thalimian Prior"},
{x:1112.1, y:326.4,r:2, name:"Almizan I"},
{x:982.5, y:357,r:2, name:"Albireo"},
{x:971.7, y:202.3,r:2, name:"Rasalgethi"},
{x:1000.5, y:578,r:2, name:"Homam"},
{x:757.5, y:578,r:2, name:"Metallah"},
{x:626.1, y:317.9,r:2, name:"Tania Borealis"},
{x:442.5, y:343.4,r:2, name:"Ashlesha"},
{x:699.9, y:45.9,r:2, name:"Heze"},
{x:613.5, y:64.6,r:2, name:"Porrima"},
{x:649.5, y:83.3,r:2, name:"Minelauva"},
{x:800.7, y:236.3,r:2, name:"Nekkar"},
{x:1135.5, y:161.5,r:2, name:"V Oph"},
{x:901.5, y:255,r:2, name:"n Her Cumulo Corazon y Daga"},
{x:924.9, y:54.4,r:2, name:"u Ser"},
{x:483.9, y:285.6,r:2, name:"Subra"},
{x:384.9, y:105.4,r:2, name:"V Hya"},
{x:555.9, y:102,r:2, name:"Zavijava"},
{x:327.3, y:683.4,r:2, name:"Kursi al Jabbar"},
{x:582.9, y:763.3,r:2, name:"Rana"},
{x:955.5, y:756.5,r:2, name:"Deneb Kaitos Shemali"},
{x:42.9, y:545.7,r:2, name:"c Pup"},
{x:1139.1, y:765,r:2, name:"c2 Aqr          "},
{x:1225.5, y:578,r:2, name:"Nashira"},
{x:343.5, y:136,r:2, name:"Potro"},
{x:1130.1, y:370.6,r:2, name:"Almizan II"},
{x:885.3, y:372.3,r:2, name:"Fawaris I"},
{x:887.1, y:153,r:2, name:"Nasak Shamiya II"},
{x:971.7, y:113.9,r:2, name:"Marfik"},
{x:825.9, y:387.6,r:2, name:"Tyl"},
{x:89.7, y:552.5,r:2, name:"Zaniah"},
{x:377.7, y:472.6,r:2, name:"Asellus Asutralis"},
{x:267.9, y:584.8,r:2, name:"Alula Asutralis"},
{x:370.5, y:630.7,r:2, name:"Alhaus VI"},
{x:363.3, y:681.7,r:2, name:"Gianfar"},
{x:289.5, y:792.2,r:2, name:"T Her"},
{x:289.5, y:579.7,r:2, name:"Praecipua"},
{x:1041.9, y:428.4,r:2, name:"Sualocin"},
{x:1200.3, y:464.1,r:2, name:"Albali"},
{x:1086.9, y:481.1,r:2, name:"Kitalpha"},
{x:1079.7, y:578,r:2, name:"Sadachbia"},
{x:1104.9, y:775.2,r:2, name:"b1 Aqr"},
{x:804.3, y:654.5,r:2, name:"Alpherg"},
{x:512.7, y:680,r:2, name:"v Eri"},
{x:474.9, y:736.1,r:2, name:"Sceptrum"},
{x:674.7, y:547.4,r:2, name:"Menkib"},
{x:764.7, y:445.4,r:2, name:"50 Cas"},
{x:375.9, y:367.2,r:2, name:"C Hya"},
{x:669.3, y:780.3,r:2, name:"Azha"},
{x:330.9, y:666.4,r:2, name:"Arsh Al Jauzah"},
{x:239.1, y:559.3,r:2, name:"Udra"},
{x:66.3, y:15.3,r:2, name:"q Vel"},
{x:770.1, y:272,r:2, name:"Asellus Primus"},
{x:384.9, y:78.2,r:2, name:"Alkes"},
{x:548.7, y:355.3,r:2, name:"Zubanah"},
{x:764.7, y:5.1,r:2, name:"Syrma"},
{x:872.7, y:159.8,r:2, name:"Gudja"},
{x:915.9, y:343.4,r:2, name:"13 Lyr"},
{x:1034.7, y:309.4,r:2, name:"Deneb al Okab Borealis"},
{x:545.1, y:457.3,r:2, name:"Mekbuda"},
{x:548.7, y:722.5,r:2, name:"Beid"},
{x:707.1, y:729.3,r:2, name:"Al Kaff al Jidhmah III"},
{x:1011.3, y:470.9,r:2, name:"1 Peg"},
{x:1257.9, y:513.4,r:2, name:"8 Cap"},
{x:1068.9, y:4233,r:2, name:"Aldulfin"},
{x:554.1, y:523.6,r:2, name:"54 ori"},
{x:658.5, y:671.5,r:2, name:"Omicron Tauri"},
{x:622.5, y:634.1,r:2, name:"λTau"},
{x:656.7, y:663,r:2, name:"ξ Tau"},
{x:406.5, y:572.9,r:2, name:"γ Mon"},
{x:365.1, y:751.4,r:2, name:"Épsilon Leporis"},
{x:212.1, y:657.9,r:2, name:"Furud"},
{x:149.1, y:656.2,r:2, name:"Kappa"},
{x:181.5, y:739.5,r:2, name:"Gamma Columbae"},
{x:341.7, y:527,r:2, name:"Theta Canis Majoris"},
{x:199.5, y:521.9,r:2, name:"Omega Canis Majoris"},
{x:294.9, y:578,r:2, name:"Nu² Canis Majoris"},
{x:831.3, y:683.4,r:2, name:"PECES"},
{x:935.7, y:656.2,r:2, name:"Piscio Omega"},
{x:1000.5, y:637.5,r:2, name:"Piscium gamma"},
{x:996.9, y:656.2,r:2, name:"Kappa Piscium"},
{x:973.5, y:664.7,r:2, name:"Lambda Piscium"},
{x:964.5, y:654.5,r:2, name:"Iota Piscium"},
{x:973.5, y:632.4,r:2, name:"Theta Piscium"},
{x:797.1, y:705.5,r:2, name:"Xi Piscium"},
{x:802.5, y:654.5,r:2, name:"Kullat Nunu"},
{x:782.7, y:719.1,r:2, name:"Xi Piscium"},
{x:825.9, y:606.9,r:2, name:"Phi Piscium"},
{x:818.7, y:578,r:2, name:"Sigma Piscium"},
{x:809.7, y:598.4,r:2, name:"Upsilon Piscium"},
{x:840.3, y:576.3,r:2, name:"Delta Andromedae"},
{x:939.3, y:489.6,r:2, name:"Pi Pegasi"},
{x:975.3, y:479.4,r:2, name:"Jih"},
{x:966.3, y:503.2,r:2, name:"Iota Pegasi"},
{x:1061.7, y:605.2,r:2, name:"Eta Aquarii"},
{x:1178.7, y:617.1,r:2, name:"Iota Aquarii"},
{x:1119.3, y:685.1,r:2, name:"Tau Aquarii"},
{x:1121.1, y:763.3,r:2, name:"c² Acuarios"},
{x:1106.7, y:775.2,r:2, name:"b¹ Acuario"},
{x:1056.3, y:697,r:2, name:"Psi¹ Aquarii"},
{x:1059.9, y:605.2,r:2, name:"Eta Aquarii"},
{x:1238.1, y:756.5,r:2, name:"Épsilon Piscis Austrini"},
{x:1351.5, y:731,r:2, name:"Tau Piscis Austrini"},
{x:1362.3, y:663,r:2, name:"Theta Piscis Austrini"},
{x:1315.5, y:680,r:2, name:"Eta Piscis Austrini"},
{x:1414.5, y:595,r:2, name:"Epsilon Microscopii"},
{x:1432.5, y:544,r:2, name:"Microscopios gamma"},
{x:1459.5, y:518.5,r:2, name:"Alpha Microscopii"},
{x:1294.494, y:0,r:2, name:"Zeta Capricorni"},
{x:1243.5, y:544,r:2, name:"Iota Capricorni"},
{x:1259.7, y:513.4,r:2, name:"Theta Capricorni"},
{x:1351.5, y:487.9,r:2, name:"Psi Capricorni"},
{x:1369.5, y:506.6,r:2, name:"Omega Capricorni"},
{x:917.7, y:481.1,r:2, name:"1 Lacertae"},
{x:892.5, y:481.1,r:2, name:"6 Lacertae"},
{x:879.9, y:469.2,r:2, name:"5 Lacertae"},
{x:852.9, y:442,r:2, name:"Zeta Cephei"},
{x:822.3, y:440.3,r:2, name:"Iota Cephei"},
{x:730.5, y:343.4,r:2, name:"CS Camelopardalis"},
{x:714.3, y:445.4,r:2, name:"Alpha Camelopardalis"},
{x:411.9, y:477.7,r:2, name:"Épsilon Monocerotis A"},
{x:339.9, y:443.7,r:2, name:"Alpha Monocerotis"},
{x:393.9, y:552.5,r:2, name:"Gamma Monocerotis"},
{x:69.9, y:544,r:2, name:"Tureis"},
{x:19.5, y:688.5,r:2, name:"Nu Puppis"},
{x:428.1, y:302.6,r:2, name:"Theta Hydrae"},
{x:370.5, y:183.6,r:2, name:"Lambda Hydrae"},
{x:357.9, y:141.1,r:2, name:"Mu Hydrae"},
{x:386.7, y:105.4,r:2, name:"Nu Hydrae"},
{x:487.5, y:76.5,r:2, name:"Theta Crateris"},
{x:249.9, y:64.6,r:2, name:"Alpha Antliae"},
{x:179.7, y:297.5,r:2, name:"Gamma Pyxidis"},
{x:78.9, y:314.5,r:2, name:"Beta Pyxidis"},
{x:442.5, y:226.1,r:2, name:"Alpha Sextantis"},
{x:460.5, y:193.8,r:2, name:"Beta Sextantis"},
{x:816.9, y:56.61,r:2, name:"109 Virginis"},
{x:1149.9, y:100.3,r:2, name:"Xi Serpentis"},
{x:1113.9, y:236.3,r:2, name:"Eta Serpentis"},
{x:1270.5, y:290.7,r:2, name:"Rho¹ Sagittarii"},
{x:1288.5, y:229.5,r:2, name:"Xi² Sagittarii"}
    ]
};

function circleCollision (c1, c2) {
    var a = c1.r + c2.r,
        x = c1.x - c2.x,
        y = c1.y - c2.y;

    if ( a > Math.sqrt( (x*x) + (y*y) ) ) return true;
    else return false;
}

function prepCanvas () {
    var res = window.devicePixelRatio || 1,
        scale = 1 / res;
    data.canvas = document.getElementById('dots');
    data.ctx = data.canvas.getContext('2d');
    
    data.canvas.width = window.innerWidth * res;
    data.canvas.height = window.innerHeight * res;
    data.canvas.style.width = window.innerWidth + 'px';
    data.canvas.style.height = window.innerHeight + 'px';
    
    data.ctx.scale(res, res);
    
    data.canvas.addEventListener('mousedown', function (e) {
        checkForDot(e);
    });
}

function drawDots () {
    var i = 0;
    for (; i < data.dots.length; i++) {
        var d = data.dots[i];
        data.ctx.beginPath();
        /*  aqui tenia r+0.7 antes     r+0.9 antes, luego tenia r 1*/
        data.ctx.arc(d.x, d.y, d.r+1.1, 0, 2*Math.PI);
        data.ctx.fillStyle = '#FFF';
        data.ctx.fill();
        data.ctx.closePath();
      
        data.ctx.fillStyle = "#666666";
       data.ctx.font = "12px Arial";
       data.ctx.fillText(d.name, d.x, d.y);
      
    }
}
function drawLine (toDot) {
    data.ctx.beginPath();
    data.ctx.moveTo(data.clickedDot.x, data.clickedDot.y);
    data.ctx.lineTo(toDot.x, toDot.y);
    data.ctx.lineWidth = 1.5;
    data.ctx.strokeStyle = '#0FF';
    data.ctx.stroke();
    data.ctx.closePath();
}

function checkForDot (e) {
    var i = 0, col = null;
    for (; i < data.dots.length; i++) {
        var d = data.dots[i],
            c1 = {x: d.x, y: d.y, r: 11},
            c2 = {x: e.pageX, y: e.pageY, r: 11};
        if (circleCollision(c1, c2)) { data.numdots=data.numdots+1;  col = d; 
            
            console.log('Clicks '+data.numdots); 
           

            largo=data.camino.push( {px:d.x , py:d.y });
           // largo=data.caminoy.push(d.y);

     

          console.log("Datos del camino");

        /*
            for(let i = 0; i < data.camino.length; i++){ 
               // console.log(data.caminox[i] + ' : ' + data.caminoy[i]    );
               console.log(data.camino  );
            }
        */
            Globalquerystring1 = parametri(data.camino)

            console.log(Globalquerystring1)

   
        }
    }
    if (col !== null) {
        if (data.clickedDot !== null) drawLine(col);
        data.clickedDot = col;
    } else data.clickedDot = null;
}




function redirect (url) {
    var ua        = navigator.userAgent.toLowerCase(),
        isIE      = ua.indexOf('msie') !== -1,
        version   = parseInt(ua.substr(4, 2), 10);

    // Internet Explorer 8 and lower
    if (isIE && version < 9) {
        var link = document.createElement('a');
        link.href = url;
        document.body.appendChild(link);
        link.click();
    }

    // All other browsers can use the standard window.location.href (they don't lose HTTP_REFERER like Internet Explorer 8 & lower does)
    else { 
        window.location.href = url; 
    }
}



function pasaparam() {
  
  //  alert('Nos llevamos el caminito');

  //  alert(Globalquerystring1);

  
  var query = new URLSearchParams({
  estrellas : data.numdots, 
  camino : Globalquerystring1
 });
 
// (B) CONVERT TO STRING, APPEND TO URL
var url = "./constelacion.html?" + query.toString();
console.log(url);
    

  
  console.log("veo este numerito"+data.numdots);
  
  redirect(url); 
  
}

 

function parametri(object)
{
    var parameters = [];
    for (var property in object) {


            //alert(property + "=" + object[property].px);

               if (object.hasOwnProperty(property)) {
            parameters.push(encodeURI(property + 'x' + object[property].px +   'y' +  object[property].py ));
        }
    }

    return parameters.join('&');
}


prepCanvas();
drawDots();













