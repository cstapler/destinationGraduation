/**
 * Created by Jgn on 9/17/16.
 */
var data = [
    {id: 1, class: "Com Sci 363", semester: "Spring", major: true, year: "Sophomore"},
    {id: 2, class: "Com Sci 230", semester: "Fall", major: true, year: "Junior"}
];

var SemesterBox = React.createClass({
    render: function() {
        return (
            <div className="semesterBox">
                <h1>Classes</h1>
                <ClassList data={this.props.data} />

            </div>
        );
    }
});

var ClassList = React.createClass({
    render: function() {
        var classNodes = this.props.data.map(function(classes) {
            return (
                <Class className={data.class} key={data.id}>
                    {data.semester}
                </Class>
            );
        });
        return (
            <div className="classList">
                {classNodes}
            </div>
        );
    }
});

var Class = React.createClass({
    rawMarkup: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    },
    render: function() {
        return (
            <div className="classes">
                <h2 className="className">
                    {this.props.class}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

ReactDOM.render(
    <SemesterBox data={data} />,
    document.getElementById('content')
);