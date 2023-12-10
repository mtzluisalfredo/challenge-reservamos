import React from 'react';
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';
import { useTheme } from '@chakra-ui/react';
import PinIcon from '../Icons';

const DefaultSelect = ({ promiseOptions, ...props }: { promiseOptions: any }) => {
  const theme = useTheme();

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: theme.colors.white,
      borderRadius: theme.radii.md,
      border: `1px solid ${theme.colors.gray[200]}`,
    }),
    container: (provided: any) => ({
      ...provided,
      width: '100%',
    }),
    indicatorSeparator: () => ({ display: 'none' }),
  };

  const DropdownIndicator = (props: any) => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <PinIcon color='gray.300' />
        </components.DropdownIndicator>
      )
    );
  };

  const Menu = (props: any) => {
    if (props.options.length === 0) {
      return null;
    }
    return (
      <components.Menu {...props}>
        {props.children}
      </components.Menu>
    );
  };


  return (
    <AsyncSelect
      styles={customStyles}
      {...props}
      components={{
        DropdownIndicator: DropdownIndicator,
        Menu: Menu,
      }}
      loadOptions={promiseOptions}
    />
  );
};

export default DefaultSelect;
