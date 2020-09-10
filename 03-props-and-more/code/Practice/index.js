class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to="Ringo"
                    from="Paul"
                    num={3}
                    data={[1, 2, 3, 4, 5]}
                    isFunny
                    bangs={4}
                    img="https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                />
                <Hello
                    to="Britney"
                    from="Adele"
                    bangs={10}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))