for(i=20; i<100; i=i+5) {
      document.write ("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ i + "°F"+ " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
      document.write ((i - 32) * 5/9 + "°C"+"<br>");
    }
    for(t=100; t<=120; t=t+5) {
      document.write (" &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ t + "°F" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
      document.write ((t - 32) * 5/9 + "°C" + "<br>");
    }