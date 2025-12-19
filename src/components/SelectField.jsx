export function SelectField({
  label,
  options = [],
  value,
  onChange,
  required = false,
  placeholder = "Selecione uma opção",
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-indigo-200 font-[Poppins]">
        {label} {required && "*"}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="w-full rounded-md bg-black border border-gray-500 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
        ))}
      </select>
    </div>
  );
}
