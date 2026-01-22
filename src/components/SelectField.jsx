import { useEffect, useRef, useState } from "react";

/* 🔹 Normaliza texto (acentos, maiúsculas) */
function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function SelectField({
  label,
  options = [],
  value,
  onChange,
  required = false,
  placeholder = "Digite para buscar...",
}) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const containerRef = useRef(null);

  /* 🔹 Sincroniza value externo */
  useEffect(() => {
    const selected = options.find((opt) => opt.value === value);
    if (selected) {
      setSearch(selected.label);
    } else {
      setSearch("");
    }
  }, [value, options]);

  /* 🔹 Fecha ao clicar fora */
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
        setHighlightedIndex(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* 🔹 Filtro autocomplete (nome, cidade, sigla) */
    const filteredOptions = (search
      ? options.filter((option) =>
          normalize(`${option.label} ${option.value}`).includes(
            normalize(search)
          )
        )
      : options
    ).slice(0, 200);

  function handleSelect(option) {
    onChange({
      target: { value: option.value },
    });
    setSearch(option.label);
    setOpen(false);
    setHighlightedIndex(-1);
  }

  function handleKeyDown(e) {
    if (!open) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev < filteredOptions.length - 1 ? prev + 1 : 0
      );
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredOptions.length - 1
      );
    }

    if (e.key === "Enter" && highlightedIndex >= 0) {
      e.preventDefault();
      handleSelect(filteredOptions[highlightedIndex]);
    }

    if (e.key === "Escape") {
      setOpen(false);
      setHighlightedIndex(-1);
    }
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-col gap-2 w-full relative"
    >
      <label className="text-indigo-200 font-[Poppins]">
        {label} {required && "*"}
      </label>

      <input
        type="text"
        value={search}
        placeholder={placeholder}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpen(true);
          setHighlightedIndex(-1);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
        className="w-full rounded-md bg-black border border-gray-500 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {open && filteredOptions.length > 0 && (
        <ul className="absolute top-full mt-1 w-full max-h-48 overflow-auto rounded-md bg-black border border-gray-600 z-10">
          {filteredOptions.map((option, index) => (
            <li
              key={option.value}
              onMouseDown={() => handleSelect(option)}
              className={`px-3 py-2 cursor-pointer text-white ${
                index === highlightedIndex
                  ? "bg-indigo-600"
                  : "hover:bg-indigo-500"
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}