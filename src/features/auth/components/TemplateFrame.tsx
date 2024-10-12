import * as React from 'react';
import {
  PaletteMode,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
// import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
// import ToggleColorMode from './ToggleColorMode';
// import getSignUpTheme from './theme/getSignUpTheme';

interface TemplateFrameProps {
  showCustomTheme: boolean;
  toggleCustomTheme: (theme: boolean) => void;
  mode: PaletteMode;
  toggleColorMode: () => void;
  children: React.ReactNode;
}

export default function TemplateFrame({
  children,
}: TemplateFrameProps) {


  return (
    <>
      <Box sx={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ flex: '1 1', overflow: 'auto' }}>{children}</Box>
      </Box>
    </>
  );
}