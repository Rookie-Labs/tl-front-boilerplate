import React from 'react';

const Button = () => {
  // Subscribe here to state value
  const lightTheme = true;

  return (
    // Toggle style and copy according to selected theme
    <button type="button" className="main__cta">
      {lightTheme ? 'Turn the lights off' : 'Turn the lights on'}
    </button>
  );
};

export default Button;
