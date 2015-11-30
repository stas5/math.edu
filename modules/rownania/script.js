var ukryte;
$(function() {
    $('#f2').hide();
    ukryte=true;
});

var canvas;
var ctx;
var timer;
var skala;
function rownania_start() {
    canvas = document.getElementById('example');
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
    }
}

function rownania_clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function rownania_reset() {
    $(function(){
        $('#f2').hide();
        $('#f1').hide();
        ukryte=true;
    });            
    canvas.width = canvas.width;
    clearInterval(timer);
}

function rownania_wykres() {
    dx=6;
    skala=canvas.width/dx;
    xs=Math.round(canvas.width / 2);//wspołrzedne środka ekranu
    ys=Math.round(canvas.height / 2);
    xw=-3;//wartosc rzeczywista argumentu
    x=Math.round(xs+xw*skala);
    y=Math.round(ys-Math.sin(xw)*skala);
    ctx.moveTo(x,y);
    rownania_clear();
    ctx.strokeStyle="red";
    while(xw<3) {
        xw+=1/skala;
        x=Math.round(xs+xw*skala);
        y=Math.round(ys-Math.sin(xw)*skala);
        ctx.lineTo(x,y);
        ctx.moveTo(x,y);
    }
}

var fontSize = 10;
var step = 10;
function rownania_Animate() {
    var r = Math.floor(Math.random() * 255) + 70;
    var g = Math.floor(Math.random() * 255) + 70;
    var b = Math.floor(Math.random() * 255) + 70;
    var s = 'rgba(' + r + ',' + g + ',' + b + ', 1.0)';
    ctx.fillStyle = s;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.textAlign = "center";
    ctx.fillStyle = "black";

    if (fontSize == 10)
        step = 10;
    if (fontSize == 70)
        step = -10;

    fontSize += step;
    ctx.font = fontSize + "px Calibri";
    ctx.fillText("CANVAS", canvas.width / 2, canvas.height / 2 );
}

function rownania_jednostki(xsr,ysr,dxc,dyc,l,j) {
    ctx.moveTo(0,ysr );
    ctx.lineTo(dxc,ysr);
    ctx.moveTo(xsr ,0);
    ctx.lineTo(xsr,dyc);
    i=xsr+l;k=1;
    ctx.moveTo(dxc-5,ysr-5);
    ctx.lineTo(dxc,ysr);
    ctx.lineTo(dxc-5,ysr+5);//prawa strzałka
    ctx.fillText("x",dxc-10,ysr-12);
    ctx.moveTo(xsr-5,5);
    ctx.lineTo(xsr,0);
    ctx.lineTo(xsr+5,5);//górna strzałka
    ctx.fillText("y",xsr-10,12);
    while(i<dxc){
        ctx.moveTo(i,ysr-3);
        ctx.lineTo(i,ysr+3);
        ctx.fillText(k,i-3,ysr+12);
        k++;
        i+=l;
    }

    i=xsr-l;k=1;
    while(i>0){
        ctx.moveTo(i,ysr-3);
        ctx.lineTo(i,ysr+3);
        ctx.fillText(-k,i-3,ysr+12);
        k++;
        i-=l;
    }

    i=ysr+j;k=1;
    while(i<dyc){
        ctx.moveTo(xsr-3,i);
        ctx.lineTo(xsr+3,i);
        ctx.fillText(-k,xsr+7,i-3);
        k++;
        i+=j;
    }

    i=ysr-j;k=1;
    while(i>0){
        ctx.moveTo(xsr-3,i);
        ctx.lineTo(xsr+3,i);
        ctx.fillText(k,xsr+7,i-3);
        k++;
        i-=j;
    }
}

