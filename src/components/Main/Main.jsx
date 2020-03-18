import React from "react";

import { testIds } from "./testIds";

import main from "./Main.module.css";

export const Main = () => {
  return <div className={main.main} data-testid={testIds.main}></div>;
};