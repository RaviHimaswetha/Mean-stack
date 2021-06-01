import React from 'react';

const Header = ( sum ) => {
	return (
		<div>
			<h1>{ sum.name}</h1>
		</div>
	);
};

const Content = (sum) => {
	return (
		<div>
      <p>
          {sum.task[0].name}  {sum.task[0].exercise}
          </p>
          <p>
          {sum.task[1].name}  {sum.task[1].exercise}
          </p>
          <p>
          {sum.task[2].name}  {sum.task[2].exercise}
      </p>
		
		</div>
	);
};

const Total = (sum) => {
	return (
		<div>
			<p>
				Number of exercise {sum.task[0].exercise + sum.task[1].exercise + sum.task[2].exercise}
			</p>
		</div>
	);
};



const App = () => {

  const course = 'Half Stack application development'
  const task = [
    {
      name: 'Fundamentals of React',
      exercise: 25
    },
    {
      name: 'Using props to pass data',
      exercise: 10
    },
    {
      name: 'State of a component',
      exercise: 15
    }
  ]


return (
  <div>
  
    <Header name={course} />
    <Content task={task} />
    <Total task={task} />
    
  </div>
);
};



export default App