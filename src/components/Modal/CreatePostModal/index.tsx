import { useState } from "react";
import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";
import PostAudienceModal from "../PostAudienceModal";
import TagPeopleModal, { Tagged } from "../TagPeopleModal.tsx";
import SetFeelingModal from "../SetFeelingModal/index.tsx";
import { PostData } from "../../Layout/Content/index.tsx";

const PostModal = ({
  postContext,
  setPostContext,
  handlePostCreate,
  closeModal,
}: {
  postContext: string;
  setPostContext: (text: string) => void;
  handlePostCreate: (postData: PostData) => void;
  closeModal: () => void;
}) => {
  const [dropzone, setDropzone] = useState(false);
  const [audience, setAudience] = useState("Public");
  const [audienceDescription, setAudienceDescription] =
    useState("Anyone on Facebook");
  const [feeling, setFeeling] = useState("");
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

  const toggleDropzone = () => {
    setDropzone((prev) => !prev);
  };

  const toggleSetFeelingToPostModal = () => {
    setOpenSetFeelingToPostModal((prev) => !prev);
  };

  const handleSetFeeling = (itemName: string) => {
    setFeeling(itemName.toLowerCase());
    toggleSetFeelingToPostModal();
  };

  return (
    <>
      <div className="fixed inset-0 bg-slate-500/70 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-lg p-4 relative">
          <ModalHeader closeModal={closeModal} />
          <ModalContent
            postContext={postContext}
            setPostContext={setPostContext}
            dropzone={dropzone}
            audience={audience}
            audienceDescription={audienceDescription}
            taggedPeople={taggedPeople}
            feeling={feeling}
            toggleSetAudienceModal={toggleSetAudienceModal}
            toggleTagPeopleModal={toggleTagPeopleModal}
            toggleDropzone={toggleDropzone}
            toggleSetFeelingToPostModal={toggleSetFeelingToPostModal}
            handlePostCreate={handlePostCreate}
            closeModal={closeModal}
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
        <TagPeopleModal
          toggleTagPeopleModal={toggleTagPeopleModal}
          taggedPeople={taggedPeople}
          setTaggedPeople={setTaggedPeople}
        />
      )}
      {openSetFeelingToPostModal && (
        <SetFeelingModal
          toggleSetFeelingToPostModal={toggleSetFeelingToPostModal}
          handleSetFeeling={handleSetFeeling}
        />
      )}
    </>
  );
};

export default PostModal;
