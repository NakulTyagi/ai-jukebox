import React, { useState } from 'react'

function Profile() {
  const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
  const [userImage, setuserImage] = useState('https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp');
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
      <div className='profile-details' style={{borderRight: '1px solid #7D7D7D', paddingRight: 20 , width:'25%' }}>
        <div className='top-details' style={{display:'flex', justifyContent:'space-between'}}>
          <div className='profile-image' ><img style={{borderRadius: 40}} height={120} width={120} src={userImage || defaultImage} alt="" /></div>
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
          {images.sample.map((image)=>{
            return(
              <img style={{borderRadius:12}} src={image['image-url']} defaultValue={defaultImage} alt="" />
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