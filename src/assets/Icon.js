import Svg, { Path } from "react-native-svg";

const Arrow = () => (
  <Svg
    width={20}
    height={3}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.5 1.5H1.67"
      stroke="#fff"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export { Arrow };
