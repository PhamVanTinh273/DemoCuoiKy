import axios from "axios";

function ItemUser({ id, email, feedback, handleDelete}) {
  return (
    <tr>
      <td>{email}</td>
      <td>{feedback}</td>
      {/* <td>
        <button
          onClick={() => {
            handleDelete(id);
          }}
          type="button"
          class="btn btn-outline-danger"
        >
          Delete
        </button>
        <button type="button" class="btn btn-outline-warning">
          Edit
        </button>
      </td> */}
    </tr>
    
  );
}
export default ItemUser;
