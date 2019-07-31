// import React, {useState} from "react";
// import { Spring, animated as a } from 'react-spring/';

// const SpringButton = () => {
//   const [pressed, setPressed] = useState(false);
//   return (
//   <Spring native from={{scale: 1}} to={{scale: pressed? 0.8 : 1}}>
//     {({scale}) => (
//       <a.button 
//         style={{
//           backgroundColor: 'red', 
//           height: '100px', 
//           width: '100px', 
//           color: 'rgb(255, 255, 255)',
//           transform: scale.interpolate(scale => `scale(${scale})`)
//           }}
//         onMouseDown={() => setPressed(true)}
//         onClick={() => setPressed(false)}
//         onMouseLeave={() => setPressed(false)}
//       >
//        Attack Button 
//       </a.button>
//     )}
//   </Spring>
//   );
// }

// export default SpringButton;