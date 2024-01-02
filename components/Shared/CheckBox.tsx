import React from "react";

type Props = {
  setState: any;
  active: boolean;
  name: string;
};
const CheckBox: React.FC<Props> = ({ name, active, setState }) => {
  return (
    <div
      onClick={() => setState}
      className={`h-[40px] sm:w-[212px] w-full flex items-center justify-start gap-3 group px-3 rounded-[10px] border border-gray ${
        active ? "bg-brand-secondary" : "bg-transparent"
      } hover:bg-brand-secondary cursor-pointer hover:duration-200`}
    >
      <span
        className={`h-[15px] w-[15px] border rounded-full ${
          active ? "bg-brand-main" : "bg-transparent"
        }  border-black-off group-hover:bg-brand-main group-hover:duration-200`}
      ></span>
      <p
        className={`text-[15px] ${
          active ? "text-black-main" : "text-white-main"
        } font-normal group-hover:text-black-main group-hover:duration-200`}
      >
        {name}
      </p>
    </div>
  );
};

export default CheckBox;