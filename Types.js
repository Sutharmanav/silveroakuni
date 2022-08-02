// Local
document.write("Local");
document.write("<br>");
document.write("<br>"+Number("13.004400"));
document.write("<br>"+Number(" "));
document.write("<br>"+Number(""));
document.write("<br>"+Number("100 + 43"));
document.write("<hr>");

// Globle
document.write("Globle");
document.write("<br>");
let num = 500;
let s = String (300);
document.write("<br>"+String(100 + 11));
document.write("<br>"+Number(+num+100+50));
document.write("<br>"+String(s+111));
document.write("<hr>");

// .toString
document.write(".toString");
document.write("<br>");
let NN = 3.14;
document.write("<br>"+NN.toString());
document.write("<br>"+String(NN+NN.toString()));
document.write("<hr>");

//.toExponential
document.write(".toExponential");
document.write("<br>");
let numexp = 5.5555;
document.write("<br>"+numexp.toExponential(1));
document.write("<br>"+numexp.toExponential(2));
document.write("<br>"+numexp.toExponential(3));
document.write("<br>"+numexp.toExponential(4));
document.write("<hr>");

//.toFixed
document.write(".toFixed");
document.write("<br>");
let numfix = 5.1111;
document.write("<br>"+numfix.toFixed());
document.write("<br>"+numfix.toFixed(2));
document.write("<br>"+numfix.toFixed(4));
document.write("<br>"+numfix.toFixed(6));
document.write("<hr>");

// .toPrecision
document.write(".toPrecision");
document.write("<br>");
let numprec = 46.1666;
document.write("<br>"+numprec.toPrecision());
document.write("<br>"+numprec.toPrecision(2));
document.write("<br>"+numprec.toPrecision(4));
document.write("<br>"+numprec.toPrecision(6));
document.write("<hr>");

document.write("Number Value");
document.write("<br>");
document.write("<br>"+Number(true));
document.write("<br>"+Number(false));
document.write("<br/>" + Number("44"));
document.write("<br/>" + Number(" 44"));
document.write("<br/>" + Number("44 "));
document.write("<br/>" + Number(" 44 "));
document.write("<br/>" + Number("44.44"));
document.write("<br/>AAAA:" + Number("44.44"));
document.write("<br/>" + Number("44 44"));
document.write("<br/>" + Number("ABC"));
document.write("<br/>" + Number(new Date("2003-10-28")));
document.write("<hr>");
        
document.write("MIN_VALUE, MAX_VALUE, POSITIVE_INFINITY, NEGATIVE_INFINITY");
document.write("<br>");
document.write("<br/>" + Number.POSITIVE_INFINITY);
document.write("<br/>" + Number.NEGATIVE_INFINITY);
document.write("<hr>");

document.write("parseInt");
document.write("<br>");
document.write("<br/>" + parseInt("-20"));
document.write("<br/>" + parseInt("-50.33"));
document.write("<br/>" + parseInt("70"));
document.write("<br/>" + parseInt("10.33"));
document.write("<br/>" + parseInt("40 20 30"));
document.write("<br/>" + parseInt("years is:100"));
document.write("<br/>" + parseInt("100 years"));
document.write("<hr>");

document.write("parseFloat");
document.write("<br>");
document.write("<br/>" + parseFloat("-20"));
document.write("<br/>" + parseFloat("-50.33"));
document.write("<br/>" + parseFloat("70"));
document.write("<br/>" + parseFloat("10.33"));
document.write("<br/>" + parseFloat("40 20 30"));
document.write("<br/>" + parseFloat("years is 100"));
document.write("<br/>" + parseFloat("100 years"));
document.write("<hr>");

document.write("Date & Time");
document.write("<br>");
document.write("<br/>" + new Date());
document.write("<br/>" + new Date("2004-01-01"));
document.write("<br/>" + new Date(2011, 11, 11, 11, 11, 11, 11));
document.write("<br/>" + new Date("january, 2004 12:00:00"));
document.write("<hr>");

document.write("d.to Value");
document.write("<br>");
var d = new Date();
document.write("<br/>" + d.toString());
document.write("<br/>" + d.toUTCString());
document.write("<br/>" + d.toDateString());
document.write("<br/>" + d.toISOString());
document.write("<hr>");

document.write("d.get Value");
document.write("<br>");
document.write("<br/>" + d.getTime());
document.write("<br/>" + d.getDate());
document.write("<br/>" + d.getDay());
document.write("<br/>" + d.getFullYear());
document.write("<br/>" + d.getHours());
document.write("<br/>" + d.getMonth());
document.write("<br/>" + d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear());
document.write("<hr>");



