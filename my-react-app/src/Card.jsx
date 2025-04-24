import profilePic from './assets/ken.webp'
function Card(){

    return(
          <div className="Card">
            <img className='card-image'src={profilePic} alt = "kenshiro"></img>
            <h2 className='card-title'>Swoumya Prasad Rimal</h2>
            <p className='card-text'>Centennial College Student and a part time napper!!!</p>
          </div>  
    );

}

export default Card