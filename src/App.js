import React from "react";
import Sentiment from 'sentiment'
import { useState } from "react";
const sentiment = new Sentiment();

const App = () => {

const [result, setResult] = useState({})

const changeHandler = (e) => {
setResult(sentiment.analyze(e.target.value))
}

return(
<>
<input type="text" onChange={changeHandler}></input>
<p>Sentiment Score is : {result.score}</p>
</>
    )
}

export default App