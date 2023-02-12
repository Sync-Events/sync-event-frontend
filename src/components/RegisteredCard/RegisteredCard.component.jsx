function RegisteredCard(data) {
    return(
        <div className="card" >
        <ul className="list-group list-group-flush">
            {data}
            <a className="list-group-item" href={data}>{data}</a>
            <a className="list-group-item">A second item</a>
            <a className="list-group-item">A third item</a>
        </ul>
        </div>
 )
}

export default RegisteredCard