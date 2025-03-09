import type { ChangeEventHandler, FC } from 'react';

import { TextInput } from './SearchBox.styles';

interface Props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export const SearchBox: FC<Props> = ({ onChange, value }) => (
  <TextInput
    type="search"
    onChange={onChange}
    placeholder="Robot..."
    value={value}
  />
);