function rownania_calcFuncSet() {
    rownania_reset();
    $(function(){
        $('#f2').hide();
        $('#f1').show();
    });
    rownania_clear();
    var f=document.forms.f1;
    a=f.a1.value; b=f.b1.value; c=f.c1.value;
    d=f.a2.value; e=f.b2.value; g=f.c2.value;
    w=a*e-b*d;
    wx=c*e-b*g;
    wy=a*g-c*d;
    if (w!=0){
        x=wx/w;
        y=wy/w;
        f.x.value=x;
        f.y.value=y;
        dxc=canvas.width/2;dyc=canvas.height/2;
        if (Math.abs(y)<Math.abs((dyc/dxc)*x))
            skala=Math.round(dxc/(Math.abs(x)+2));
        else
            skala=Math.round(dyc/(Math.abs(y)+2));
    }
    else if (wx!=0 ||wy!=0) {
        f.x.value="proste równoległe";
        f.y.value="proste równoległe";
    }
    else {
        f.x.value="proste identyczne";
        f.y.value="proste identyczne";
    }

    //rownania_reset();
    xl=0;
    xs=-dxc/skala;
    yl=dyc-Math.round(((-a/b)*xs+(c/b))*skala);
    xp=2*dxc;
    xs=-xs;
    yp=dyc-Math.round(((-a/b)*xs+(c/b))*skala);
    ctx.moveTo(xl,yl);
    ctx.lineTo(xp,yp)

    xs=-dxc/skala;
    yl=dyc-Math.round(((-d/e)*xs+(g/e))*skala);
    xp=2*dxc;
    xs=-xs;
    yp=dyc-Math.round(((-d/e)*xs+(g/e))*skala);
    ctx.moveTo(xl,yl);
    ctx.lineTo(xp,yp);
    rownania_jednostki(dxc,dyc,2*dxc,2*dyc,skala,skala);
    // f.x.value=yp;
    // f.y.value=yl;
    ctx.stroke();
}

function fkw(x,a,b,c){
    return ((a*x*x)+(b*x)+c);
}

function rownania_calcQuadFunc(){
    rownania_reset();
    $(function(){
        $('#f1').hide();
        $('#f2').show();
    });
    rownania_clear();

    dxc=canvas.width;
    dyc=canvas.height;
    x=0,ymin=0,ymax=0,y=0,a=1,b=2,c=2;
    var f=document.forms.f2;
    a=f.a1.value*1; b=f.b1.value*1; c=f.c1.value*1;
    xw=-b/(2*a);
    xmin=xw-4;
    xmax=xw+4;
    dx=(xmax-xmin)/dxc,sky=0;
    yw=fkw(xw,a,b,c); 
    yrmin=fkw(xmin,a,b,c);
    yrmax=fkw(xmax,a,b,c);
    yrmin>yw?ymax=yrmin:ymax=yw;
    yrmax>ymax?ymax=yrmax:ymax=ymax;
    yrmin<yw?ymin=yrmin:ymin=yw;
    yrmax<ymin?ymin=yrmax:ymin=ymin;
    sky=dyc/(ymax-ymin);
    skx=dxc/(xmax-xmin);
    // rownania_reset();
    // Powyżej obliczamy wartosc maksymalna i minimalna funkcji kwadratowej

    // Odpowiednio ymax i ymin na tej podstawie obliczamy skale osi OY sky
    smax="ymax=";
    smax+=ymax;
    ctx.fillText(smax,40,40);
    ctx.fillText(yw,20,20);

    // Canvas->Pen->Color=RGB(255,0,0);//ustalenie koloru
    ysr=Math.round(ymax*sky);
    xsr=Math.round(-xmin/dx);
    delta=(b*b)-(4*a*c);
    if (delta>=0) {
        pd=Math.sqrt(delta);
        f.x1.value=(-b-pd)/(2*a);
        f.x2.value=(-b+pd)/(2*a);
    }
    else {
        f.x2.value="Brak rozwiązań";
        f.x1.value="Brak rozwiązań";
    }
    rownania_jednostki(xsr,ysr,dxc,dyc,skx,sky);
    // powyżej narysowano osie ukladu
    ctx.moveTo(0,Math.round(ymax*sky-yrmin*sky));
    x=xmin;i=0;
    for(i=0; i<=dxc; i++) {
        yw=Math.round(ymax*sky- fkw(x,a,b,c)*sky);
        ctx.lineTo(i,yw);
        x+=dx;
    } // powyzsza petla rysuje wykres funkcji
    ctx.stroke();
}