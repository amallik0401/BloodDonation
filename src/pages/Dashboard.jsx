import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <section className="dashboard">
      <h2 className="page-title">Student Dashboard</h2>
      <p className="page-subtitle">
        Access your examination admit card and exam routine.
      </p>

      <div className="card-grid">
        <article
          className="card dashboard-card"
          onClick={() => navigate('/admit-card')}
        >
          <h3 className="card-title">Admit Card</h3>
          <p className="card-body-text">
            View and download your semester examination admit card with exam
            schedule and seating details.
          </p>
          <button type="button" className="btn btn-text">
            View Admit Card →
          </button>
        </article>

        <article
          className="card dashboard-card"
          onClick={() => navigate('/exam-routine')}
        >
          <h3 className="card-title">Exam Routine</h3>
          <p className="card-body-text">
            Check upcoming exams, today&apos;s exam, and completed exams with
            attendance status.
          </p>
          <button type="button" className="btn btn-text">
            View Exam Routine →
          </button>
        </article>
      </div>
    </section>
  );
}

export default Dashboard;



