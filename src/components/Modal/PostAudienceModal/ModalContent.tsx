import { FormEvent } from "react";
import { audienceOption } from "../../../services/AudienceOptions";

const ModalContent = ({
  toggleSetAudienceModal,
  handleSelectAudience,
  setAudienceDescription
}: {
  toggleSetAudienceModal: () => void;
  handleSelectAudience: (name: string) => void;
  setAudienceDescription: (description: string) => void
}) => {
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // FormData: tạo 1 object có các cặp key-value là các fields của form và values của chúng
    // Method 'get' của FormData: Lấy giá trị của field có name tương ứng, nhưng chỉ trả về giá trị đầu tiên.
    // Để lấy tất cả giá trị, sử dụng 'getAll'
    const formData = new FormData(e.currentTarget)
    const selectedAudience = formData.get('audience-select') as string;
    if (selectedAudience) {
      // 'find' is an effective way to extract ONE object in an object literal 
      const selectedOption = audienceOption.find(option => option.title === selectedAudience)
      handleSelectAudience(selectedAudience)
      if (selectedOption) {
        setAudienceDescription(selectedOption.description)
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="max-h-78 overflow-auto">
        {audienceOption.map((item) => {
          return (
            <>
              <div className="flex space-x-4 relative hover:bg-gray-300/50 hover:cursor-pointer p-2 rounded-2xl">
                {/* CSS: 'inline': Display inline and can only be set spacing of left and right*/}
                {/* CSS: 'inline-block': Act like 'inline' but can be set spacing of top, bottom, left, right */}
                <label
                  htmlFor={item.id}
                  className="flex w-full space-x-2 select-none"
                >
                  <div className="inline-block rounded-full bg-gray-500/60 p-5">
                    <img src={item.icon} alt="" className="w-8 h-8" />
                  </div>
                  <div className=" my-auto">
                    <p className="text-xl">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                </label>
                <input
                  type="radio"
                  name="audience-select"
                  id={item.id}
                  value={item.title}
                  className="absolute right-2 top-10"
                />
              </div>
            </>
          );
        })}
        </div>

        <div className="border border-slate-500/50"></div>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="bg-white text-blue-500 hover:cursor-pointer hover:bg-gray-300/50 rounded-md px-6 py-2"
            onClick={toggleSetAudienceModal}
          >
            Cancel
          </button>
          <button
          type="submit"
            className="bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-600 rounded-md px-6 py-2"
            
          >
            Done
          </button>   
        </div>
      </form>
    </>
  );
};

export default ModalContent;
