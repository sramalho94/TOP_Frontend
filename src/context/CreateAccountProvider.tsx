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
  });

  const updateFormState = (updates: Partial<FormState>) => {
    setFormState((prevState) => ({
      ...prevState,
      ...updates,
    }));
  };

  return (
    <CreateAccountContext.Provider value={{ formState, updateFormState }}>
      {children}
    </CreateAccountContext.Provider>
  );
};

export default CreateAccountProvider;