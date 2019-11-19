var i, j;
var square = [[],[],[]];

square[0][0] = $("#square1")[0];
square[0][1] = $("#square2")[0];
square[0][2] = $("#square3")[0];
square[1][0] = $("#square4")[0];
square[1][1] = $("#square5")[0];
square[1][2] = $("#square6")[0];
square[2][0] = $("#square7")[0];
square[2][1] = $("#square8")[0];
square[2][2] = $("#square9")[0];


$(document).ready(function () {
    $("#square1").click(function(){
        ChangeColor(0,0);
    });

    $("#square2").click(function(){
        ChangeColor(0,1);
    });

    $("#square3").click(function(){
        ChangeColor(0,2);
    });

    
    $("#square4").click(function(){
        ChangeColor(1,0);
    });

    
    $("#square5").click(function(){
        ChangeColor(1,1);
    });

    
    $("#square6").click(function(){
        ChangeColor(1,2);
    });

    
    $("#square7").click(function(){
        ChangeColor(2,0);
    });

    
    $("#square8").click(function(){
        ChangeColor(2,1);
    });

    $("#square9").click(function(){
        ChangeColor(2,2);
    });
});


function ChangeColor(i,j){
    res0 = (i - 1 < 0) ? i + 1 : i - 1;
    res1 = (i + 1 > 2) ? i - 1 : i + 1;
    res2 = (j - 1 < 0) ? j + 1 : j - 1;
    res3 = (j + 1 > 2) ? j - 1 : j + 1;
    var x = [];
    var y;


    x[0] = square[i][j].id;
    x[1] = square[res1][j].id;
    x[2] = square[res0][j].id;
    x[3] = square[i][res3].id;
    x[4] = square[i][res2].id;
     x = unique(x);

   for(y=0; y<x.length; y++){
    if(document.getElementById(x[y]).style.backgroundColor != "red"){
         document.getElementById(x[y]).style.backgroundColor = "red";
            
     }
     else{
         document.getElementById(x[y]).style.backgroundColor = "#3975f7";
        
    }
   
 }
  
    function unique(list) {
        var result = [];
        $.each(list, function(i, e) {
          if ($.inArray(e, result) == -1) 
          result.push(e);
        });
        return result;
      }


}