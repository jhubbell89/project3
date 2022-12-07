// import './Jokes.css'

// import {useState} from 'react'

// export default function JokeApp() {
//     const [result, setResult] = useState('Your joke/meme will be shown here...')

//   function generateJoke(){
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': '10df8f407dmshbf3f0270a54854ap1d3b19jsned9e0a3dc42e',
//         'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
//       }
//     };

//     fetch('https://humor-jokes-and-memes.p.rapidapi.com/jokes/search?exclude-tags=nsfw&min-rating=7&include-tags=one_liner&number=1&max-length=200', options)
//       .then(response => response.json())
//       .then(response => setResult(response.jokes[0].joke))
//       .catch(err => console.error(err));
//   }

//   function generateMeme(){
//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'YOUR_API_KEY',
//         'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
//       }
//     };

//     fetch('https://humor-jokes-and-memes.p.rapidapi.com/memes/random?keywords=rocket&number=3&media-type=image&keywords-in-image=false&min-rating=4', options)
//       .then(response => response.json())
//       .then(response => setResult(<Image src={response.url} width="100%" height="100%" layout="responsive"></Image>))
//       .catch(err => console.error(err));
// //   }
//     return (
//       <div class='container'>
//         <main class='main'>
//           <p class='description'>
//             Find the funniest jokes and memes
//           </p>
//           <div class='actionBtn'>
//             <button> Generate Joke </button>
//             <button> Generate Meme </button>
//           </div>
//           <div class='grid'>
//               <span class='card'>
//               </span>
//           </div>
//         </main>
//       </div>
//     )
// }