//
import Card from './Card';
import Input from './Input';
import Button from './Button';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Card(theme),
    Input(theme),
    Button(theme)
  );
}
