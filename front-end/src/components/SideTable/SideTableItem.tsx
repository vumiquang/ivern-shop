import React from "react";
import Image from "next/image";
import Link from "next/link";

import srcImage from "../../assets/images/img_seater_1.png";

const SideTableItem = () => {
  return (
    <div>
      <Image alt="seater" src={srcImage} />
    </div>
  );
};

export default SideTableItem;
