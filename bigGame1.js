function random() {
    return Math.floor((Math.random() * 6)+1);
  }
  
  let dice = document.getElementById("dice");
  let newGame = document.getElementById('newGame')
  let hold = document.getElementById('hold')
  let randomNum;
  let currScore = [0,0];
  let activeplayer = 0;
  let addNum = 0;


    dice.addEventListener("click", function () {
        randomNum = random()
        dice.innerText = `${randomNum}`
    
        if (randomNum === 1) {
          addNum = 0;
          document.getElementById(`cur${activeplayer}`).textContent= addNum;
          document.getElementById(`box${activeplayer}`).style.backgroundImage = "linear-gradient(to bottom right,rgb(128, 112, 207), rgb(237, 57, 207))";
          console.log(document.getElementById(`box${activeplayer}`).style.backgroundImage)
          activeplayer = activeplayer === 0 ? 1 : 0                                   // MIMP toggle logic
          document.getElementById(`box${activeplayer}`).style.backgroundImage = "linear-gradient(to bottom right, rgb(93, 140, 206), rgb(43, 219, 72)) "
          console.log(addNum) 
       }else{
          addNum += randomNum;
          document.getElementById(`cur${activeplayer}`).textContent = addNum
    
          hold.addEventListener('click', function() {
            if (currScore[activeplayer] >= 100) {
                document.getElementById(`score${activeplayer}`).textContent = `${currScore[activeplayer]} , you Win`
                document.getElementById(`box${activeplayer}`).style.backgroundColor = "rgb(51, 187, 51)"
            }
            else{
                currScore[activeplayer] += addNum;
                addNum = 0;
                document.getElementById(`score${activeplayer}`).textContent = currScore[activeplayer]
            }
          })
        }     
    })

    newGame.addEventListener('click', function () {
      currScore = [0,0]
      activeplayer = 0
      addNum = 0
      randomNum = 1;
      dice.textContent = 1;
      document.getElementById(`cur0`).textContent = 0
      document.getElementById(`cur1`).textContent = 0
      document.getElementById(`score0`).textContent = 0 
      document.getElementById(`score1`).textContent = 0 

    })