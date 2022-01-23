'use strict';
let sum=Math.floor(Math.random()*20)+1;
let score=20;
let highScore=0;

const Message=function(message){
  document.querySelector('.laura').textContent=message;
}

document.querySelector('.check-btn').addEventListener('click',
       function(){
          const jack= Number(document.querySelector('.type-input').value);
          console.log(jack, typeof jack);

          if(!jack){
            Message('⛔No Number');
          }

          // When guess is right
          else if(jack===sum){
            document.querySelector('body').style.backgroundColor = "green";
            document.querySelector('.type-input').style.backgroundColor = "green";
            document.querySelector('.box').style.width = "150px";
            document.querySelector('.box').textContent=sum;
            console.log(document.querySelector('.laura').textContent='🥂Correct Number');

            if(score>highScore){
              highScore=score;
              document.querySelector('.zero').textContent=highScore;
             }
          }

          else if(jack!==sum){
            if(score>1){
              Message(jack>sum ? '📈Too high!' : '📈Too low!');
              score--;
              document.querySelector('.number-twenty').textContent=score;
              }
              else{
                Message('😢You lost the game');
                document.querySelector('.number-twenty').textContent=0;
              }
          }
          

         //When guess is higher
          // else if(jack>sum){
          //   if(score>1){
          //   console.log(document.querySelector('.laura').textContent='📈Too high!');
          //   score--;
          //   document.querySelector('.number-twenty').textContent=score;
          //   }
          //   else{
          //     console.log(document.querySelector('.laura').textContent='😢You lost the game');
          //     document.querySelector('.number-twenty').textContent=0;
          //   }
          // }
          
          // //When guess is lower
          // else if(jack<sum){
          //   if(score>1){
          //     console.log(document.querySelector('.laura').textContent='📈Too low!');
          //     score--;
          //     document.querySelector('.number-twenty').textContent=score;
          //     }
          //     else{
          //       console.log(document.querySelector('.laura').textContent='😢You lost the game');
          //       document.querySelector('.number-twenty').textContent=0;
          //     }
          // }
       });

       document.querySelector('.tap-btn').addEventListener('click', 
       function(){
         score=20;
         sum=Math.floor(Math.random()*20)+1;

         console.log(document.querySelector('.box').textContent='?');
         console.log(document.querySelector('.type-input').value='');
         Message('🤗Start guessing...')
         console.log(document.querySelector('.number-twenty').textContent=score);
         console.log(document.querySelector('body').style.backgroundColor='#302f2c');
         console.log(document.querySelector('.type-input').style.backgroundColor='#302f2c');
         console.log(document.querySelector('.box').style.width='85px');
         
         
      });

      



       




