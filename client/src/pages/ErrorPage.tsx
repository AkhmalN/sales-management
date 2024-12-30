import { useNavigate, useRouteError } from "react-router-dom";

type ErrorMessage = {
  statusText: string;
  message: string;
  status: number;
  error: { message: string; stack: string };
};

export default function ErrorPage() {
  const error = useRouteError() as ErrorMessage;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/beranda");
  };

  return (
    <div
      id="error-page"
      className="relative flex flex-col w-full h-dvh justify-center items-center bg-primary text-typography gap-8"
    >
      <h1 className="text-5xl font-bold">Oops!</h1>
      <p className="text-xl font-light italic tracking-wider">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-2xl font-medium leading-3 flex gap-1">
        <i>{error.status}</i>
        <i>
          {error.error.message.includes("No route matches URL") && (
            <pre>Page</pre>
          )}
        </i>
        <i> {error.statusText}</i>
      </p>
      <button onClick={handleNavigate}>Back</button>
    </div>
  );
}
