console.log("Exercise 2 - Word Cloud");
const para = document.getElementById("myParagraph")
const CloudWord = document.getElementById("myWordCloud")

var wordCount = {}
var words = para.innerHTML.split(" ");

for(var i = 0; i< words.length; i++){
    if (!(/[ ,.]/.test(words[i]))) wordCount[words[i]] = (wordCount[words[i]] || 0) + 1
}
 const sortedArr = [];
 for (let word in wordCount) sortedArr.push([word, wordCount[word]])
 sortedArr.sort((a,b) => b[1] -a[1])
 sortedArr.splice(0, 1)
 let wordArr = []
 const fragment = new DocumentFragment()
 let fontSize = 68;
 const  simpleColor = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
    "cyan",
    "magenta",
    "lime",
    "teal",
    "olive",
    "navy",
    "maroon",
    "gold",
    "silver",
    "indigo",
    "coral",
    "salmon",
    "turquoise",
    "violet",
    "orchid",
    "slategray",
    "plum",
    "peru",
    "khaki",
    "peach",
    "aquamarine",
    "chartreuse",
    "crimson",
    "rose", 
 ]
 CloudWord.innerHTML = ""
 for(let i = 0; i < 12; i++){
    const randomColor = simpleColor[Math.trunc(Math.random() * simpleColor.length)]
    let span = `<span style= "font-size: ${fontSize -= 4}px; margin: 0 30px; color:${randomColor};">${sortedArr[i][0]}</span>`
    CloudWord.insertAdjacentHTML("beforeEnd", span)
 }