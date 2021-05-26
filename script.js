const boxOne = ["1", "2", "3", "4", "5", "q", "w","e", "r", "t"]
const boxTwo = ["6", "7", "8", "9", "0", "p", "o","i", "u", "y"]
const boxThree = ["a", "s", "d", "f", "g", "z", "x","c", "v", "b"]
const boxFour = ["h", "j", "k", "l", ";", "\'", "n","m", ",", "."]

    function getBoxNumber(keyValue) {
        if (boxOne.includes(keyValue)){
            return 1
        }if (boxTwo.includes(keyValue)){
            return 2
        }if (boxThree.includes(keyValue)){
            return 3
        }if (boxFour.includes(keyValue)){
            return 4
        }
    }
   
    document.addEventListener("keydown", (e) => {
       console.log(e.key)
        const boxNumber = getBoxNumber(e.key)

        console.log(`Key was pressed inside box ${getBoxNumber(e.key)}.`)
        let coverElement = document.getElementById(`cover${getBoxNumber(e.key)}`)
        
        if (coverElement.className === "cover") {
            coverElement.className = "uncover"
        }
    })

    document.addEventListener("keyup", (e) => {
        console.log(e.key)
        const boxNumber = getBoxNumber(e.key)

        console.log(`Key was unpressed inside box ${boxNumber}.`)
        let coverElement = document.getElementById(`cover${boxNumber}`)
     
        if (coverElement.className === "uncover") {
             coverElement.className = "cover"
        }
      
    })
        