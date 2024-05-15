import "./App.css";
import Countdown, { CountdownRenderProps } from "react-countdown";

function App() {
  // Random component
  const Completionist = () => <h2>Jazda!</h2>;

  // Renderer callback with condition
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <>
          <h2>Do wakacji zostało:</h2>{" "}
          <h2>
            {days} dni {hours} godzin {minutes} minut {seconds} sekund
          </h2>
        </>
      );
    }
  };

  return (
    <>
      <Countdown date={new Date("2024-07-22T17:05")} renderer={renderer} />
    </>
  );
}

export default App;
