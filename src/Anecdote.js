import { useParams } from "react-router-dom";

const Anecdote = ({ anecdotes }) => {
  let params = useParams();
  const anecdote = anecdotes.find((n) => n.id === Number(params.id));
  console.log(anecdote);

  return (
    <div>
      <h2>Anecdote</h2>

      <h1>{anecdote.content}</h1>
      <p> has {anecdote.votes} votes</p>
    </div>
  );
};

export default Anecdote;
