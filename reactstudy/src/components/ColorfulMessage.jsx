export const ColorfulMessage = (props) => {
    const {color, message} = props;

    const testStyle = {
      color,
      message: message
    }
    return (
      <>
        <p style={testStyle}>{testStyle.message}</p>
      </>
    )
}
