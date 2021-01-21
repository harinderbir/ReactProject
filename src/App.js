import React from "react";
import Link from "../Components/linkComponent";
import Calendar from "../Components/calendarComponent";
import Video from "../Components/videoComponent";
import "../Assets/background.png";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>JENNA HERRERA</h1>
      <h2>THE MONEY MOM!</h2>
      <Video />
      <Link sourceLink="Scheduler" divLabel="Let's Talk Finances" />
      <Link sourceLink="Scheduler" divLabel="Let's Talk Opportunity" />
      <Calendar />
    </div>
  );
}
