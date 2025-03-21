import { useState, useEffect } from "react";

/**
 * Candle Component
 * 
 * This component creates an animated candle with a flame that simulates the candle burning down.
 * It demonstrates the use of useEffect to create a recurring interval timer that updates state.
 * The candle height decreases over time and resets when it reaches a minimum height.
 */
const Candle = () => {
  // State to track the candle height as a percentage (100% = full height, 0% = completely burned)
  const [candleHeight, setCandleHeight] = useState(100);

  useEffect(() => {
    // Set up an interval that runs every 2 seconds (2000ms)
    const interval = setInterval(() => {
      // Update candleHeight using a functional state update to ensure we're working with the latest state
      setCandleHeight((prev) => {
        // If the candle is almost burnt out (height <= 10%), reset it to full height (100%)
        if (prev <= 10) return 100;
        // Otherwise, reduce the candle height by 10%
        return prev - 10;
      });
    }, 2000);

    // Cleanup function to clear the interval when the component unmounts
    // This prevents memory leaks by stopping the interval timer
    return () => clearInterval(interval);
  }); // No dependency array means this effect runs after every render

  return (
    <div className="exercise">
      {/* Container that changes height based on the candleHeight state */}
      <div className="candleContainer" style={{ height: `${candleHeight}%` }}>
        <div className="candle">
          {/* Flame components (visual elements for the candle flame) */}
          <div className="flame">
            <div className="shadows" />
            <div className="top" />
            <div className="middle" />
            <div className="bottom" />
          </div>
          {/* Wick of the candle */}
          <div className="wick" />
          {/* Wax body of the candle */}
          <div className="wax" />
        </div>
      </div>
    </div>
  );
};

export default Candle;
