import React from 'react';

interface FormState {
  username: string;
  email: string;
  password: string;
  // Add other form fields here
}

interface CreateAccountContextProps {
  formState: FormState;
  updateFormState: (updates: Partial<FormState>) => void;
}

const CreateAccountContext = React.createContext<CreateAccountContextProps>({
  formState: {
    username: '',
    email: '',
    password: '',
  },
  updateFormState: () => {},
});

export default CreateAccountContext;