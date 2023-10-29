import React, { useState, useEffect } from 'react'

function Profile() {
  const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  const [userImage, setuserImage] = useState('https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-man-wearing-glasses-is-wearing-colorful-background-image_2905240.jpg');
  const images = {
    "sample":[
      {
        "description":"Lady with a red umbrella",
        "image-url":"https://i.imgur.com/pwpWaWu.jpg"
      },
      {
        "description":"Flowers and some fruits",
        "image-url":"https://i.imgur.com/KIPtISY.jpg"
      },
      {
        "description":"Beautiful scenery",
        "image-url":"https://i.imgur.com/2jMCqQ2.jpg"
      },
      {
        "description":"Some kind of bird",
        "image-url":"https://i.imgur.com/QFDRuAh.jpg"
      },
      {
        "description":"The attack of dragons",
        "image-url":"https://i.imgur.com/8yIIokW.jpg"
      },
      {
        "description":"Some kind of bird",
        "image-url":"https://i.imgur.com/QFDRuAh.jpg"
      },
      {
        "description":"The attack of dragons",
        "image-url":"https://i.imgur.com/8yIIokW.jpg"
      },
      {
        "description":"Some kind of bird",
        "image-url":"https://i.imgur.com/QFDRuAh.jpg"
      },
      {
        "description":"The attack of dragons",
        "image-url":"https://i.imgur.com/8yIIokW.jpg"
      },
      {
        "description":"Some kind of bird",
        "image-url":"https://i.imgur.com/QFDRuAh.jpg"
      },
      {
        "description":"The attack of dragons",
        "image-url":"https://i.imgur.com/8yIIokW.jpg"
      },
      
    ]
  
  }
  const styles = { 
    title:{
      color: '#555',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    desc:{
      paddingBottom: 16,
      fontSize: 20,
      fontWeight: 300,
      textAlign:'left'
    }
  }
  
  return (
    <div style={{padding: 80, display: 'flex', gap:20}}>
      <div className='profile-details' style={{borderRight: '1px solid #7D7D7D', paddingRight: 20 , width:'85%' }}>
        <div className='top-details' style={{display:'flex', justifyContent:'space-between', gap:12}}>
          <div className='profile-image' ><img style={{borderRadius: 50}} height={100} width={100} src={userImage || defaultImage} alt="" /></div>
          <div className='name-username'>
            <div>
              <div
                style={styles.title}  
              >Your name</div>
              <div
                style={styles.desc}  
              >Nakul Tyagi</div>
            </div>
            <div>
            <div
                style={styles.title}  
              >Your username</div>
              <div
                style={styles.desc} 
              >
                nakul1tyagi</div>
            </div>
          </div>
        </div>
        <div className='body-details' style={{display:'flex', flexDirection:'column', alignItems:'flex-start'}}>
          <div
            style={styles.title}  
          >
            Your profession
          </div>
          <div
            style={styles.desc}  
          >
            Creator
          </div>
          <div
            style={styles.title}  
          >
            Your email
          </div>
          <div
            style={styles.desc}  
          >
            Nakul Tyagi
          </div>
          <div
            style={styles.title}  
          >
            Your address
          </div>
          <div
            style={styles.desc}  
          >
            Nakul Tyagi
          </div>
          <div
            style={styles.title}  
          >
            About your brand
          </div>
          <div
            style={styles.desc}  
          >
            Eleifend adipiscing quisque pellentesque lacus pellentesque aliquet lacus. Varius tincidunt sem elementum feugiat et et. Dictum ut in libero diam gravida ultricies mattis tellus et.           </div>
        </div>
      </div>
      <div className='profile-data'>
        <div
          style={styles.title}  
        >Your images</div>        
        <div style={{display:'flex', paddingTop: 16, gap:10, flexWrap:'wrap'}}>
          {images.sample.map((image, index)=>{
            return(
              <img key={index} height={250} width={250} style={{borderRadius:12}} src={'https://source.unsplash.com/random/300×300/?'+(Math.random()*100).toFixed(0).toString()} defaultValue={defaultImage} alt="" />
            )
          })}
        </div>
      </div>
      <div className='profile-story'>

      </div>
    </div>
  )
}

export default Profile