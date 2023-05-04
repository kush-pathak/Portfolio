import React from 'react'

const PageHeader = ({title,description}) => {
  const descStyle = {
    color: "#ffc107",
    fontSize: "1.5rem", 
    fontWeight: "bold",
    textAlign: "left",
    padding : "10px 10px"
  }
  return (

    
    <>

    <h2 className="pageTitle">{title}</h2> 
    <h4 className="pageDescription row" style={descStyle}><strong>{description}</strong></h4>
    </>
  )
}

export default PageHeader
