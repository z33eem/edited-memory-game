/*
 * made by Dalia Adel Saber
 */
var openCards =[];
var MoveCounter =0;
var ratingStars =$(".fa-star");
var clickes =0;
CardsList=CardsImplement();
var gameEnded=false;

var interval;
var timer=document.querySelector(".timer");
//var timer=$("#timer");
timer.innerHTML="0 mins:0 secs";

 //dd(typeof CardsList,'i am cardsList here','c');
 var shuffled=shuffle(CardsList);
 //dd(shuffledOne,'shuffledOne','c');
DisplayCards ();
var click=0;
 //ddS((".card"),'this cards to click event','c');
 $('.card').on('click',function(){
click++;
if (click==1) {startTimer();
    //code
}
fireMatched(this);
 });
 function CardsImplement(){
     var Cards = [];
    Cards = document.getElementsByClassName("card");
 // dd(domCards,"this is cards exist in the dom right now","c");
  return  transformer (Cards);
 };
 
function transformer(obj) {
    var transformed =[];
    for (var key in obj){
       if( obj.hasOwnProperty(key)){
        transformed.push(obj[key].innerHTML);
       }
    }
   return transformed; 
}



 function DisplayCards() {
    var list=CreateCards();
    replacer(list);
    
 };
 function replacer(list) {
      document.getElementById("deck").innerHTML = list.innerHTML;
 };
 function CreateCards() {
    var list=document.createElement("ul");
    for (var x=0; x < shuffled.length;x++){
        var li = document.createElement("li");
        li.innerHTML=shuffled[x];
        li.classList.add("card");
        list.appendChild(li);
        
    }
    return list;
 };
 
 
 
 
 
 function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
     while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
     }
return array;}
 
 
 
function fireMatched(card) {
    if (isClicked(card)) {
        return;
        
    }
      Displayicons(card);
        Markedopen(card);
    
};
    function isClicked(card) {
        if ($(card).hasClass("show") || $(card).hasClass("open")){
            return true;
            //code
       
        }
        return false;
    }
  

 function Displayicons(card){
    $(card).addClass("show open");
    //dd(card,'i am card to display','c')
    
 };
 
 function incmentMoves(card){
    if (gameEnded || $(card).hasClass("match")|| $(card).is($(openCards[0])) ) {
        return false;
    }
    
   MoveCounter ++;
   Rating(MoveCounter);
   $('.moves').text(MoveCounter);
 };
  function IsMatch (openCards){
    
    let case1 =openCards[0].innerHTML!=openCards[1].innerHTML;
    let case2 =$(openCards[0]).is($(openCards[1]));
    if (case1||case2) {
        return false;
    }else
    {
    return true;}
 };
 function matched (openCards){
    closeOpenCards(openCards);
    markAsMatched(openCards);
    openCards =[];
 };
 function markAsMatched (openCards){
    for (let i =openCards.length-1;i>=0;i--){
        
        // ***********************
        // ***********************
        // The Errors "Sentax Error"
        $(openCards[i]).addClass("match");
    }
    
 };
 function noMatched(openCards){

    
    var currentCards =openCards;
    Animate(currentCards);
    
    setTimeout(function(){
         hideicons(currentCards);
        
        },1000);
     
     
        // ***********************
        // ***********************
        // The Errors "Sentax Error"
     openCards =[];
    
 };
 function Rating(moves) {
    let score=3;
    if (moves<=15) {
        ratingStars.eq(3).removeClass('fa-star').addClass('fa-star-o');
        score=3;
    }else if (moves>15&& move <=22) {
        ratingStars.eq(2).removeClass('fa-star').addClass('fa-star-o');
        score=2;
    }
    else if (moves>22) {
        ratingStars.eq(1).removeClass('fa-star').addClass('fa-star-o');
        score =1;
    }
    return score;
 }
 
  function Animate(openCards){
    
    for (var i= openCards.length-1;i>=0;i--){
        
        // ***********************
        // ***********************
        // The Errors "Sentax Error"
        $(openCards[i]).addClass("unmatched");
    }
 }
  function hideicons(openCards){
  for(var i=openCards.length-1;i>=0;i--){
    $(openCards[i]).removeClass("open Show unMatched");}  
 }
 function closeOpenCards(openCards) {
    for (var i =openCards.length-1;1>=0;i--) {
        // ***********************
        // ***********************
        // The Errors "Sentax Error" there is aclose tag which wasnt needed
      $(openCards[i]).removeClass("open");  
    }
 
 
    
    checkMatchedAll();
 }
 checkMatchedAll =()=>{
    let all=true;
    $('.card').each(function(){
        return all=$(this).hasClass("match");
        });
    if (all) {
        //owSomeAlert();
        showStatistics();
        gameEnded = true;
        //code
    }
 }
 function handleReset() {
    window.location.reload();
 };
 function showStatistics() {
    var score= Rating(Moveconter);
    clearInterval(interval);
    var time =getTimer();
    
        // ***********************
        // ***********************
        // The Errors "Sentax Error" there was a contact(+) which wasnt needed
    owesomeAlert('congratulation ! Winning' ,'With' + MoveCounter+' Moves',Scoring+score+'Star!'+'in'+ time+'Time','success','play again','stay');
}
 function getTimer() {
    
    return $('#timer').text();
 };
 function Markedopen(card) {
    if (openCards.length>0) {
        incmentMoves(card);
        openCards.push(card);
        if (IsMatch(openCards)) {
            matched(openCards);
            openCards=[];
            
        // ***********************
        // ***********************
        // The Errors "Sentax Error" we must write else then"{" in the same line
        }else {
            noMatched(openCards);
            // ***********************
            // ***********************
            // The Errors "Sentax Error" no equl mark after var Name
            openCards = [];
        }
    }else {
            openCards.push(card);
            incmentMoves(card);
        }
        checkMatchedAll();
    };
    var second = 0;minute=0; hour=0;
    function startTimer() {
        interval =setInterval(function(){timer.innerHTML =minute +"mins "+": "+second+"secs";
                              second++;
                            // ***********************
                            // ***********************
                            // The Errors "Sentax Error" we must write === not == to avoid errors
                              if (second === 60) {
                                minute++;
                                second=0;
                              }
                              if (minute === 60) {
                                hour++;
                                minute =0;
                              }
            
    },1000);
        
        // ***********************
        // ***********************
        // The Errors "Sentax Error" dont forger ";" simicolumn
 };

        // ***********************
        // ***********************
        // The Errors "Sentax Error" there was "{" wasnt fouund
 function  owesometAlert (titleToBind,textToShow,typeToBind,confirmbtnText = null,cbtnText){
   swal({
  title: titleToBind,
  text: textToShow,
  type: typeToBind,
  showCancelButton:cbtnText, true:false,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: confirmbtnText,
  confirmButtonText:cbtnText,
  confirmButtonClass:'btn btn-success',
  
   confirmButtonClass:'btn btn-danger',
   buttonsStyling:false,
   buttonsButtons:true
   }).then((result) => {
  if (result.value) {
    swal({
        title:'Reloading',
        text:'have fun todd.',
        type:'success',
        timer:2500
  })
    setTimeout (function(){
    window.location.reload();
  },2000);
     
    
  }else if (
    // Read more about handling dismissals
    result.dismiss === 'cancel'){
    

    swal({
        title:'pausing',
      text:'Refresh the page to play again',
      type:'info',
      animation:'false',
      customClass:'animated tada',
      timer:1000
      
    })
  }
    
   })
    }

        // ***********************
        // ***********************
        // The Errors "Sentax Error" There were too wrongs to amntion Copmare it to your own code and discover The Errors
    
 