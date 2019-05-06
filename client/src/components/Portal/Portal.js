import ReactDOM from 'react-dom';

const Portal = props => {
    
        return ReactDOM.createPortal(
            props.children,
            document.querySelector(props.rootSelector)
        );
  
};

export default Portal;