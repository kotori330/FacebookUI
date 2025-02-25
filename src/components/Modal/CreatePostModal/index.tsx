import { useState } from "react";
import ModalContent from "./ModalContent";

import ModalHeader from "./ModalHeader";
import PostAudienceModal from "../PostAudienceModal";
import TagPeopleModal, { Tagged } from "../TagPeopleModal.tsx";
import SetFeelingModal from "../SetFeelingModal/index.tsx";

const PostModal = ({ closeModal }: { closeModal: () => void }) => {
  const [audience, setAudience] = useState("Public");
  const [audienceDescription, setAudienceDescription] =
    useState("Anyone on Facebook");
  const [openSetAudience, setOpenSetAudience] = useState(false);
  const [openTagPeopleToPost, setopenTagPeopleToPost] = useState(false);
  const [taggedPeople, setTaggedPeople] = useState([] as Tagged[]);
  const [openSetFeelingToPostModal, setOpenSetFeelingToPostModal] =
    useState(false);

  const toggleTagPeopleModal = () => {
    setopenTagPeopleToPost((prev) => !prev);
  };

  const toggleSetAudienceModal = () => {
    setOpenSetAudience((prev) => !prev);
  };

  const handleSelectAudience = (name: string) => {
    setAudience(name);
    toggleSetAudienceModal();
  };

  const addPhotoToPost = () => {};
  const toggleSetFeelingToPostModal = () => {
    setOpenSetFeelingToPostModal((prev) => !prev);
  };
  const handlePost = () => {};

  return (
    <>
      <div className="fixed inset-0 bg-slate-500/70 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-lg p-4 relative">
          <ModalHeader closeModal={closeModal} />
          <ModalContent
            audience={audience}
            audienceDescription={audienceDescription}
            taggedPeople={taggedPeople}
            toggleSetAudienceModal={toggleSetAudienceModal}
            toggleTagPeopleModal={toggleTagPeopleModal}
            addPhotoToPost={addPhotoToPost}
            toggleSetFeelingToPostModal={toggleSetFeelingToPostModal}
            handlePost={handlePost}
          />
        </div>
      </div>

      {openSetAudience && (
        <PostAudienceModal
          handleSelectAudience={handleSelectAudience}
          setAudienceDescription={setAudienceDescription}
          toggleSetAudienceModal={toggleSetAudienceModal}
        />
      )}
      {openTagPeopleToPost && (
        <TagPeopleModal toggleTagPeopleModal={toggleTagPeopleModal} taggedPeople={taggedPeople} setTaggedPeople={setTaggedPeople}/>
      )}
      {openSetFeelingToPostModal && (
        <SetFeelingModal
          toggleSetFeelingToPostModal={toggleSetFeelingToPostModal}
        />
      )}
    </>
  );
};

export default PostModal;
