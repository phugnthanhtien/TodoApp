import styles from "./PopupEdit.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function PopupEdit({ title, close }) {
    return (
      <div className={cx("wrapper")}>
        <div className={cx(["popup", "animate"])}>
          <div className="close" onClick={close}>
            <svg
              className={cx("icon")}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              height="1em"
              width="1em"
            >
              <g>
                <path d="M45.363,36.234l-13.158-13.16l12.21-12.21c2.31-2.307,2.31-6.049,0-8.358c-2.308-2.308-6.05-2.307-8.356,0l-12.212,12.21   L11.038,1.906c-2.309-2.308-6.051-2.308-8.358,0c-2.307,2.309-2.307,6.049,0,8.358l12.81,12.81L1.732,36.831   c-2.309,2.31-2.309,6.05,0,8.359c2.308,2.307,6.049,2.307,8.356,0l13.759-13.758l13.16,13.16c2.308,2.308,6.049,2.308,8.356,0   C47.673,42.282,47.672,38.54,45.363,36.234z" />
              </g>
            </svg>
          </div>
          <div className={cx("title")}>
            <h1>{title}</h1>
          </div>
          <div className={cx("content")}>
            <input className={cx("input")} placeholder={title} />
          </div>
          <div className={cx("button")}>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    );
}

export default PopupEdit;
