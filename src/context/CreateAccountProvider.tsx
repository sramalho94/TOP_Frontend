import React, { useState } from 'react';
import CreateAccountContext, { FormState } from './CreateAccountContext';

interface CreateAccountProviderProps {
  children: React.ReactNode;
}

const CreateAccountProvider: React.FC<CreateAccountProviderProps> = ({ children }) => {
  const [formState, setFormState] = useState<FormState>({
    username: '',
    email: '',
    password: '',
    DOB: '',
    ZIP: '',
    gender: '',
    race: '',
    ethnicity: '',
    state: '',
    firstName: ''
  });

  const initialFormState = {
    username: '',
    email: '',
    password: '',
    DOB: '',
    ZIP: '',
    gender: '',
    race: '',
    ethnicity: '',
    state: '',
    firstName: ''
  }

  const updateFormState = (field: string, value: string) => {
    setFormState((prevState: any) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const resetFormState = () => {
    setFormState(initialFormState);
  };

  return (
    <CreateAccountContext.Provider value={{ formState, updateFormState, resetFormState }}>
      {children}
    </CreateAccountContext.Provider>
  );
};

export default CreateAccountProvider;