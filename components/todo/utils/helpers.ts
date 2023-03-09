const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink',
  ];

  
  export const genRandomChakraColor = (variant = '') => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color + variant;
  }
