import styles from "./PopupEdit.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function PopupEdit({ title, todo }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx(["popup", "animate"])} >
        <div className={cx(["popup__icon", "popup__icon--cancel"])} onClick={() => {}}>
          {/* <i className="fa-sharp fa-solid fa-xmark"></i> */}
        </div>
        <div className={cx("popup__workspace ")}>
          <div className={cx("popup__title")}>
            <h3>Create New {title}</h3>
          </div>
          <div className={cx("popup__input")}>
            <input
              type="text"
              placeholder={title + " name"}
              className={cx("popup__input--name")}
            />
            {/* <textarea placeholder={title + "description"}  className="popup__input--description"></textarea> */}
          </div>
          <div className={cx("popup__interaction")}>
            <div className={cx("popup__interaction--left")}>
              <div className={cx("popup__icon")}>
                {/* <img className = 'popup__icon-image' src="../../assets/images/font.png" alt="icon text"> */}
              </div>
              <div className={cx("popup__icon")}>
                {/* <img className = 'popup__icon-image' src="../../assets/images/reaction.png" alt="icon reaction "> */}
              </div>
              <div className={cx("popup__icon")}>
                {/* <img className = 'popup__icon-image' src="../../assets/images/link.png" alt="icon link "> */}
              </div>
            </div>
            <div className={cx("popup__interaction--right")}>
              <div className={cx("popup__icon")}>
                {/* <img className = 'popup__icon-image' src="../../assets/images/invite.png" alt="icon invite"> */}
              </div>
            </div>
          </div>
          <div className={cx("popup__button")} id="create-pop-up" onClick={() => {}}>
            <div>
              {todo} {title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupEdit;
