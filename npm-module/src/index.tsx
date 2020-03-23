import * as React from "react";

export type Props = { text: string };

const ExampleComponent: React.FC<Props> = props => {
  const { text } = props;
  return <div style={{ color: "white" }}>Hello {text}, this is a npm module!</div>;
};

export default ExampleComponent;
