import '../style/greetings.css';

function Greetings(props) {
  let hello = '';

  switch (props.lang) {
    case 'de':
      hello = 'Hallo';
      break;
    case 'fr':
      hello = 'Bonjour';
      break;
    case 'es':
      hello = 'Holà';
      break;
    case 'en':
      hello = 'Hello';
      break;
  }

  return (
    <div className="greetings">
      {hello} {props.children}
    </div>
  );
}

export default Greetings;
