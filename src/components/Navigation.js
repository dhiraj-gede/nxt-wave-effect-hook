import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  initializeModuleCompletion,
  markModuleCompleted,
} from "../redux/actions";
import BasicCard from "./Card/Card";
import { Button } from "@mui/material";
import { useStyles } from "../Custom/hooks/styles";

export default function Navigation() {
  const modules = [
    "What is Effect Hook?",
    "Side effects and synchronization?",
    "Syntax",
    "When to use Effect Hook",
    "Dependencies",
    "Things to avoid",
    "Cleanup function",
  ];
  const completedModules = useSelector((state) => state.completed);
  const initiatedModules = useSelector((state) => state.initiated);
  const dispatch = useDispatch();
  const [activeModule, setActiveModule] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    // Save completion data to localStorage on changes
    const saveToLocalStorage = () => {
      localStorage.setItem("completedModules", completedModules);
      localStorage.setItem("initiatedModules", initiatedModules);
    };
    console.log("Navigation", completedModules, initiatedModules, completedModules.includes(initiatedModules[0]));
    //set what is effect hook to completed
    // if(completedModules.completedModules.length === 0){
    // }
    saveToLocalStorage();
  }, [completedModules, initiatedModules]);
  

  return (
    <nav style={{ display: 'flex', flexWrap: 'wrap' }}>
      {modules.map((module, index) => (
        <div key={index}>
          {completedModules.includes(module) ? (
            <Link
                onClick={() => dispatch(initializeModuleCompletion(module))}
                to={`/nxt-wave-effect-hook/topics/${module.toLowerCase().replace(/ /g, '-')}`}
              key={module}
            >
              <BasicCard
                title={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* <FontAwesomeIcon icon={faCheck} color="green" /> */}
                    <i className="fa fa-solid fa-check"></i>
                    <span style={{ marginLeft: '5px' }}>{module}</span>
                  </div>
                }
                number={index}
                mode="completed"
                className={activeModule === module ? classes.activeCard : ''}
                onClick={() => setActiveModule(module)}
              />
            </Link>
          ) : initiatedModules.includes(module) &&
            !completedModules.includes(module) ? (
            <Link
              key={index}
                onClick={() => dispatch(initializeModuleCompletion(module))}
                className="module-link"
              to={`/nxt-wave-effect-hook/topics/${module.toLowerCase().replace(/ /g, '-')}`}
            >
              <BasicCard
                title={module}
                number={index}
                mode="active"
                className={activeModule === module ? classes.activeCard : ''}
                onClick={() => setActiveModule(module)}
              />
            </Link>
          ) : (
            <>
              <Link
                onClick={() => dispatch(initializeModuleCompletion(module))}
                to={`/nxt-wave-effect-hook/topics/${module.toLowerCase().replace(/ /g, '-')}`}
                key={module}
              >
                <BasicCard
                  title={module}
                  number={index}
                  mode="idle"
                  className={activeModule === module ? classes.activeCard : ''}
                  onClick={() => setActiveModule(module)}
                />
              </Link>
            </>
          )}
        </div>
      ))}
    </nav>
  );
}