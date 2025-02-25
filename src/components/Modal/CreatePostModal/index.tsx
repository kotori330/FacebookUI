import { useState } from "react";
import ModalContent from "./ModalContent";

import ModalHeader from "./ModalHeader";
import PostAudienceModal from "../PostAudienceModal";

const PostModal = ({ closeModal }: { closeModal: () => void }) => {
  const [audience, setAudience] = useState("Public")
  const [openSetAudience, setOpenSetAudience] = useState(false)
  const openSetAudienceModal = () => {
    setOpenSetAudience(true)
  };

  const closeSetAudienceModal = () => {
    setOpenSetAudience(false)
  }

  const handleSelectAudience = (name: string) => {
    setAudience(name)
    closeSetAudienceModal();
  }

  const addPhotoToPost = () => {};
  const tagPeopleToPost = () => {};
  const setFeelingToPost = () => {};
  const handlePost = () => {};

  return (
    <>
      <div className="fixed inset-0 bg-slate-500/70 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-lg p-4 relative">
          <ModalHeader closeModal={closeModal} />
          <ModalContent openSetAudienceModal={openSetAudienceModal} />
       
        </div>
      </div>

      {openSetAudience && <PostAudienceModal handleSelectAudience={handleSelectAudience} closeSetAudienceModal={closeSetAudienceModal}/>}
    </>
  );
};

export default PostModal;
