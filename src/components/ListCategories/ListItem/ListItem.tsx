import {
  useFilterName,
  useUpdateFilterName,
  useUpdateFilteredToDos
} from '../../../store/ToDoStore';
import { CategoryInterface } from '../ListCategories';
import AddCategoryInput from './AddCategoryInput/AddCategoryInput';

interface ListItemInterface {
  item: CategoryInterface;
}

export const getDefaultClasses = () => `
  cursor-pointer 
  hover:text-primary/50 
  transition-colors
`;

export default function ListItem({ item }: ListItemInterface) {
  const filterName = useFilterName();
  const updateFilterName = useUpdateFilterName();

  const updateFilteredToDos = useUpdateFilteredToDos();

  const getOnClickFn = (itemParam: CategoryInterface) => () => {
    if (itemParam.filterFn) {
      updateFilteredToDos(itemParam.filterFn);
    }

    updateFilterName(itemParam.name);
  };

  const className = `
    ${getDefaultClasses()}
    ${filterName === item.name ? 'text-primary' : ''}
  `;

  if (!item.children) {
    return (
      <li className={className} onClick={getOnClickFn(item)}>
        {item.name}
      </li>
    );
  }

  return (
    <li>
      <details>
        <summary className={className}>Categories</summary>
        <ul className="text-lg leading-10">
          <AddCategoryInput />
          {item.children.map((childrenItem, index) => (
            <ListItem key={index} item={childrenItem} />
          ))}
        </ul>
      </details>
    </li>
  );
}
