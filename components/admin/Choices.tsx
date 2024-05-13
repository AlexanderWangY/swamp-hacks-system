import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import Choice from '@/components/admin/Choice';

type answerChoice = {
  value: string;
  id: string;
};

export default function Choices({
  choices,
  setChoices,
  editable = true,
}: {
  choices: answerChoice[];
  setChoices: any;
  editable?: boolean;
}) {
  return (
    <SortableContext items={choices} strategy={verticalListSortingStrategy}>
      {choices.map((choice: answerChoice) => (
        <Choice
          key={choice.id}
          choices={choices}
          choice={choice}
          setChoices={setChoices}
          editable={editable}
        />
      ))}
    </SortableContext>
  );
}
