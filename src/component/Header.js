import './Header.css'
export const Header = () => {
    return (
        <div className="Header-container">
            <div id='chodu'></div>
            <p id='change-password'style={{ fontWeight: '900px' }}>Change Password</p>
            <p><span id='skip'>Skip</span></p>
        </div>
    )
}