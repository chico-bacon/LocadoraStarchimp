function TextField({id, label, ph, cols, rows, value, setValue}) {
    return(
        <div>
            <label for={id}>{label}</label>
            <textarea
            id={id}
            placeholder={ph}
            cols={cols}
            rows={rows}
            value={value}
            onChange={event => setValue(event.target.value)}/>
        </div>
    )
}

export default TextField