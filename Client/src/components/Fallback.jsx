import "../styles/Error.css";
import FlexContainer from "../utils/FlexContainer";
const Fallback = ({ error, resetErrorBoundary }) => {
  return (
    <>
      <FlexContainer>
        <div>
          <h1>Evdeyo entho oru thakarar pole !</h1>
          <p>{error.message}</p>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
        <img src="/Images/Error.svg" alt="Error" />
      </FlexContainer>
    </>
  );
};

export default Fallback;
