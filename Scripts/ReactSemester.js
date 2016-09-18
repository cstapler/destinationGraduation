/**
 * Created by Jgn on 9/17/16.
 */
var data = [
    {id: 1, myclass: "Com Sci 363", semester: "Spring", major: true},
    {id: 2, myclass: "Com Sci 230", semester: "Fall", major: true}
];

var SemesterBox = React.createClass({
    render: function() {
        return (
            <div className="semesterBox">
                <h3 id="fSemester">Fall Semester</h3>
                <ClassList class="card" data={this.props.data} />

            </div>
        );
    }
});

var ClassList = React.createClass({
    render: function() {
        var classNodes = this.props.data.map(function(classes) {
            return (
                <Class classesName={classes.myclass} key={classes.id}>
                    {classes.myclass}
                    {classes.semester}

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
    render: function() {
        var md = new Remarkable();
        var rawMarkup = md.render(this.props.children.toString());
        return (
            <div className="card-panel hoverable" id="classCard">
                <div id="myClass">
                    {this.props.myclass}
                </div>
                <div className="card-content white-text">
                    <span className="card-title"></span>
                    <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                </div>
                <div className="card-action">
                    <a href="#">{this.props.semester}</a>
                    <a href="#">This is a link</a>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <SemesterBox data={data} />,
    document.getElementById('content')
);