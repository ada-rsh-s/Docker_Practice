import React from "react";
import Fallback from "../components/Fallback";
import { ErrorBoundary } from "react-error-boundary";

const errorLogger = (error, errorInfo) => {
  console.log(error, errorInfo);
};

const ErrorHandler = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback} onError={errorLogger}>
      {children}
    </ErrorBoundary> 
  );
};

export default ErrorHandler;
