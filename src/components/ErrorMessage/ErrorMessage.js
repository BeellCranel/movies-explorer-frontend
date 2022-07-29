import "./ErrorMessage.scss";

function ErrorMessage({ error }) {
  return <p className="error-message">{ error.message }</p>;
}

export default ErrorMessage;
