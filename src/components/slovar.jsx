import { useState } from "react"

export default function Translatetion() {


    const dictionary = {
        'a': '@',
        'b': '6',
        'c': '(',
        'd': '(|',
        'e': '3',
        'f': '|~',
        'g': '8',
        'h': '4',
        'i': ':',
        'k': '|<',
        'j': '!',
        'l': '|',
        'o': '0',
    }
    const [userInput, setUserInput] = useState("")
    const [output, setOutput] = useState("")


    function TranslateWord() {

        setOutput(
            userInput.split('').map(letter => {
                return dictionary[letter] ?? letter
            })
        )
    }

    return (
        <div className="flex p-4 gap-4">
            <h2>Преобразование букв</h2>
            <input type="text" placeholder="введите текст" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <button onClick={TranslateWord}>преобразовать</button>
            <p>{output}</p>
        </div>
    )
}