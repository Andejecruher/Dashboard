// Desc: ErrorPage page
import { useRouteError } from "react-router-dom";

// page component
const ErrorPage: React.FC = () => {
    const error: any = useRouteError();

    return (
        <div id="error-page" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
            <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
            <p className="text-xl mb-2">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg text-gray-700">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

// export
export default ErrorPage