import {FormEvent} from "react";

type Props = {
  label: string;
  iconUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  fullWidth?: boolean;
  onClick?: (event: FormEvent) => void;
};

const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  onClick,
}: Props) => {
  return (
    <button
      className={`mx-auto flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : `bg-red-600 text-white border-coral-red`
      }
      ${fullWidth && "w-full"}
      `}
      onClick={onClick}
    >
      {label}

      {iconUrl && (
        <img src={iconUrl} alt="Icon" className="ml-2 rounded-full w-5 h-5" />
      )}
    </button>
  );
};

export default Button;
