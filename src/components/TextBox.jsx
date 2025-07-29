import { useEffect, useState } from "react"
import "../css/header.css"
import { use } from "react";
import copy from 'copy-to-clipboard';
import { toast, Bounce } from 'react-toastify';

function TextBox() {
    const [letterCount, setLetterCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [text, setText] = useState("")

    function upper() {
        setText(text.toUpperCase())
        updateTextarea(text)
    }

    function lower() {
        setText(text.toLowerCase())
        updateTextarea(text)
    }

    function swapCase() {
        let newSting = text
            .split('') // Convert the string to an array of characters
            .map(char => {
                if (char === char.toUpperCase() && char !== char.toLowerCase()) {
                    // If the character is uppercase (and not a non-alphabetic character)
                    return char.toLowerCase();
                } else if (char === char.toLowerCase() && char !== char.toUpperCase()) {
                    // If the character is lowercase (and not a non-alphabetic character)
                    return char.toUpperCase();
                } else {
                    // Keep non-alphabetic characters as they are
                    return char;
                }
            })
            .join('')
        setText(newSting)
        updateTextarea(text)
    }
    function title() {

        setText(text
            .split('\n') // Split by newlines
            .map(line =>
                line
                    .split(' ') // Split each line into words
                    .map(word =>
                        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    )
                    .join(' ')
            )
            .join('\n'))


        updateTextarea(text)
    }

    function capitalize() {
        if (text.length === 0) {
            setText(text)
        }
        else {
            setText(text.toLowerCase()
                .split('? ')
                .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
                .join('? '));
            // setText(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
            setText(text
                .split('. ')
                .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
                .join('. '));

            setText(text.toLowerCase()
                .split("\n")
                .map(para => para
                    .split('. ')
                    .map(line => line.charAt(0).toUpperCase() + line.slice(1))
                    .join('. ')
                ).join('\n'))
        }
        updateTextarea(text)
    }

    function handleCopyClick() {
        if (text === "") {
            toast.error('Please Enter some text first!');
        }
        else {
            copy(text);
            // alert("Text copied to clipboard")
            toast.success('🦄 Copied to Clipboard!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }
    function handleClearClick() {
        setText("")
        setLetterCount(0)
        setWordCount(0)
        updateTextarea(text)
    }
    function updateTextarea(updated_text) {
        document.getElementById("text-area").value = updated_text;
    }
    useEffect(() => {
        // console.log(text)
    }, [text])

    return (
        <>
            <div className="textBox-conatiner">
                <textarea name="text" placeholder="Enter Your Text" id="text-area" value={text} className="textArea" onChange={(e) => {
                    setLetterCount(e.target.value.length)
                    // console.log(e.target.value)
                    setText(e.target.value)
                    if (!e.target.value) {
                        setWordCount(0);
                    }
                    else {
                        setWordCount(text.split(' ').length)
                    }
                }}>

                </textarea>
            </div>
            <div className="buttons-conatiner">
                <i className="letterCount">Letter Count: {letterCount}</i>
                <i className="wordCount">&nbsp; | Word Count: {wordCount}</i>
                <button onClick={upper} className="button-item ">Uppercase</button>
                <button onClick={lower} className="button-item">Lowercase</button>
                <button onClick={title} className="button-item">Titlecase</button>
                <button onClick={capitalize} className="button-item">Capitalize</button>
                <button onClick={swapCase} className="button-item">SwapCase</button>
                <button onClick={handleCopyClick} className="button-item">Copy Text</button>
                <button onClick={handleClearClick} className="button-item">Clear</button>
            </div>
        </>
    )
}

export default TextBox