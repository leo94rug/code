import { useReducer } from 'react';


const inputStateReducer = (state: { isTouched: boolean; value: any; }, action: { type: string; value?: any; }) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return state;
};

const useInput = (validateValue?: (inputStateValue: any) => boolean, defaultValue?: any) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    {
      value: defaultValue === undefined || defaultValue === null ? '' : defaultValue,
      isTouched: false,
    }
  );
  const valueIsValid: boolean = (validateValue !== undefined) ? validateValue(inputState.value) : true;
  const hasError = !valueIsValid && inputState.isTouched;



  const valueChangeHandler = (event: { target: { value: any; }; }) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
