import { Tag } from "antd";

/**
 * Chips for markup categorize tag component
 *
 * @param props
 * @example
 * (
 *  default chips
 *  <Chips value='title..'>
 *
 *
 *  chips with option
 *  const optionList = [
 *    {
 *        key: 1,
 *        value: Approved,
 *        color: '#fffff',
 *        icon: <LoadingIcon/>
 *    }
 *  ]
 *  <Chips value={value} option={optionList}/>
 * )
 * @returns
 */

const Chips = ({
  className = "",
  color = "transparent",
  value,
  options,
  onClick,
}) => {
  const selected = options?.find(
    (dt) => dt.value === value || dt.key === value
  );

  return (
    <div>
      <Tag
        color={options ? selected?.color : "default"}
        onClick={onClick}
        className={className}
      >
        {options ? selected?.value || "-" : value}
      </Tag>
    </div>
  );
};

export default Chips;
