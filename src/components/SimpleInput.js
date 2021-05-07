import {useRef, useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [validEnteredName, setValidEnteredName] = useState(true);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    //Validation
    if (enteredName.trim() === '') {
      setValidEnteredName(false); 

      return;
    }
    
    setValidEnteredName(true)

    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameInputChangeHandler}/>
        {!validEnteredName && <p className={'error-text'}>Name must not be empty!</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
