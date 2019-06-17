     var clearTime;
     var msTens = 0,msHundreds = 0,secondOnes = 0,secondTens = 0;
     var startBtn = document.createElement("button");
     var resetBtn = document.createElement("button");
     var body = document.getElementsByTagName("body")[0];
     startBtn.innerHTML = "start";
     startBtn.setAttribute("id","start");
     startBtn.setAttribute("style","display:block; margin-top: 20px;margin-left:40px;line-height: 60px;font-size:20px;font-weight: bold;padding: 0 40px;background: #008CBA;border: none;")
     resetBtn.innerHTML = "reset";
     resetBtn.setAttribute("id","reset");
     resetBtn.setAttribute("style","display:block; margin-top: 20px;margin-left:40px;line-height: 60px;font-size:20px;font-weight: bold;padding: 0 40px;background: #f44336;border: none;")
    
     
     body.appendChild(startBtn);
     body.appendChild(resetBtn);

     var ms = document .getElementById("msTens");
     var mss = document .getElementById("msHundreds");
     var colon = document .getElementById("colon");
     var s = document .getElementById("secondOnes");
     var st = document .getElementById("secondTens");
     var start = document .getElementById("start");
     var stop = document.getElementById ("reset");
      
function startWatch( ) { 
       
          if(msTens === 9 ){
            msTens = 0;
            msHundreds = msHundreds + 1;
          } 
          if(msHundreds === 9 ){
            msHundreds = 0;
            secondOnes = secondOnes + 1;
          }
          if(secondOnes === 9 ){
            secondOnes = 0;
            secondTens = secondTens + 1;
          }
          if(secondTens === 1 ){
            ms.style.color= "red";
            mss.style.color= "red";
            colon.style.color= "red";
            s.style.color= "red";
            st.style.color= "red";
          }else{
            msTens++;
          }  

          ms.innerHTML = msTens;
          mss.innerHTML = msHundreds;
          s.innerHTML = secondOnes;
          st.innerHTML = secondTens;

          clearTime = setTimeout( "startWatch( )", 10 ); 
        
        } 

function startTime( ) { 
     if ( msTens === 0 && msHundreds === 0 && secondOnes === 0 && secondTens=== 0 ) {
          startWatch( );
         }}

function stopTime( ) {
         if ( msTens !== 0 || msHundreds !== 0 || secondOnes !== 0 || secondTens !== 0) { 
                  msTens = 0; msHundreds = 0; secondOnes = 0;secondTens = 0;
                      ms.innerHTML = msTens;
                      mss.innerHTML = msHundreds;
                      s.innerHTML = secondOnes;
                      st.innerHTML = secondTens
                     clearTimeout( clearTime ); 
                            } 
                        }

    stop.addEventListener( 'click', ()=>{
                                    stopTime();
                                    ms.style.color= "black";
                                    mss.style.color= "black";
                                    colon.style.color= "black";
                                    s.style.color= "black";
                                    st.style.color= "black";
                                  } );
    start.addEventListener( 'click', startTime );
