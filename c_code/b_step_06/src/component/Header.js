import Navigation from './Navigation';
import '../style/Header.scss'

export default function Header(props){
  
  return (
    <header id="headBox">
      <h1>{props.heading}</h1>
      <Navigation />      
    </header>
    )
}