import EmailInputButton from '@/img/email-input-button.svg'
import NumberInputButton from '@/img/number-input-button.svg'
import PasswordInputButton from '@/img/password-input-button.svg'
import PhoneInputButton from '@/img/phone-input-button.svg'
import RangerInputButton from '@/img/ranger-input-button.svg'
import SearchInputButton from '@/img/search-input-button.svg'
import TextInputButton from '@/img/text-input-button.svg'
import UrlInputButton from '@/img/url-input-button.svg'
import { ReactSVG } from 'react-svg';

interface IconButtonProps {
  src: string;
  label: string;
}

type InputButton =
  | typeof EmailInputButton
  | typeof NumberInputButton
  | typeof PasswordInputButton
  | typeof PhoneInputButton
  | typeof RangerInputButton
  | typeof SearchInputButton
  | typeof TextInputButton
  | typeof UrlInputButton;

const importIcon = (name: string): InputButton => {
  switch (name) {
    case 'email-input-button':
      return EmailInputButton;
    case 'number-input-button':
      return NumberInputButton;
    case 'password-input-button':
      return PasswordInputButton;
    case 'phone-input-button':
      return PhoneInputButton;
    case 'ranger-input-button':
      return RangerInputButton;
    case 'search-input-button':
      return SearchInputButton;
    case 'text-input-button':
      return TextInputButton;
    case 'url-input-button':
      return UrlInputButton;
    default:
      throw new Error(`Unsupported type: ${name}`);
  }
}

const IconButton: React.FC<IconButtonProps> = ({ src, label }) => {
  return (
    <div className="flex flex-col w-20 h-20">
      <div className="h-20 rounded-md bg-slate-100 flex items-center justify-center active:cursor-grabbing cursor-grab">
        <ReactSVG src={importIcon(src)} />
      </div>
      <div className="h-4 flex justify-center text-center">{label}</div>
    </div>
  );
}

export default IconButton;
