import SyncLoader from 'react-spinners/SyncLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: '#1c7ed6',
};

const Spinner = (props) => (
  <div className="spinner-container">
    <SyncLoader
      color="#1c7ed6"
      loading
      cssOverride={override}
      size={20}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  </div>
);

export default Spinner;
