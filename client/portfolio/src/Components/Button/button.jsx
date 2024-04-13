import './button.scss'
const Button = ({ width,height,BorderRadius, text }) => {
    const style = {
        width: width,
        height:height,
        borderRadius:BorderRadius
    };

    return (
        <>
            <button style={style} className="custom-button">
            {text}
            </button>
        </>
    );
};

export default Button;