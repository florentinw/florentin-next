import PropTypes from "prop-types";
import { withTheme } from "styled-components";

const Icon = ({ width, height, strokeColor, theme.higherContrast, strokeWidth, children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 30}
    height={height || 30}
    viewBox="0 0 24 24"
    fill="none"
    stroke={strokeColor || theme.higherContrast}
    strokeWidth={strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "inline" }}
  >
    {children}
  </svg>
);

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.string
};

export default withTheme(Icon);