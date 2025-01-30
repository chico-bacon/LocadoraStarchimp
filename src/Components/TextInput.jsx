
function TextInput({id, label, value, setValue}) {

    return (
        <div>
            <label for={id}>{label}</label>
            <input
            id={id}
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
            />
        </div>
    )
};

export default TextInput