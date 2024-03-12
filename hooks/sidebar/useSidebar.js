import React, { useState } from "react";

const useSidebar = () => {
  const [active, setActive] = useState(false);

  return { active, setActive };
};

export default useSidebar;
