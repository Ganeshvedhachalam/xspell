import { useState } from "react";

function SpellCheckApp() {
    const customDictionary = {
        teh: "the",
        wrok: "work",
        fot: "for",
        exampl: "example",
      };
      
    const[inputText,setInputText]=useState("");
    const[suggestedText,setSuggestedText]=useState("")

    const handleInputChange=(e)=>{
        const text=e.target.value
        setInputText(text)
        const words=text.split(" ")
        const correctedwords= words.map((word)=>{
            const correctedword=customDictionary[word.toLowerCase()]
            return correctedword || word 
        })
        const correctedText = correctedwords.join(" ");


        const firstcorrection =correctedwords.find((word,index) =>word!==words[index])
        setSuggestedText(firstcorrection||"")
 
    }
    return (
      <div className="App">
        <header className="App-header">
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
         {suggestedText&&
        <p>
        Did you mean: <strong>{suggestedText}</strong>?
      </p>
      }
        </header>
       
      </div>

      
    );
  }
  
  export default SpellCheckApp;
  