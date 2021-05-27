


function CardInfos() { 

     
    
     const ProductName = () =>  { 
        return ( 
             <div id='TitleContainer' > 
                <h1 id='ProductTitle'>Nike Zoom KD12 <span id='New' > NEW </span> </h1>
                <span id='ShortDescription' >Men's Running Shoes</span>        
             </div>)}

      const ProductInfo = () =>  { 
        return ( 
            <div id='InfoContainer' > 
              <h3 id='InfoTitle' >  Product Info </h3>
              <p id='InfoDescription' >Ensure a comfortable running session by wearing this 
                        pair of cool running shoes from nike </p>
            </div> )}
   
       const ProductSelectColor = () =>  { 
           return ( 
             <div  id='ContainerSelectColor' > 
                <span id='ContainerSelectColorTitle' >Color</span>
                <div id='Selector' >
                <div className='ColorSelector ' geralcolor='#ff1736' color='red'  ></div>
                <div className='ColorSelector selected' geralcolor='#177fff' color='blue'   ></div>
                <div className='ColorSelector ' geralcolor='#212121' color='black' ></div>
                <div className='ColorSelector ' geralcolor='#0be056' color='green'  ></div>
                <div className='ColorSelector ' geralcolor='#ebc221' color='orange'  ></div>
                </div>
             </div>)}
       
        const ProductSize = () =>  { 
             return ( 
                 <div id='ContainerSize' >  
                     <h3 id='SizeTitle' >Size</h3>
                     <div id='Sizes' > 
                          <span className='SizeSelector size' >8</span>
                          <span className='SizeSelector ' >9</span>
                          <span className='SizeSelector ' >10</span>
                          <span className='SizeSelector ' >7</span>
                          <span className='SizeSelector ' >11</span>
                     </div>
                 </div>)}
        const ProductAddToCart = () =>  { 
              return ( 
                  <div  id='BuyContainer'  > 
               <a  id='BuyButton' > ADD TO CARD</a> 
                <span id='BuyPrice' > R$149.99</span>
                  </div>)}

 return ( 

      <div id='CardInfos'  >   
     
     

         <ProductName/>
         <ProductInfo/>
         <ProductSelectColor/>
         <ProductSize/> 
         <ProductAddToCart/>
       </div>
     
 )
}


export default CardInfos 