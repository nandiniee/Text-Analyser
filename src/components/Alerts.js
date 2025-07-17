import React from "react";

export default function Alerts(props) {
  return (
    props.message && (
      <div
        className={`alert alert-${props.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.type}</strong> {props.message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
