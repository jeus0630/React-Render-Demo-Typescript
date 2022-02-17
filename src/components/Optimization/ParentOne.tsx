import React, {FunctionComponent, useState} from 'react';

interface OwnProps {
    children: JSX.Element;
}

type Props = OwnProps;

const ParentOne: FunctionComponent<Props> = ({children}) => {
  const [count, setCount] = useState(0);

  console.log('ParentOne Render');
  return (
      <div>
        <button onClick={() => setCount(prev => prev + 1)}>Count - {count}</button>
          {children}
      </div>
  );
};

export default ParentOne;