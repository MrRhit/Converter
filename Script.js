var km =
    document.getElementById('km');

var meter =
    document.getElementById('meter');

km.addEventListener('input', function () {

    let k = this.value;
    let m = k * 1000;
    meter.value = m;
});

meter.addEventListener('input', function () {
    let m = this.value;
    let k = m / 1000;
    if (!Number.isInteger(k)) {
        k = k.toFixed(3);
    };
    km.value = k;
});

// Meter and Centimeter
var deter =
    document.getElementById('deter');

var cm =
    document.getElementById('cm');

deter.addEventListener('input', function () {

    let d = this.value;
    let c = d * 100;
    cm.value = c;
});

cm.addEventListener('input', function () {
    let c = this.value;
    let d = c / 100;
    if (!Number.isInteger(d)) {
        d = d.toFixed(2);
    };
    deter.value = d;
});

//   Currency
// rupees to paise
var rupee =
    document.getElementById('rs');

var paise =
    document.getElementById('paise');

rupee.addEventListener('input', function () {
    let r = this.value;
    let p = r * 100;
    paise.value = p;
});

paise.addEventListener('input', function () {
    let p = this.value;
    let r = p / 100;
    if (!Number.isInteger(r)) {
        r = r.toFixed(2);
    }
    rupee.value = r;
});

// Pound to rupees
var rupee01 =
    document.getElementById('prs');
var pound =
    document.getElementById('pound');

pound.addEventListener('input', function () {
    let p = this.value;
    let r = p * 97.16;
    rupee01.value = r;
});

rupee01.addEventListener('input', function () {
    let r = this.value;
    let p = r / 97.16;
    if (!Number.isInteger(p)) {
        p = p.toFixed(2);
    }
    pound.value = p;
});


// Euro to rupee
var rupee1 =
    document.getElementById('ers');
var euro =
    document.getElementById('euro');
euro.addEventListener('input', function () {
    let e = this.value;
    let r = e * 81.51;
    rupee1.value = r;
});

rupee1.addEventListener('input', function () {
    let r = this.value;
    let e = r / 81.51;
    if (!Number.isInteger(e)) {
        e = e.toFixed(2);
    }
    euro.value = e;
});
  
// Dollar to Rupees
var rupee2 =
    document.getElementById('drs');
var dollar =
    document.getElementById('dollar');
dollar.addEventListener('input', function () {
    let d = this.value;
    let r = d * 83.81;
    rupee2.value = r;
});

rupee2.addEventListener('input', function () {
    let r = this.value;
    let d = r / 79.81;
    if (!Number.isInteger(d)) {
        d = d.toFixed(2);
    }
    dollar.value = d;
});