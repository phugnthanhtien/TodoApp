import styles from "./Member.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const Member = ({user}) => {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("avatar")}>
                <img src = {user.avatar}
                alt="Avatar"></img>
            </div>
            <div className={cx("name")}>{user.userName}</div>
        </div>
    )
}

export default Member