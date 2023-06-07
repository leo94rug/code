import ErrorProps from "../models/types/ErrorProps";

const ErrorsViewer: React.FC<ErrorProps> = ({ error }) => {

    return (
        <>
            {error && error.errors && (
                <ul>
                    {Object.values(error.errors).map((err) => (
                        <li key={err}>{err}</li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default ErrorsViewer;



