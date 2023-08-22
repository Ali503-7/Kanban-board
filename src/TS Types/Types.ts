import React from "react";

export interface StagesProps {
  children?: React.ReactNode;
}

export interface PropsInterface {
  stageTitle?: string;
  notStarted?: string[];
  setNotStarted?: React.Dispatch<React.SetStateAction<string[]>>;
  inProgress?: string[];
  setInProgress?: React.Dispatch<React.SetStateAction<string[]>>;
  completed?: string[];
  setCompleted?: React.Dispatch<React.SetStateAction<string[]>>;

}

export interface Props {
  PropsData: {
      notStarted?: string[];
  setNotStarted?: React.Dispatch<React.SetStateAction<string[]>>;
  inProgress?: string[];
  setInProgress?: React.Dispatch<React.SetStateAction<string[]>>;
  completed?: string[];
  setCompleted?: React.Dispatch<React.SetStateAction<string[]>>;
  }
}