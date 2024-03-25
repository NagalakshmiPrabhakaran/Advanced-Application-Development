import React from 'react'
import './Success.css'
const Success = () => {
    
  return (
    <div>
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossOrigin="anonymous"
    />
    <title>Confetti</title>
    <div className="flex">
      <div>
        <img
          width="150px"
          height="150px"
          src="https://cdn.pixabay.com/animation/2022/12/11/04/11/04-11-18-929_512.gif"
        />
      </div>
      <h4>Congratulations! 🎉 </h4>
      <h5>
        Welcome to Uniclas Online store! Enjoy your shopping experience with us.{" "}
        <br /> Unlock the power of success with our business tools and resources.
        Simplify operations, boost productivity, and achieve growth with ease.
      </h5>
      <p>
        Add your first product <br />
        Need assistance? Our dedicated support team is here to help you thrive.
        Welcome aboard!
      </p>
      {/*     <div class="d-flex justify-content-around" style="gap: 10px;">
  
                                          <button type="submit" name="submit" value="GO" class="button-style">
  <span class="text"> Edit Your Website </span></button>
  
          <button id="viewWebsite2" class="button-style">View Your Website</button>
          <button class="button-style"><a href="#" >Go To Admin Page</a></button>
          </div> */}
    </div>
    {/* Confetti  JS*/}
  </>
  
    </div>
  )
}

export default Success
