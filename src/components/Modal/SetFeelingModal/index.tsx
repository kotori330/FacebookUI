import ModalContent from "./ModalContent"
import ModalHeader from "./ModalHeader"

const SetFeelingModal = ({toggleSetFeelingToPostModal}: {toggleSetFeelingToPostModal: () => void}) => {
const searchFeeling = (itemName: string) => {
  
}

  return (
    <>
      <div className="fixed inset-0 bg-slate-500/70 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-lg p-4 relative">
          <ModalHeader toggleSetFeelingToPostModal={toggleSetFeelingToPostModal} />
          <ModalContent searchFeeling={searchFeeling}
            
          />
        </div>
      </div>
    </>
  )
}

export default SetFeelingModal