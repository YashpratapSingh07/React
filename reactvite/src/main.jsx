import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
//ye q nhi chal qki syntax shi nhi h
// const reactelement = {
//   type:'a',
//   props:{
//       href:"https://google.com",
//       target:'_blank'
//   },
//   Children:"click to visit google"
// }
//react mein render krte samay vo react ke khud predefined way yadi paramete
//-er shi pass kiye to shi h nhi to nhi chalega
// const anotherelement = (
//   <a href="https://google.com" target ='_blank'>visit google</a>
// )

//ye ho vo tareeka Ye SHI TAreeka H
// const reactelement = React.createElement(
//   'a',
//   {href:'https://google.com',target:'_blank'},
//   'click visit to google'
// );
createRoot(document.getElementById('root')).render(
  //reactelement
  <App/>
);
