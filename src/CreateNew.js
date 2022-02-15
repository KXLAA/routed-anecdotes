import { useNavigate } from "react-router-dom";
import { useField } from "./hooks";

const CreateNew = (props) => {
  const content = useField("text");
  const author = useField("text");
  const info = useField("text");
  const { reset } = useField("button");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    navigate("/");
    props.setNotification(`a new anecdote ${content.value} created!`);
    setTimeout(() => {
      props.setNotification(false);
    }, 5000);
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button>create</button>
        <button type="button" onClick={reset}>
          reset
        </button>
      </form>
    </div>
  );
};

export default CreateNew;
