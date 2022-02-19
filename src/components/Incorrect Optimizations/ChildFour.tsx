import * as React from 'react';

interface IChildFOurProps { 
    name: string;
}

const ChildFOur: React.FunctionComponent<IChildFOurProps> = ({name}) => {
    const date = new Date();
    console.log('Child Four Render');
    
  return (
      <div>
          Hello {name}. It is currently {date.getHours()}: {date.getMinutes()}: {date.getSeconds()}
      </div>
  );
};

export default React.memo(ChildFOur);
