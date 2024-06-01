import PropTypes from 'prop-types';

const Button = ({ addCount }) => {
    return (
        <button onClick={addCount}>Add 1!</button>
    );
};

Button.propTypes = {
    addCount: PropTypes.func.isRequired
};

export default Button;