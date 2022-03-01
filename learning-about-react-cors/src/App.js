import './App.css';
import { useEffect, useState } from "react"



function App() {
  const [input, setInput]= useState("")
  const [output, setOutput]= useState("")

  useEffect(()=>{
    fetch("https://google-translate20.p.rapidapi.com/translate", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-host": "google-translate20.p.rapidapi.com",
		"x-rapidapi-key": "c9212d9739mshada21c589aa5fc1p16d71ejsnfbdc57ce68e6"
	},
	"body": {
		"text": "The POST method has several advantages over GET: it is more secure because most of the request is hidden from the user; Suitable for big data operations.",
		"tl": "es",
		"sl": "en"
	}
})
.then(response => {
	console.log(response)
})
  .then(data => {
    setOutput(data);
  
})

.catch(err => console.error(err))
}, []);

  return (
    <div className="App">
     <header>
{output ? output : "Loading..."}
      </header>
    </div>
  
  )}


export default App;
