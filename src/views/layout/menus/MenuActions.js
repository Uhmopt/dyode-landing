import { Person, Search, ShoppingCart } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function MenuActions() {
  return (
    <div className="flex items-center">
      {[
        { icon: <Search /> },
        { icon: <Person /> },
        { icon: <ShoppingCart /> },
      ].map((item, itemIndex) => (
        <IconButton key={itemIndex} size="small" color="inherit">
          {item.icon ?? null}
        </IconButton>
      ))}
    </div>
  );
}
