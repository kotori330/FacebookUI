import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const ImageVideoDropzone = ({
  className,
  toggleDropzone,
}: {
  className?: string;
  toggleDropzone: () => void;
}) => {
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length) {
      setFiles((prevFiles) => [
        ...prevFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps({ className: className })}>
        <span
          className="rounded-full border-slate-200/20 hover:cursor-pointer hover:bg-slate-200 text-2xl p-2 absolute right-0"
          onClick={toggleDropzone}
        >
          %times;
        </span>
        <input {...getInputProps()} />
        {isDragActive ? (
          <h3>Add photos/videos</h3>
        ) : (
          <p className="text-sm text-slate-100/80">or drag and drop</p>
        )}
      </div>

      {/* Preview */}
    </>
  );
};
