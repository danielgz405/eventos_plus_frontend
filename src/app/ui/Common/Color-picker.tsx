import { ChangeEvent } from 'react';
import { CirclePicker, ColorResult } from 'react-color';

type CirclePickerprops = {
  colors: string[];
  value: string;
  disabled?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (color: ColorResult, e: ChangeEvent<HTMLInputElement>) => void;
};

export const defaultPaletColor = [
  '#f43f5e',
  '#ec4899',
  '#d946ef',
  '#a855f7',
  '#8b5cf6',
  '#6366f1',
  '#3b82f6',
  '#0ea5e9',
  '#06b6d4',
  '#14b8a6',
  '#10b981',
  '#22c55e',
  '#84cc16',
  '#eab308',
  '#f59e0b',
  '#f97316',
  '#ef4444',
  '#854d0e',
  '#64748b',
  '#f9fafb',
];

export function CircleColorPicker({ colors, value, disabled = false, onChange }: CirclePickerprops) {
  return (
    <div className="w-full flex justify-center">
      <CirclePicker width="420px" colors={colors} color={value} onChange={(color, e) => !disabled && onChange(color, e)} />
    </div>
  );
}
