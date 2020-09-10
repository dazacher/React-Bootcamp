class Hello extends React.Component {
    render() {
        console.log(this.props);
        let bangs = "!".repeat(this.props.bangs);
        // this.props.from = "BLUE";  can't be done read only, can't be changed
        return (
            <div>
                <p>Hello {this.props.to} from {this.props.from}{bangs}</p>
                <img src={this.props.img}/>
            </div>
        )
    }
}