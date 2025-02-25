import ModalContent from "./ModalContent"
import ModalHeader from "./ModalHeader"

const PostAudienceModal = ({closeSetAudienceModal, handleSelectAudience}: {closeSetAudienceModal: () => void; handleSelectAudience: (name: string) => void}) => {


  return (
    <> 
    <div className="fixed inset-0 bg-slate-500/70 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-lg p-4 relative">
          <ModalHeader closeSetAudienceModal={closeSetAudienceModal} />
          <ModalContent handleSelectAudience={handleSelectAudience} closeSetAudienceModal={closeSetAudienceModal}/>
       
        </div>
      </div>
    </>
  )
}

export default PostAudienceModal