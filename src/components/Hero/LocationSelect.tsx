import React from 'react';
import AsyncSelect from 'react-select/async';
import { components } from 'react-select';
import { useTheme } from '@chakra-ui/react';
import PinIcon from '../Icons';

interface IDefaultSelect { promiseOptions: any; onSelect?: (p?: any) => void }

const DefaultSelect = ({ promiseOptions, onSelect, ...props }: IDefaultSelect) => {
  const theme = useTheme();

  const customStyles = {
    menu: (provided: any, state: any) => ({
      ...provided,
      zIndex: 1000, // Ajusta el valor según sea necesario para superponerse a otros elementos
    }),
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
    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      padding: '0px 10px',
    }),
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
      menuIsOpen={true}
      loadOptions={promiseOptions}
      menuPlacement='auto'
      onChange={(choice) => {
        if (onSelect) {
          onSelect(choice)
        }
      }}
    />
  );
};

export default DefaultSelect;
