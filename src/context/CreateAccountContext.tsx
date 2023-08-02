import React from 'react';

export interface FormState {
  username: string;
  email: string;
  password: string;
  DOB: string;
  ZIP: string;
  gender: string;
  race: string;
  ethnicity: string;
  state: string;
  firstName: string;
}

// comment for push
interface CreateAccountContextProps {
  formState: FormState;
  updateFormState: (field: keyof FormState, value: string) => void;
}

const CreateAccountContext = React.createContext<CreateAccountContextProps>({
  formState: {
    username: '',
    email: '',
    password: '',
    DOB: '',
    ZIP: '',
    gender: '',
    race: '',
    ethnicity: '',
    state: '',
    firstName: '',
  },
  updateFormState: () => {},
});

export default CreateAccountContext;
