import { useState } from "react";

const ReadMore = ({ context }: { context: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <p>
        {context.length >= 100 ? (
          <>{isExpanded ? context : `${context.substring(0, 100)}...`} </>
        ) : (
          <>{context} </>
        )}

        <span
          onClick={toggleReadMore}
          className="font-bold hover:cursor-pointer hover:underline"
        >
          {context.length >= 100 && (
            <>{isExpanded ? "Read Less" : "Read More"}</>
          )}
        </span>
      </p>
    </>
  );
};

export default ReadMore;
