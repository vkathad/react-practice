import Alert1 from 'react-bootstrap/Alert';

function ErrorMessage(props) {
  return (
    <>
      {<Alert1 key='primary' variant='primary'>
            {props.message}
        </Alert1>}
    </>
  );
}

export default ErrorMessage;