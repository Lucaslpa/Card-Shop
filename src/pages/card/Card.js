import CardInfos from './components/CardInfos'
import IMGProduct from './components/IMGProduct'
import ImgsImports from './imgsIimports'
import Logo from '../../assets/logo.png'
import ShareSVG from '../../assets/share.svg'
import Background from './components/backgrounds'
import { useEffect } from 'react'

function Card() { 
      var sizes, color, imgs, backgrounds
     function SelectSize() { 
          sizes.forEach(e => e.classList.remove('size'))
          this.classList.add('size')
     }
    function SelectColor() {
             color.forEach(e => e.classList.remove('selected') )
             this.classList.add('selected')
           
           
           const geralcolor =   this.getAttribute('geralcolor')
            document.documentElement.style.setProperty('--GeralColor', geralcolor)
                 
            
            const actualColor = this.getAttribute(`color`)          
            const backgroundShow = document.querySelector(`.background[color=${actualColor}]`)
            backgrounds.forEach(e=> {
                 e.classList.remove('behind')
                 if(e.classList.contains('display')) {
                       e.classList.remove('display')
                      return e.classList.add('behind')
                 } else {
                      return 
                 }
          }) 
            backgroundShow.classList.add('display')


            const imgShow = document.querySelector(`.productIMG[id=${actualColor}]`)
            imgs.forEach(e => e.classList.remove('show') )
            imgShow.classList.add('show')
            

    }

     useEffect(() => {
             const sizeElements = document.getElementsByClassName('SizeSelector')
             const colorsElements = document.getElementsByClassName('ColorSelector')
             const imgElements = document.getElementsByClassName('productIMG')
             const backgroundElements = document.getElementsByClassName('background')

             sizes = [...sizeElements]
             color = [...colorsElements]
             imgs = [...imgElements]
             backgrounds = [...backgroundElements]

             color.forEach(e => e.addEventListener('click', SelectColor ))
             sizes.forEach(e => e.addEventListener('click', SelectSize))
     } ,[]) 

     return (  
           <div id='ContainerCard' >
              <div id='ProductView'>
              <img id='logo' src={Logo} />
                  <a id='shareSVG' >  
                  <img src={ShareSVG} ></img>
                  </a>
               <span id='opacityLogo'> NIKE</span>
                 <IMGProduct/>
                 <Background/>
              </div>
               
                <CardInfos/> 
           </div>
         
     )
}


export default Card