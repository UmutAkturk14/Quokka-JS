import React from "react";
import type { VersionTagProps } from "@interfaces";

const VersionTag: React.FC<VersionTagProps> = ({ version, title }) => {
  return (
    <div>
      <div className="flex gap-2 justify-center items-center bg-yellow-100 px-6 py-2 rounded-full">
        <p className="text-amber-600 font-bold">v{version}</p>
        <p className="text-gray-500 font-semibold">{title}</p>
      </div>
    </div>
  );
};

export default VersionTag;
