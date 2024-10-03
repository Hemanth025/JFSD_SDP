import React from 'react';
import './ActivityList.css';

function ActivityList() {
    const activities = {
        todo: [
            { id: 1, title: "Assignment 1", description: "Complete the math assignment." },
            { id: 2, title: "Research Paper", description: "Start the research paper on AI." }
        ],
        inProgress: [
            { id: 3, title: "Group Project", description: "Collaborating on the group project." }
        ],
        done: [
            { id: 4, title: "Assignment 2", description: "Submitted the history assignment." },
            { id: 5, title: "Project 1", description: "Finished the web development project." }
        ]
    };

    return (
        <div className="kanban-container">
            <h1>Activity List</h1>
            <div className="kanban-board">
                <div className="kanban-column todo">
                    <h2>TO DO</h2>
                    {activities.todo.map(activity => (
                        <div key={activity.id} className="kanban-card">
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>
                        </div>
                    ))}
                </div>

                <div className="kanban-column in-progress">
                    <h2>IN PROGRESS</h2>
                    {activities.inProgress.map(activity => (
                        <div key={activity.id} className="kanban-card">
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>
                        </div>
                    ))}
                </div>

                <div className="kanban-column done">
                    <h2>DONE</h2>
                    {activities.done.map(activity => (
                        <div key={activity.id} className="kanban-card">
                            <h3>{activity.title}</h3>
                            <p>{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ActivityList;
