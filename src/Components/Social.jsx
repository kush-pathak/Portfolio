import React from 'react'

const Social = () => {
    const styles = {
        icon: {
            textDecoration: "none",
            fontSize: "22px",
            padding: "10px",
            transition: "0.2s ease-in",
        },

    };
    return (
        <>
            <div className="socialIcons" style={styles.socialIcons}>

            {/* <a className="icon" style={styles.icon} href=" ">
          <i
            className="fa fa-cloud"
            aria-hidden="true"
            title="Shivam Pathak' GFG Profile"
          ></i>
        </a> */}

        <a className="icon" style={styles.icon} href="https://github.com/kush-pathak" target='_blank'>
          <i
            className="fa-brands fa-github"
            aria-hidden="true"
            title="Shivam Pathak' GitHub Profile"
          ></i>
        </a>
        <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/kush-pathak12/"  target='_blank'>
          <i
            className="fa-brands fa-linkedin"
            aria-hidden="true"
            title="Shivam Pathak' LinkedIn Profile"
          ></i>
        </a>
        <a className="icon" style={styles.icon} href="https://www.instagram.com/kush__pathak_ " target ="_blank">
          <i
            className="fa-brands fa-instagram"
            aria-hidden="true"
            title="Shivam Pathak' Instagram Profile"
          ></i>
        </a>
        <a className="icon" style={styles.icon} href="https://twitter.com/shivam__pathak_" target='_blank'> 
          <i
            className="fa-brands fa-twitter"
            aria-hidden="true"
            title="Shivam Pathak' Twitter Profile"
          ></i>
        </a>
      </div>
        </>
    )
}

export default Social
