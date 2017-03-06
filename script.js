        
    //on click of mobile-menu icon-MENU  
    function myFunction() {
       var x = document.getElementById("myTopnav");
       if (x.className === "topnav") {
           x.className += " responsive";
       } else {
           x.className = "topnav";
       }
    }
$(document).ready(function() {
    
    
    
    
    var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                     ];
    var speed = "slow";
    var imgNum = $('.center').find('img').length;
    var rmax = 252; //right margin-gallery
    var lmax = 0;   //left margin-gallery
    var itemWidth = 60;
    //set right-box height same as lefts
    //non needed var r_box = $('.contaner #zright');
    //non needed r_box.height($('#zleft').height());
    var d = new Date();
    var strDate = d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
    
    
   
     
    $('.hooover').hide();
    $('span#data').text(strDate);
     
    
    //TO DO: mouseover .hoover toogles fade... it shouldn't
    
    //on mouseover fadeIn #desc;
    //apllying spped value makes it bugging ;_;
    $('#big-img').mouseover(function(e){
        $('.hooover').show(); 
    });
     
    $('.hooover').mouseover(function(e){
        $('.hooover').show(); 
    });
     $('.hooover').mouseout(function(e){
        $('.hooover').hide(); 
    });
    
    $('#zleft').mouseover(function(e){
       // $('.hooover').hide(); 
    });
    
    //on mouseout fadeOut #desc
     $('#big-img').mouseout(function(e){
        $('.hooover').hide();   
    });  
    
    
    
    
    
    
    //swap the big-img
    $('.center .internal img').click(function(e) {  
    var idd=$(this).attr("id");
    var desc=$(this).attr("alt");
    var show=$(this).attr("src");
    var temp="b"+show;
    $('#big-img').attr("src",temp);
    $('#pmet').text(desc);
    $('.internal #'+idd).css("opacity","1");
    });
    

    //right-btn click funct    
    $('#right-button').click(function(e) {
        $('#left-button').attr("style","color:white");
        if (($('div.center#content').scrollLeft()) < rmax) {
             
            $('div.center#content').animate({
                scrollLeft: '+=128px'
                }, speed);
            
        }else{
                $('#right-button').attr("style","color:black");
        }
        
    });
        
    //left-btn click funct
    $('#left-button').click(function(e) {
          $('#right-button').attr("style","color:white");
          if (($('div.center#content').scrollLeft()) > lmax) {
              $('div.center#content').animate({
                  scrollLeft: '-=128px'
              }, speed);
          }else{
               $('#left-button').attr("style","color:black");
          } 
    

     });
});
