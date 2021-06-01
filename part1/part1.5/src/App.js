import React from 'react';


const Header = ({ course }) => {
	return (
		<div>
			<h1>{course.name}</h1>
		</div>
	);
};

const Content = ({sum}) => {
	return (
		<div>
			<Part part={sum.task[0].name} exercise={sum.task[0].exercise} />
			<Part part={sum.task[1].name} exercise={sum.task[1].exercise} />
			<Part part={sum.task[2].name} exercise={sum.task[2].exercise} />
		</div>
	);
};

const Total = ({sum}) => {
	return (
		<div>
			<p>
				Number of exercise {sum.task[0].exercise + sum.task[1].exercise + sum.task[2].exercise}
			</p>
		</div>
	);
};

const Part = (mean) => {
	return (
		<div>
			<p>
				{mean.part} {mean.exercise}
			</p>
		</div>
	);
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		task: [
			{
				name: 'Fundamentals of React',
				exercise: 15
			},
			{
				name: 'Using props to pass data',
				exercise: 10
			},
			{
				name: 'State of a component',
				exercise: 25
			}
		]
	};

	return (
		<div>
			<Header course={course} />
			<Content sum={course} />

			<Total sum={course} />
		</div>
	);
};

export default App