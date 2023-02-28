import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/InlineStyle";
import { StyleJsx } from "./components/Styled.jsx";
import { StyledComponents } from "./components/StyledComponents";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyleJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
