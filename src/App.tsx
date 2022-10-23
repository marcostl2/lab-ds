import { Button } from './components/Button';
import { TextInput } from './components/TextInput';

import { Envelope, LockSimple } from 'phosphor-react';
import { Logo } from './assets/Logo';

import './styles/global.css';

function App() {
  return (
    <div className="bg-gray-900 w-screen h-screen flex items-center justify-center">
      <form onSubmit={() => {}} className="min-w-[500px] p-4 rounded-lg ">
        <Logo className="w-96 h-w-96 animate-rotate mx-auto mb-8" />
        <TextInput.Root className="mb-4">
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input placeholder="Email" />
        </TextInput.Root>
        <TextInput.Root className="mb-8">
          <TextInput.Icon>
            <LockSimple />
          </TextInput.Icon>
          <TextInput.Input placeholder="Password" type={'password'} />
        </TextInput.Root>
        <Button type="button">Sing in</Button>
      </form>
    </div>
  );
}

export default App;
