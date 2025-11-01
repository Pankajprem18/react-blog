import Mod from './ModuleCSS/index.jsx';
import './style.css';
function Fun() {
    return (
        <div>
            <hr />
            <h1 className='heading'>External Style</h1>
            <div className='container'>
            <div className='user-card'>
                <div>
                    <img className='img-style' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="User Profile" />
                </div>
                <div className='text-wrap'>
                    <h4>Pankaj Kumar Mandal</h4>
                    <p>Software Developer</p>
                </div>
            </div>
            <div className='user-card'>
                <div>
                    <img className='img-style' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="User Profile" />
                </div>
                <div className='text-wrap'>
                    <h4>Pankaj Kumar Mandal</h4>
                    <p>Software Developer</p>
                </div>
            </div>
            <div className='user-card'>
                <div>
                    <img className='img-style' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="User Profile" />
                </div>
                <div className='text-wrap'>
                    <h4>Pankaj Kumar Mandal</h4>
                    <p>Software Developer</p>
                </div>
            </div>
            <div className='user-card'>
                <div>
                    <img className='img-style' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="User Profile" />
                </div>
                <div className='text-wrap'>
                    <h4>Pankaj Kumar Mandal</h4>
                    <p>Software Developer</p>
                </div>
            </div>
            <div className='user-card'>
                <div>
                    <img className='img-style' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="User Profile" />
                </div>
                <div className='text-wrap'>
                    <h4>Pankaj Kumar Mandal</h4>
                    <p>Software Developer</p>
                </div>
            </div>
            <div className='user-card'>
                <div>
                    <img className='img-style' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="User Profile" />
                </div>
                <div className='text-wrap'>
                    <h4>Pankaj Kumar Mandal</h4>
                    <p>Software Developer</p>
                </div>
            </div>
            <div className='user-card'>
                <div>
                    <img className='img-style' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="User Profile" />
                </div>
                <div className='text-wrap'>
                    <h4>Pankaj Kumar Mandal</h4>
                    <p>Software Developer</p>
                </div>
            </div>
            <div className='user-card'>
                <div>
                    <img className='img-style' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s" alt="User Profile" />
                </div>
                <div className='text-wrap'>
                    <h4>Pankaj Kumar Mandal</h4>
                    <p>Software Developer</p>
                </div>
            </div>
            </div>
            {/* user profile section using style with css module */}
            <h1>Style with Css Module in React js</h1>
            <div style={{display:'flex', flexWrap:'wrap'}}>
            <Mod/>
            <Mod/>
            <Mod/>
            <Mod/>
            <Mod/>
            <Mod/>
            <Mod/>
            <Mod/>
            <Mod/>
            <Mod/>
            <Mod/>
            </div>
        </div>
    )
}
export default Fun;