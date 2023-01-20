import { useRouteError } from "react-router-dom";

export default function ErrorElement() {
  const { status, statusText } = useRouteError();
  return (
    <div className="page-not-found">
      <h2>
        Error Status : {status} | {statusText}
      </h2>
    </div>
  );
}
