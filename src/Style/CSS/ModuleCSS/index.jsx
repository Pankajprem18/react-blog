// import '../style.css';
import style from './style.Module.css';
function Mod() {
    return (
        <div>
            <h1 className={style.heading}>User Profile</h1>
            <div className={style.card}>
                <img className={style.img}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKg5Ng2FilnE2VWNtv3LC5-Kf1O6E8Vmicg&s" alt="" />
                <div className={style.textWrap}>
                    <h4>Pankaj Kumar Mandal</h4>
                    <h6>Software Engineer</h6>
                </div>
            </div>

        </div>
    )
}
export default Mod;