import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  // #1 Option
  if (isRouteErrorResponse(error)) {
    if (error.status === 401) {
      // ...
    }
    else if (error.status === 404) {
      // ...
    }
    return (
      <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
      </div>
    );
  }
  // #2 Option 
  else if (error instanceof Error) {
    return(
    <div id="error-page">
      <h1>Oops! Unexpected Error</h1>
      <p>Something went wrong.</p>
      <p>
        <i>{error.message}</i>
      </p>
    </div>);
  }
  // #3 Option 
  else {
    return <></>;
  }
}