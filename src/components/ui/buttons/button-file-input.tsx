import { Input } from "@/components/ui/inputs/input";
import { Button } from "@/components/ui/buttons/button";
import { UploadSimple } from "@phosphor-icons/react/dist/ssr";

interface ButtonFileInputProps {
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function ButtonFileInput({ children, onChange }: ButtonFileInputProps) {
  return (
    <div>
      <Input
        id="picture"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onChange}
      />
      <Button
        type="button"
        variant="outline"
        className="cursor-pointer"
        onClick={() => document.getElementById("picture")?.click()}
      >
        <UploadSimple size={20} />
        {children}
      </Button>
    </div>
  );
}
