import { DragDropContext } from 'react-beautiful-dnd';

// Miami Marlins OG Color Scheme for colors!
const useStyles = makeStyles({
    root: {
        margin: 10,
        alignItems: "center"
    },
    card: {
        padding: 10,
        backgroundColor: "dark-gray",
        borderColor: "#FA4616",
        borderStyle: "solid",
        color: "#27251F"
    },
    header: {
        borderColor: "#8A8D8F",
        borderBottomColor: "#FA4616",
        textAlign: "center",
        borderStyle: "solid",
        borderWidth: "3px"
    }
});

<DragDropContext>
  <Droppable droppableId="characters">
    {(provided) => (
      <ul className="characters">
        ...
      </ul>
    )}
  </Droppable>
</DragDropContext>