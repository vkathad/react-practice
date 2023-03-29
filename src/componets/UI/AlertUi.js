import Alert1 from 'react-bootstrap/Alert';

function AlertUi() {
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert1 key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert1>
      ))}
    </>
  );
}

export default AlertUi;