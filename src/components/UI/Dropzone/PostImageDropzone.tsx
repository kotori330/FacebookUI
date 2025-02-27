import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "../../../utils/clsx";

export const ImageVideoDropzone = ({
  className,
  // onFilesChange,
}: {
  className?: string;
  // onFilesChange: (file: File[]) => void;
}) => {
  const [files, setFiles] = useState<(File & { preview: string })[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length) {
      // const newFiles = acceptedFiles.map()
      setFiles((prevFiles) => [
        ...prevFiles,
        ...acceptedFiles.map((file) =>
       
          Object.assign(file, { preview: URL.createObjectURL(file) }) // Create preview URL
        ),
      ]);
    }
    // debug
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div {...getRootProps({ className: className })}>
        <input {...getInputProps()} />

        <div
          className={cn(
            "fixed",
            "top-0",
            "left-0",
            "w-full",
            "h-full",
            "bg-slate-500/20",
            "z-100",
            "backdrop-blur-xs",
            "hidden",
            { "!block": isDragActive }
          )}
        >
          <span className="flex justify-center items-center h-full  text-4xl">
            Drop photos or videos
          </span>
        </div>

        {files.length > 0 ? (
          <>
            <ul className="w-full h-full grid auto-rows-auto gap-4">
              {files.map((file) => (
                <li
                  key={`${file.name}-${file.lastModified}`}
                  className="w-full h-full"
                >
                  <img
                    src={file.preview}
                    alt={file.name}
                    className="w-full h-full rounded"
                    onLoad={() => {
                      URL.revokeObjectURL(file.preview);
                    }}
                  />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <div className="text-center">
              <h3>Add photos/videos</h3>
              <p className="text-xs">or drag and drop</p>
            </div>
          </>
        )}
      </div>

      {/* Preview */}
    </>
  );
};
