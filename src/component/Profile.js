import './Profile.css'
import Prachi from './prachi.jpg'
export const Profile = (props) => {
    return (
        <div className="profile-container">
            <div className='profile-container-div'>
                <img id='img' src={Prachi} alt={props.username}/>
            </div>
            <div className='profile-container-div'>
                <p id='username'>{props.username}</p>
            </div>
        </div>
    )
}