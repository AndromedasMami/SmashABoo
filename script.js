const boxOne = ["1", "2", "3", "4", "5", "q", "w","e", "r", "t"]
const boxTwo = ["6", "7", "8", "9", "0", "p", "o","i", "u", "y"]
const boxThree = ["a", "s", "d", "f", "g", "z", "x","c", "v", "b"]
const boxFour = ["h", "j", "k", "l", ";", "\'", "n","m", ",", "."]
const posIndex = [1, 2, 3, 4]

// for (var i = 0; i < posIndex.length; i++) {
//     revealAnimal(document.getElementById(`cover${posIndex[i]}`));
// }


    document.addEventListener("keydown", (e) => {
       console.log(e.key)

       if (boxOne.includes(e.key)){
        console.log("Key was pressed inside box 1.")
        let coverElement = document.getElementById("cover1")
        
        if (coverElement.className === "cover") {
            coverElement.className = "uncover"
        }
       }

       if (boxTwo.includes(e.key)){
        console.log("Key was pressed inside box 2.")
        let coverElement = document.getElementById("cover2")
        
        if (coverElement.className === "cover") {
            coverElement.className = "uncover"
        }
       }
       if (boxThree.includes(e.key)){
        console.log("Key was pressed inside box 3.")
        let coverElement = document.getElementById("cover3")
        
        if (coverElement.className === "cover") {
            coverElement.className = "uncover"
        }
       }
       if (boxFour.includes(e.key)){
        console.log("Key was pressed inside box 4.")
        let coverElement = document.getElementById("cover4")
        
        if (coverElement.className === "cover") {
            coverElement.className = "uncover"
        }
    }
    })

    document.addEventListener("keyup", (e) => {
        console.log(e.key)
 
        if (boxOne.includes(e.key)){
         console.log("Key was unpressed inside box 1.")
         let coverElement = document.getElementById("cover1")
     
         if (coverElement.className === "uncover") {
             coverElement.className = "cover"
         }
 
        }
        if (boxTwo.includes(e.key)){
            console.log("Key was unpressed inside box 2.")
            let coverElement = document.getElementById("cover2")
        
            if (coverElement.className === "uncover") {
                coverElement.className = "cover"
            }
    
           }
           if (boxThree.includes(e.key)){
            console.log("Key was unpressed inside box 3.")
            let coverElement = document.getElementById("cover3")
        
            if (coverElement.className === "uncover") {
                coverElement.className = "cover"
            }
    
           }
           if (boxFour.includes(e.key)){
            console.log("Key was unpressed inside box 4.")
            let coverElement = document.getElementById("cover4")
        
            if (coverElement.className === "uncover") {
                coverElement.className = "cover"
            }
    
           }
     
     })

    //  document.addEventListener("keydown", (e) => {
    //     console.log(e.key)
 
    //     if (boxTwo.includes(e.key)){
    //     //  console.log("Key was pressed inside box 2.")
    //      let coverElement = document.getElementById("cover2")
     
 
    //      if (coverElement.className === "cover") {
    //          coverElement.className = "uncover"
    //      }
 
    //     }
     
    //  })
 
    //  document.addEventListener("keyup", (e) => {
    //      console.log(e.key)
  
    //      if (boxTwo.includes(e.key)){
    //     //   console.log("Key was unpressed inside box 2.")
    //       let coverElement = document.getElementById("cover2")
      
  
    //       if (coverElement.className === "uncover") {
    //           coverElement.className = "cover"
    //       }
  
    //      }
      
    //   })
 


