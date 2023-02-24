
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledNavItem = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

function NavItem({ item }) {
  const { title, path } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        pl: 2,
        mb: 2,
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <ListItemText disableTypography primary={title} />
    </StyledNavItem>
  );
}
