
function PassInput({id, label, value, setValue}) {

    return (
        <div>
            <label for={id}>{label}</label>
            <input
            id={id}
            type="password"
            value={value}
            onChange={event => setValue(event.target.value)}
            />
        </div>

    )
};

export default PassInput