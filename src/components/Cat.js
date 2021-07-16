const Cat = (props) => (
    <div>
        <h1>Cat 🐈 </h1>
        <pre>{ JSON.stringify(props, null, 4) }</pre>
    </div>
)
export default Cat;