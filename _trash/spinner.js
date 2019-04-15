import MDSpinner from 'react-md-spinner';

class Spinner extends React.Component {
    render() {
        if (this.props.state.loading) || (!this.props.state.users.length)  {
            return <div className="spinner"><MDSpinner size={75} /></div>
        }
    }
}

export default Spinner


