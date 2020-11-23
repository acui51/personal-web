import React from "react";
import styles from "./Breadcrumb.module.css";
/**
 *
 * @param {*} props - array of navigation headers
 */
export default function Breadcrumb(props) {
  const headers = props.headers.map((elem, id) => {
    return (
      <span key={id}>
        <a
          className={styles.Header}
          onClick={() => props.click(elem)}
          style={elem === props.focused ? { color: "black" } : null}
        >
          {elem}
        </a>
        {id !== props.headers.length - 1 ? (
          <span style={{ marginRight: "5px", marginLeft: "5px" }}> / </span>
        ) : null}
      </span>
    );
  });
  return <div className={styles.Headers}>{headers}</div>;
}
