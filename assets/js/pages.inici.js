$(document).ready(function(){if(jQuery().quicksand){}
if(jQuery().slides){$('#slides').slides({preload:true,preloadImage:'loading.gif',play:5000,pause:4500,hoverPause:true});}
if(jQuery().mosaic){$('.circle').mosaic({opacity:0.8});$('.bar2').mosaic({animation:'slide'});}
if(jQuery().tweet){$(".tweet").tweet({username:"lawebeixerida",join_text:"auto",count:5,retweets:false,loading_text:"escoltant piulades..."});$(".tweet_mario").tweet({username:"ewiggin86",join_text:"auto",avatar_size:null,count:1,retweets:false,loading_text:"escoltant piulades..."});$(".tweet_miriam").tweet({username:"womiriam",join_text:"auto",avatar_size:null,count:1,retweets:false,loading_text:"escoltant piulades..."});$(".tweet_david").tweet({username:"DaWeIII",join_text:"auto",avatar_size:null,count:1,retweets:false,loading_text:"escoltant piulades..."});}});