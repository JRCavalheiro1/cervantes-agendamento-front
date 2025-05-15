import { forwardRef } from "react";
import { IMaskInput } from "react-imask";
import { cn } from "@/lib/utils";

interface InputPrecoProps {
  value: string;
  onChange: (value: string) => void;
}

export const InputPreco = forwardRef<HTMLInputElement, InputPrecoProps>(
  ({ value, onChange }, ref) => (
    <IMaskInput
      className={cn(
        '"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-cinza-100 md:text-sm" flex h-[42px] w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:h-[47px]',
      )}
      mask="R$ num"
      placeholder="R$ 0,00"
      blocks={{
        num: {
          mask: Number,
          thousandsSeparator: ".",
          padFractionalZeros: true,
          radix: ",",
          scale: 2,
          normalizeZeros: true,
        },
      }}
      unmask={true}
      value={value}
      onAccept={(val: string | number) => onChange(String(val))}
      inputRef={ref as React.Ref<HTMLInputElement>}
      as="input"
    />
  ),
);

InputPreco.displayName = "InputPreco";
