import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';  // ✅ Correct import
import { useCart } from "@/context/cartcontext.jsx";
// ✅ Import your cart hook

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function CustomizedBadge() {
    const { cartCount } = useCart(); // ✅ Access global cart count

    return (
        <Link to="/cart"> {/* ✅ Correct path (same as route name) */}
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartCount} color="primary">
                    <ShoppingCartIcon className="text-2xl" />
                </StyledBadge>

            </IconButton>
        </Link>
    );
}
