import ModalContent from "./ModalContent";
import ModalHeader from "./ModalHeader";

const PostAudienceModal = ({
  toggleSetAudienceModal,
  handleSelectAudience,
  setAudienceDescription,
}: {
  toggleSetAudienceModal: () => void;
  handleSelectAudience: (name: string) => void;
  setAudienceDescription: (description: string) => void;
}) => {
  return (
    <>
      <div className="fixed inset-0 bg-slate-500/70 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-lg p-4 relative">
          <ModalHeader toggleSetAudienceModal={toggleSetAudienceModal} />
          
          <ModalContent
          setAudienceDescription={setAudienceDescription}
            handleSelectAudience={handleSelectAudience}
            toggleSetAudienceModal={toggleSetAudienceModal}
          />
         
        </div>
      </div>
    </>
  );
};

export default PostAudienceModal;
