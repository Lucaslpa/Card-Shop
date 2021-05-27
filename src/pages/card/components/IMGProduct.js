import img from '../../../assets/blue.png'
import black from '../../../assets/black.png'
import blue from '../../../assets/blue.png'
import green from '../../../assets/green.png'
import red from '../../../assets/red.png'
import orange from '../../../assets/orange.png'
import logo from '../../../assets/logo.png'

function IMGProduct(props) { 

return ( 

      <>   
              <img src={red}      className='productIMG  '  id='red'  />                     
              <img  src={orange}  className='productIMG '   id='orange' />
              <img src={black}    className='productIMG '  id='black' />
              <img src={green}    className='productIMG '  id='green'/>
              <img src={blue}     className='productIMG show ' id='blue' />
      </>
    
)
}


export default IMGProduct             