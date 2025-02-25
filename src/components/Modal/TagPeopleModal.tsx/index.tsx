import { useState } from "react";
import { listContact } from "../../../services/staticData";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";

export type Contact = {
  id: string;
  name: string;
  avatar: string;
  isTagged: boolean;
};

export type Tagged = Omit<Contact, "avatar" | "isTagged">;

const TagPeopleModal = ({
  toggleTagPeopleModal,
  taggedPeople,
  setTaggedPeople,
}: {
  toggleTagPeopleModal: () => void;
  taggedPeople: Tagged[];
  setTaggedPeople: React.Dispatch<React.SetStateAction<Tagged[]>>;
}) => {
  const [listSuggestion, setListSuggestion] = useState(
    listContact.map((item) => ({
      id: item.id,
      name: item.name,
      avatar: item.avatar,
      isTagged: false,
    }))
  );

  // const selectTagPeople = (contactId: string) => {
  //   setListSuggestion((prevState) =>
  //     prevState.map((contact) => {
  //       if (contact.id === contactId) {
  //         setTaggedPeople((prevTaggedPeople) => [
  //           ...prevTaggedPeople,
  //           { id: contact.id, name: contact.name },
  //         ]);
  //         return { ...contact, isTagged: true };
  //       }
  //       return contact;
  //     })
  //   );
  // };

  // const deselectTagPeople = (contactId: string) => {
  //   setListSuggestion((prevState) =>
  //     prevState.map((contact) => {
  //       if (contact.id === contactId) {
  //         setTaggedPeople((prevTaggedPeople) =>
  //           prevTaggedPeople.filter((tagged) => tagged.id !== contactId)
  //         );
  //         return { ...contact, isTagged: false };
  //       }
  //       return contact;
  //     })
  //   );
  // };

  // The combination of the 2 above
  const toggleTagPeople = (contactId: string) => {
    const selectedContact = listSuggestion.find(contact => contact.id === contactId);
    
    // If no selectedContact is found, the function stop execution here (prevent from accessing undefined value)
    if (!selectedContact) return;
  
    // Make a dynamic flag
    // Prevent DRY: Don't repeat yourself -> Repeat code is bad practice
    const isCurrentlyTagged = selectedContact.isTagged;
  
    // Update tagged people list
    setTaggedPeople(prevTaggedPeople => 
      isCurrentlyTagged
        ? prevTaggedPeople.filter(tagged => tagged.id !== contactId)
        : [...prevTaggedPeople, { id: selectedContact.id, name: selectedContact.name }]
    );
  
    // Update suggestion list
    setListSuggestion(prevState =>
      prevState.map(contact =>
        contact.id === contactId
          ? { ...contact, isTagged: !isCurrentlyTagged }
          : contact
      )
    );
  };

  const searchTagPeople = (contactName: string) => {
    const lowerCaseName = contactName.toLowerCase();
    setListSuggestion(() =>
      listContact
        .map((item) => ({
          id: item.id,
          name: item.name,
          avatar: item.avatar,
          isTagged: false,
        }))
        .filter((item) => item.name.toLowerCase().includes(lowerCaseName))
    );
  };

  return (
    <>
      <div className="fixed inset-0 bg-slate-500/70 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-lg p-4 relative">
          <ModalHeader taggedPeople={taggedPeople} toggleTagPeopleModal={toggleTagPeopleModal} />
          <ModalContent
            taggedPeople={taggedPeople}
            toggleTagPeopleModal={toggleTagPeopleModal}
            toggleTagPeople={toggleTagPeople}
            listSuggestion={listSuggestion}
            searchTagPeople={searchTagPeople}
          />
        </div>
      </div>
    </>
  );
};

export default TagPeopleModal;
