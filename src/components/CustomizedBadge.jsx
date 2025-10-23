
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { useState } from 'react';
import { Link } from 'react-router';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function CustomizedBadge() {
    // const [cartCount, setCartCount] = useState(0);

    return (
        <Link to="/addtocart">
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={2} color="primary">
                    <ShoppingCartIcon className="text-2xl" />
                </StyledBadge>
            </IconButton>
        </Link>
    );
}

