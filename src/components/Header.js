
const Title = () => {
   return (
      <img src="https://images.cdn.prd.api.discomax.com/2023/02/16/6e242657-d3a9-3cf9-9904-cc4dfe208e69.jpeg?f=jpg&q=75&w=1280&w=960" alt="logo" className='logo' />
   );
}
const Header = () =>{
   return(
   <div className="header">
      <Title/>
      <div className="nav-item">
         <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Contact US</li>
            <li>Cart</li>
         </ul>
      </div>
   </div>
   );
}

export default Header;