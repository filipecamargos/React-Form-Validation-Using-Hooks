import {useRef, useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState();

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameInputChangeHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
