import { useEffect, useState } from "react";

const width = 8;
const candyColors = [
  'blue',
  'green',
  'yellow',
  'purple',
  'pink',
  'red'
]

const App = () => {

  const [currentColorArrangement, setCurrentColorArrangement] = useState([])

  const createBoard = () => {
    const randomColorArrangement = [ ]
    for (let i = 0; i < width * width; i++) {
      const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor)
    }
    setCurrentColorArrangement(randomColorArrangement);
  }

  useEffect(()=>{
    createBoard();
  }, [])
  

  console.log(currentColorArrangement)


  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((colorCandy, index) => (
          <img key={index} style={{
            backgroundColor : colorCandy
          }} />
        ))}
      </div>
    </div>
  )

}

export default App;
