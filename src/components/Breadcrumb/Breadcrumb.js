import React from "react";
import styles from "./Breadcrumb.module.css";
/**
 *
 * @param {*} props - array of navigation headers
 */
export default function Breadcrumb(props) {
  const headers = props.headers.map((elem, id) => {
    return (
      <span key={id} style={{ paddingTop: "5px" }}>
        <span
          className={styles.Header}
          onClick={() => props.click(elem)}
          style={
            elem === props.focused
              ? { borderBottom: "1px solid #666666" }
              : null
          }
        >
          {elem}
        </span>
        {id !== props.headers.length - 1 ? (
          <span style={{ marginRight: "5px", marginLeft: "5px" }}> / </span>
        ) : null}
      </span>
    );
  });
  return <div className={styles.Headers}>{headers}</div>;
}
