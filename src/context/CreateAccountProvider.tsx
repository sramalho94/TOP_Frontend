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
  });

  const updateFormState = (field: string, value: string) => {
    setFormState((prevState: any) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <CreateAccountContext.Provider value={{ formState, updateFormState }}>
      {children}
    </CreateAccountContext.Provider>
  );
};

export default CreateAccountProvider;