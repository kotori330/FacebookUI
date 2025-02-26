import { useState } from "react";
import { Feelings } from "../../../services/Feelings";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";

export type Feeling = {
  id: string;
  name: string;
  emoji: string;
  isSelected: boolean;
};

const SetFeelingModal = ({
  toggleSetFeelingToPostModal,
  handleSetFeeling,
}: {
  toggleSetFeelingToPostModal: () => void;
  handleSetFeeling: (itemName: string) => void;
}) => {
  const [listFeeling, setListFeeling] = useState(
    Feelings.map((item) => {
      return {
        id: item.id,
        name: item.name,
        emoji: item.emoji,
        isSelected: false,
      };
    })
  );
  
  const searchFeeling = (itemName: string) => {
    const lowerCaseName = itemName.toLowerCase();
    setListFeeling(() => 
      Feelings.map((item) => ({
        id: item.id,
        name: item.name,
        emoji: item.emoji,
        isSelected: false,
      }))
      .filter((item) => item.name.toLowerCase().includes(lowerCaseName))
    );
  };
  
  return (
    <>
      <div className="fixed inset-0 bg-slate-500/70 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-lg p-4 relative">
          <ModalHeader
            toggleSetFeelingToPostModal={toggleSetFeelingToPostModal}
          />
          <ModalContent
            listFeeling={listFeeling}
            searchFeeling={searchFeeling}
            handleSetFeeling={handleSetFeeling}
          />
        </div>
      </div>
    </>
  );
};

export default SetFeelingModal;

