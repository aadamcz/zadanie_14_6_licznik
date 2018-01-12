var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	getDefaultProps: function() {
		return {
			defaultProperty: "This is a default property"
		};
	},

	increment: function() {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function() {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	componentWillMount: function() {
		console.log(
			"ComponentWillMount, Komponent za chwilę będzie zamontowany."
		);
	},
	componentDidMount: function() {
		console.log("componentDidMount, Komponent zamontowany.");
	},
	componentWillReceiveProps: function() {
		console.log(
			"componentWillReceiveProps, Komponent odbiera nowe i aktualizuje atrybuty i stany."
		);
	},
	shouldComponentUpdate: function() {
		console.log("Czy atrybut lub komponent wymaga aktualizacji?");
		return true;
	},
	componentWillUpdate: function() {
		console.log(
			"Komponent będzie aktualizowany jeśli shouldComponentUpdate zwróci true. Nie można tutaj zmieniać stanów."
		);
	},
	componentDidUpdate: function() {
		console.log(
			"Komponent jest aktualizowany. Można wprowadzać zmiany w DOM."
		);
	},
	componentWillUnmount: function() {
		console.log("Odmontowanie komponentu, usuwanie z DOM.");
	},

	render: function() {
		return React.createElement(
			"div",
			{},
			React.createElement("div", {}, "Licznik " + this.state.counter),
			React.createElement(
				"button",
				{ onClick: this.increment },
				React.createElement("span", {}, "+")
			),
			React.createElement(
				"button",
				{ onClick: this.decrement },
				React.createElement("span", {}, "-")
			)
		);
	}
});

var element = React.createElement(
	"div",
	{},
	React.createElement(Counter, {}, "Counter No1"),
	React.createElement(Counter, {}, "Counter No2"),
	React.createElement(Counter, {}, "Counter No3"),
	React.createElement(Counter, {}, "Counter No4")
);

ReactDOM.render(element, document.getElementById("app"));
