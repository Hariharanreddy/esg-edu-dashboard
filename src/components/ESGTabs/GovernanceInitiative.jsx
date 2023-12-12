"use client";

import React, { useLayoutEffect, useState } from "react";
import { EsgSDK } from "esg-sdk";
import InitiativeCard, { AddInitiativeCard } from "../InitiativeCard";

const ESG = EsgSDK.initialize();

const GovernanceInitiative = ({}) => {
  const [initiatives, setInitiatives] = useState([]);

  useLayoutEffect(() => {
    const getData = async () => {
      const files = await ESG.fetchFiles("governance");
      setInitiatives(files);
    };
    getData();
  }, []);
  return (
    <>
      <AddInitiativeCard dir='governance'/>
      {initiatives.map((initiative) => (
        <InitiativeCard
          title={initiative.name}
          key={initiative.sha}
          dir="governance"
        />
      ))}
    </>
  );
};

export default GovernanceInitiative;
