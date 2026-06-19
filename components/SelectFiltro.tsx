"use client";

import { useState, useRef, useEffect } from "react";

interface SelectFiltroProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder: string;
}

export default function SelectFiltro({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
}: SelectFiltroProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = value || placeholder;
  const isPlaceholder = !value;

  return (
    <div ref={ref} className="relative w-full">
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider"
      >
        {label}
      </label>

      {/* Trigger */}
      <button
        id={id}
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full bg-white border rounded-xl px-4 py-3 text-sm text-left flex items-center justify-between gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6002]/40 ${
          open ? "border-[#FF6002]" : "border-gray-200"
        }`}
      >
        <span className={`truncate ${isPlaceholder ? "text-gray-400" : "text-[#070606] font-medium"}`}>
          {selected}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <ul
            role="listbox"
            className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-h-60 overflow-y-auto"
        >
          {/* Placeholder option */}
          <li
            role="option"
            aria-selected={isPlaceholder}
            onClick={() => { onChange(""); setOpen(false); }}
            className={`px-4 py-3 text-sm cursor-pointer transition-colors hover:bg-[#FF6002]/5 ${
              isPlaceholder ? "text-[#FF6002] font-semibold" : "text-gray-400"
            }`}
          >
            {placeholder}
          </li>

          {/* Divider */}
          <li className="border-t border-gray-100 mx-3" />

          {/* Options */}
          {options.map((opt) => (
            <li
              key={opt}
              role="option"
              aria-selected={value === opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`px-4 py-3 text-sm cursor-pointer truncate transition-colors hover:bg-[#FF6002]/5 ${
                value === opt
                  ? "text-[#FF6002] font-semibold bg-[#FF6002]/5"
                  : "text-[#070606]"
              }`}
              title={opt}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}