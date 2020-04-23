var x,y,result;

x = 0;
y = 1;
result = y;

for(var i = 1; i < 100; i++) {
    document.write(result + "<br>");
    result = x + y;
    x = y; 
    y = result;
}
