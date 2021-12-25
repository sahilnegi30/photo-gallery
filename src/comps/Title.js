import React from 'react';

const Title = () => {
  return (
    <div className="title">
      <h1 ><center><img src="/gallery.png" style={{height: "2rem", width: "2rem",}} alt=""/>PHOTO GALLERY</center></h1>
      <hr />
      <h2>Pictures</h2>
      <p>Add Pictures to the Firebase.</p>
      <h3><p><i>When you upload the picture, those directly uploaded to firebase.</i></p></h3>
    </div>
  )
}

export default Title;