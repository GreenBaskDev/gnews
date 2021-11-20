import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { useResolvedPath, useMatch } from "react-router-dom";
import { props } from "../../type/components/link";


const CustomLink:FC<props> = ({ children, to, ...props }: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && " (active)"}
      </div>
    );
}

export default CustomLink;