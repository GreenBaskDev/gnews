import React from "react";

import IcomoonReact from "icomoon-react";
import iconSet from "../../icons/selection.json";
import { props } from "../../type/components/icons";

const Icon: React.FC<props> = (props) => {
    
  const { color, size = "100%", icon, className } = props;
  
  return (

    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />

  );
};

export default Icon;