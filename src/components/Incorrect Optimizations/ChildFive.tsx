import * as React from 'react';

interface IChildFiveProps {
    name: string;
    person:{
        fname: string;
        lname: string;
    }
}

const ChildFive: React.FunctionComponent<IChildFiveProps> = ({name, person}) => {
    console.log('ChildFive');
    
  return (
      <div>
          Hello {name} {person.fname} {person.lname}
      </div>
  );
};

export default React.memo(ChildFive); 