import classNames from "classnames/bind";
import styles from "./Project.module.css"
const cx = classNames.bind(styles);

function Project({ primary, outline, title }) {

    const classes = cx("wrapper", {
        primary,
        outline
    })

    return (
      <div className= {classes} >
        {title}
      </div>
    );
  }

export default Project;

