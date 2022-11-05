import classNames from "classnames/bind";
import styles from "./Project.module.css"
const cx = classNames.bind(styles);

function Project({ primary, outline, data }) {

    const classes = cx("wrapper", {
        primary,
        outline
    })

    return (
      <div className= {classes} onClick = {() => console.log(data._id)}>
        {data.name}
      </div>
    );
  }

export default Project;

