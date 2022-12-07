import {useState} from 'react';

export default function clamp (value1 , value2) {
  const min = value1;
  const max = value2;

  const [value, setValue] = useState(1);

  const handleChange = event => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setValue(value);
    
  }
}