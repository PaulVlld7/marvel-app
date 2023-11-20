<<<<<<< HEAD
export function NumberOfCharacters({ characters = [] }) {
  return (
    <p>
      There is {characters.length === 0 ? 'no' : characters.length} character{characters.length !== 1 ? 's' : ''}
    </p>
  );
=======
export function NumberOfCharacters({ characters }) {
    if (characters.length === 0) {
      return <p>There is no characters</p>;
    }

    return <p>There is {characters.length} characters</p>;
>>>>>>> 1f124a4514f449bdbb94bcc8f9e7ca35f6538712
}
