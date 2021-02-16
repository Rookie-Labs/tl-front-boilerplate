// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRecoilState } from 'recoil';
import atomTheme from '../store/layout.atoms';

const Button = () => {
  const [theme, setTheme] = useRecoilState(atomTheme);

  // eslint-disable-next-line prettier/prettier
  const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');
  
  return (
    <button type="button" className="main__cta" onClick={() => toggleTheme()}>
      {theme === 'light' ? 'Turn the lights off' : 'Turn the lights on'}
    </button>
  );
};

export default Button;
