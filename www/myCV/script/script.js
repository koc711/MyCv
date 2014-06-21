$(document).ready(function() {
$(".father").hide();
$(".fatherW").hide();
$(".fatherT").hide();
$('.sunW').hide();

$(".grannyT").hover(function(eventObject) {
   $('.fatherT').show();
   
}, function(){
   $('.fatherT').hide(); 
});

$(".grannyW").hover(function() {
   $('.fatherW').show();
}, function(){
   $('.fatherW').hide(); 
 
});

$(".fatherW").hover(function() {    
   $('.sunW').show();
}, function(){
   $('.sunW').hide(); 
   
   
   

});














});//конец ready