import React from 'react'

const Footer = () => {
    let footerstyle = {
    
        width: "100%",
        border : "1px solid wheat",
        marginTop: "auto",
        bottom: "0",
        position :"fixed",
        padding: "auto"
      }
      return (
    
        <footer className="bg-dark text-light"  style={footerstyle}>
    
          <p className="text-center" >
            Copyright &copy;  <strong>Shivam Pathak Portfolio</strong>
          </p>
        </footer>
  )
}

export default Footer
