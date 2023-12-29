import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  
  useEffect(()=>{
    let toggleButton=document.getElementById('toggle');
    toggleButton.style.background='red';
  toggleButton.style.color='white';

    let hoverButton=document.getElementById('hover');
    hoverButton.style.background='red';
    hoverButton.style.color='white';

toggleButton.addEventListener('click',()=>{
if(toggleButton.innerHTML=='Close'){
  toggleButton.innerHTML='Open';
  toggleButton.style.background='green';
}
else{
  toggleButton.innerHTML='Close';
  toggleButton.style.background='red';
}

});

hoverButton.addEventListener('mouseover',(e)=>{
  e.target.innerHTML='Hovered';
  e.target.style.background='green';
});
hoverButton.addEventListener('mouseout',(e)=>{
  e.target.innerHTML='Unhovered';
  e.target.style.background='red';
});
  })

  return (
    <div className="main">
    
    <button id='toggle'>Close</button>
    <button id='hover'>Unhovered</button>
    </div>
  );
}

export default App;
