export const Book=(props)=>{
    return (
        <article>
            <h2>{props.title}</h2>
            <main>{props.description}</main>
            <footer>
                <span>Author: {props.author}</span>
            </footer>
        </article>
    )
}