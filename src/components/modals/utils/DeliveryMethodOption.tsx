type Props = {
    optionName: "Delivery" | "Take Away";
    optionDescription: string;
    selected: boolean;
    onSelect: () => void;
}

export default function DeliveryMethodOption({ optionName, optionDescription, selected, onSelect}: Props) {

  return (
    <label aria-labelledby={optionName} htmlFor={optionName} className={`cursor-pointer w-full flex justify-between items-center p-4 rounded-md border-2 ${selected ? 'border-red-500' : ''}`}>
        <p className="flex-1 flex flex-col">
            <span>{optionName}</span>
            <span>{optionDescription}</span>
        </p>
        <input 
          type="radio"
          name="delivery-method"
          id={optionName}
          value={optionName} 
          checked={selected} 
          onChange={onSelect}
          className="appearance-none w-4 h-4 border-2 border-red-500 rounded-full checked:border-red-500 checked:border-4 focus:outline-none cursor-pointer"
          />
    </label>
  )
}
