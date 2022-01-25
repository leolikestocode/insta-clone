import { useCallback, useContext, useEffect, useState } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";

import { Context } from "../context/ContextProvider";
import BaseModal from "./BaseModal";

function ModalStory() {
  const [percentageStatus, setPercentageStatus] = useState(0);
  const {
    modalStory,
    setModalStory,
    currentStory,
    setCurrentStory,
    suggestions,
  } = useContext(Context);

  const updateStory = useCallback(
    (type: "prev" | "next") => {
      const { items } = suggestions || {};

      const findCurrent = items.findIndex(
        (s) => s.email === currentStory.email
      );
      if (type === "prev") {
        if (findCurrent !== 0) setCurrentStory(items[findCurrent - 1]);

        return;
      }

      if (findCurrent !== items.length - 1) {
        setCurrentStory(items[findCurrent + 1]);
      } else {
        setModalStory(false);
      }
    },
    [currentStory.email, setCurrentStory, setModalStory, suggestions]
  );

  useEffect(() => {
    setPercentageStatus(0);
  }, [currentStory]);

  useEffect(() => {
    if (modalStory) {
      const timeout = setTimeout(() => {
        setPercentageStatus((prev) => prev + 1.5);
      }, 50);

      if (percentageStatus >= 100) {
        updateStory("next");
      }

      return () => clearTimeout(timeout);
    }
  }, [percentageStatus, modalStory, updateStory]);

  return (
    <BaseModal show={modalStory} onClose={() => setModalStory(false)}>
      <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all w-full top-10 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:py-6 sm:px-10">
        <div
          onClick={() => updateStory("prev")}
          className="absolute left-1 top-1/2"
        >
          <ArrowLeftIcon className="arrow" />
        </div>
        <div
          onClick={() => updateStory("next")}
          className="absolute right-1 top-1/2"
        >
          <ArrowRightIcon className="arrow" />
        </div>
        <div className="flex flex-col">
          <div className="relative">
            <div className="h2 w-full rounded-md border border-gray-300 absolute top-0 left-0"></div>
            <div
              className={`h2 rounded-md border border-gray-700 absolute top-0 left-0`}
              style={{ width: `${percentageStatus}%` }}
            ></div>
          </div>
          <div className="flex items-center my-4">
            <img
              src={currentStory.picture.large}
              alt={currentStory.email}
              className="rounded-full w-10"
            />
            <span className="ml-4 font-bold">
              {currentStory.name.first} {currentStory.name.last}
            </span>
          </div>
          <img
            src={currentStory.picture.large}
            alt={currentStory.email}
            className="object-cover w-full"
          />
        </div>
      </div>
    </BaseModal>
  );
}

export default ModalStory;
